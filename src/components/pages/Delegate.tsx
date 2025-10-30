import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger } from '../ui/select';
// import { Badge } from '../ui/badge';
// import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Card, CardContent } from '../ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Search, AlertTriangle } from 'lucide-react';
import { DelegateDetailModal } from '../DelegateDetailModal';
import { DelegateVotingModal } from '../DelegateVotingModal';
import { BecomeADelegateModal } from '../BecomeADelegateModal';
import { ConnectWalletButton } from '../ConnectWalletButton';
import { toast } from 'sonner';
import { useUser } from '../UserContext';
import {NavigationItem} from "@/app/page";
import { useAuth } from "@futureverse/auth-react";
import {useDelegates} from "@/hooks/useDelegates";
import {useCouncilMembers} from "@/hooks/useCouncilMembers";

interface Delegate {
  id: string;
  name: string;
  address: string;
  votingPower: number;
  totalDelegators: number;
  participation: number;
  description: string;
  socialLinks: {
    discord?: string;
    twitter?: string;
  };
  tracks: string[];
  votingHistory: Array<{
    proposalId: string;
    title: string;
    date: string;
    vote: 'aye' | 'nay';
  }>;
}

interface UserDelegation {
  delegateId: string;
  amount: string;
  conviction: number;
}

// Mock user delegations - simulates which delegates the user has tokens delegated to
const mockUserDelegations: UserDelegation[] = [
  {
    delegateId: '1',
    amount: '2,000 ROOT',
    conviction: 3,
  },
  {
    delegateId: '3',
    amount: '1,500 ROOT',
    conviction: 6,
  },
];

const mockDelegates: Delegate[] = [
  {
    id: '1',
    name: 'FV Seona',
    address: '0vndh8..94803',
    votingPower: 837000,
    totalDelegators: 837,
    participation: 837,
    description: 'Biompatible approach, in which now XC-20s are actual ERC-20 tokens with EVM bytecode, the XCM fee approach was changed to use a we.',
    socialLinks: {
      discord: '#',
      twitter: '#'
    },
    tracks: ['Track name', 'Track name', 'Track name', 'Track name'],
    votingHistory: [
      { proposalId: '1', title: 'Proposal title goes here', date: '12 July 2025', vote: 'aye' },
      { proposalId: '2', title: 'Proposal title goes here', date: '12 July 2025', vote: 'aye' },
      { proposalId: '3', title: 'Proposal title goes here', date: '12 July 2025', vote: 'aye' },
    ]
  },
  {
    id: '2',
    name: 'FV Seona',
    address: '0vndh8..94803',
    votingPower: 837000,
    totalDelegators: 837,
    participation: 837,
    description: 'Biompatible approach, in which now XC-20s are actual ERC-20 tokens with EVM bytecode, the XCM fee approach was changed to use a we.',
    socialLinks: {
      discord: '#',
      twitter: '#'
    },
    tracks: ['Track name', 'Track name', 'Track name', 'Track name'],
    votingHistory: [
      { proposalId: '1', title: 'Proposal title goes here', date: '12 July 2025', vote: 'aye' },
      { proposalId: '2', title: 'Proposal title goes here', date: '12 July 2025', vote: 'aye' },
      { proposalId: '3', title: 'Proposal title goes here', date: '12 July 2025', vote: 'aye' },
    ]
  },
  {
    id: '3',
    name: 'FV Seona',
    address: '0vndh8..94803',
    votingPower: 837000,
    totalDelegators: 837,
    participation: 837,
    description: 'Biompatible approach, in which now XC-20s are actual ERC-20 tokens with EVM bytecode, the XCM fee approach was changed to use a we.',
    socialLinks: {
      discord: '#',
      twitter: '#'
    },
    tracks: ['Track name', 'Track name', 'Track name', 'Track name'],
    votingHistory: [
      { proposalId: '1', title: 'Proposal title goes here', date: '12 July 2025', vote: 'aye' },
      { proposalId: '2', title: 'Proposal title goes here', date: '12 July 2025', vote: 'aye' },
      { proposalId: '3', title: 'Proposal title goes here', date: '12 July 2025', vote: 'aye' },
    ]
  },
  {
    id: '4',
    name: 'FV Seona',
    address: '0vndh8..94803',
    votingPower: 837000,
    totalDelegators: 837,
    participation: 837,
    description: 'Biompatible approach, in which now XC-20s are actual ERC-20 tokens with EVM bytecode, the XCM fee approach was changed to use a we.',
    socialLinks: {
      discord: '#',
      twitter: '#'
    },
    tracks: ['Track name', 'Track name', 'Track name', 'Track name'],
    votingHistory: [
      { proposalId: '1', title: 'Proposal title goes here', date: '12 July 2025', vote: 'aye' },
      { proposalId: '2', title: 'Proposal title goes here', date: '12 July 2025', vote: 'aye' },
      { proposalId: '3', title: 'Proposal title goes here', date: '12 July 2025', vote: 'aye' },
    ]
  },
];

interface DelegateProps {
  onNavigate: (page: NavigationItem) => void;
  onSelectProposal: (id: string) => void;
}

export function Delegate({ onNavigate, onSelectProposal }: DelegateProps) {
  // const { isLoggedIn } = useUser();
  const { userSession } = useAuth();
  const eoa = userSession?.eoa;
  const fpass = userSession?.futurepass;
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('Popular');
  const [selectedDelegate, setSelectedDelegate] = useState<Delegate | null>(null);
  const [showDelegateModal, setShowDelegateModal] = useState(false);
  const [showVotingModal, setShowVotingModal] = useState(false);
  const [showBecomeADelegateModal, setShowBecomeADelegateModal] = useState(false);
  const [userDelegations, setUserDelegations] = useState<UserDelegation[]>(userSession ? mockUserDelegations : []);
  const [revokeModalOpen, setRevokeModalOpen] = useState(false);
  const [selectedDelegationToRevoke, setSelectedDelegationToRevoke] = useState<{delegate: Delegate, delegation: UserDelegation} | null>(null);
  const { data: delegateInfo } = useDelegates();

  const filteredDelegates = delegateInfo ? delegateInfo.filter((delegate) =>
    delegate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    delegate.address.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  const handleDelegateClick = (delegate: Delegate) => {
    setSelectedDelegate(delegate);
    setShowDelegateModal(true);
  };

  const handleDelegateVote = (delegate: Delegate) => {
    setSelectedDelegate(delegate);
    setShowVotingModal(true);
  };

  const getUserDelegation = (delegateId: string): UserDelegation | undefined => {
    return userDelegations.find(delegation => delegation.delegateId === delegateId);
  };

  const handleRevoke = (delegate: Delegate) => {
    const delegation = getUserDelegation(delegate.id);
    if (delegation) {
      setSelectedDelegationToRevoke({ delegate, delegation });
      setRevokeModalOpen(true);
    }
  };

  const confirmRevoke = () => {
    if (selectedDelegationToRevoke) {
      // Remove the delegation from the user's delegations
      const updatedDelegations = userDelegations.filter(
        delegation => delegation.delegateId !== selectedDelegationToRevoke.delegate.id
      );
      setUserDelegations(updatedDelegations);

      toast.success(`Delegation to ${selectedDelegationToRevoke.delegate.name} has been revoked`);
      setRevokeModalOpen(false);
      setSelectedDelegationToRevoke(null);
    }
  };

  const closeRevokeModal = () => {
    setRevokeModalOpen(false);
    setSelectedDelegationToRevoke(null);
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-foreground text-left">
            How to Delegate on Root Network
          </h1>
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-[10px] px-4 py-3 md:shrink-0"
            onClick={() => setShowBecomeADelegateModal(true)}
          >
            Become a Delegate
          </Button>
        </div>

        {/* Steps - Updated to match FeatureCard styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card rounded-xl p-3">
            <div className="space-y-1 text-left">
              <h4 className="text-foreground">Browse Delegates</h4>
              <p className="text-xs text-foreground">
                Token holders, not a sudo key, decide upgrades and spending.
              </p>
            </div>
          </div>
          <div className="bg-card rounded-xl p-3">
            <div className="space-y-1 text-left">
              <h4 className="text-foreground">Select Delegate</h4>
              <p className="text-xs text-foreground">
                Longer token locks earn more vote weight, favouring committed holders.
              </p>
            </div>
          </div>
          <div className="bg-card rounded-xl p-3">
            <div className="space-y-1 text-left">
              <h4 className="text-foreground">Set Root amount & Conviction</h4>
              <p className="text-xs text-foreground">
                An elected council can speed urgent security upgrades.
              </p>
            </div>
          </div>
        </div>

        <p className="caption text-muted-foreground text-left">
          * You have the ability to revoke delegates at any time.
        </p>
      </div>

      {/* Statistics */}
      <div className="bg-card rounded-2xl p-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Total Supply</p>
              <p className="text-xl md:text-2xl font-semibold text-foreground">242,008,999</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Delegated tokens</p>
              <p className="text-xl md:text-2xl font-semibold text-foreground">837K</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Total delegated votes</p>
              <p className="text-xl md:text-2xl font-semibold text-foreground">387k</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Total delegates</p>
              <p className="text-xl md:text-2xl font-semibold text-foreground">183</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-4 col-span-2 md:col-span-1">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Total delegators</p>
              <p className="text-xl md:text-2xl font-semibold text-foreground">12</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        <h2 className="text-foreground">Find a delegate</h2>

        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <Search size={18} className="text-muted-foreground" />
            </div>
            <Input
              placeholder="Search Delegates"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-input-background border-border pl-10 text-foreground placeholder:text-muted-foreground rounded-[10px]"
            />
          </div>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="bg-input-background border-0 text-foreground rounded-[10px] w-auto">
              <span className="flex items-center gap-1">
                <span className="text-foreground">Sort by:</span>
                <span className="text-primary">{sortBy}</span>
              </span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Popular">Popular</SelectItem>
              <SelectItem value="Recent">Recent</SelectItem>
              <SelectItem value="Oldest">Oldest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Delegates Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        {filteredDelegates.map((delegate) => (
          <Card key={delegate.id} className="bg-card border border-border cursor-pointer hover:border-white/80 transition-all duration-200">
            <CardContent className="p-5">
              <div className="space-y-6">
                {/* Header */}
                <div
                  className="flex items-center justify-between border-b border-border pb-3"
                  onClick={() => handleDelegateClick(delegate)}
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <h3 className="text-foreground font-bold text-lg">{delegate.name}</h3>
                      <p className="text-xs text-muted-foreground">{delegate.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => window.open('https://discord.gg/rootnetwork', '_blank')}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-150 p-1 rounded hover:bg-muted/50"
                      aria-label="Join our Discord"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20.317 4.37c-1.53-.69-3.17-1.2-4.885-1.47.3.48.65 1.13.89 1.65-1.8-.27-3.54-.27-5.34 0 .24-.52.59-1.17.89-1.65-1.715.27-3.355.78-4.885 1.47-4.4 6.58-5.61 13-5.02 19.34 2.01 1.48 3.96 2.38 5.86 2.96-.47-.64-.89-1.32-1.24-2.03.68.2 1.38.36 2.09.47-.15-.23-.29-.47-.42-.72 1.48.22 2.98.22 4.46 0-.13.25-.27.49-.42.72.71-.11 1.41-.27 2.09-.47-.35.71-.77 1.39-1.24 2.03 1.9-.58 3.85-1.48 5.86-2.96.69-7.36-1.17-13.75-4.94-19.34zm-8.54 15.49c-1.63 0-2.95-1.5-2.95-3.34s1.32-3.34 2.95-3.34 2.95 1.5 2.95 3.34-1.32 3.34-2.95 3.34zm5.54 0c-1.63 0-2.95-1.5-2.95-3.34s1.32-3.34 2.95-3.34 2.95 1.5 2.95 3.34-1.32 3.34-2.95 3.34z" fill="currentColor"/>
                      </svg>
                    </button>
                    <button
                      onClick={() => window.open('https://x.com/therootnetwork', '_blank')}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-150 p-1 rounded hover:bg-muted/50"
                      aria-label="Follow us on X"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground text-sm">{delegate.description}</p>

                {/* Stats */}
                <div className="flex gap-3">
                  <Card className="flex-1 bg-card border border-border">
                    <CardContent className="p-3">
                      <div className="text-center">
                        <p className="text-foreground font-bold">{delegate.votingPower.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">Voting power</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="flex-1 bg-card border border-border">
                    <CardContent className="p-3">
                      <div className="text-center">
                        <p className="text-foreground font-bold">{delegate.totalDelegators}</p>
                        <p className="text-xs text-muted-foreground">Total delegators</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="flex-1 bg-card border border-border">
                    <CardContent className="p-3">
                      <div className="text-center">
                        <p className="text-foreground font-bold">{delegate.participation}</p>
                        <p className="text-xs text-muted-foreground">Participation</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-7">
                  {userSession ? (
                    getUserDelegation(delegate.id) ? (
                      <>
                        <Button
                          variant="secondary"
                          className="flex-1 bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-[1000px] py-3"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRevoke(delegate);
                          }}
                        >
                          Revoke
                        </Button>
                        <Button
                          variant="ghost"
                          className="flex-1 bg-input-background text-muted-foreground rounded-[1000px] py-3"
                          onClick={() => handleDelegateClick(delegate)}
                        >
                          Overview
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          className="flex-1 bg-primary text-primary-foreground rounded-[1000px] py-3"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelegateVote(delegate);
                          }}
                        >
                          Delegate
                        </Button>
                        <Button
                          variant="ghost"
                          className="flex-1 bg-input-background text-muted-foreground rounded-[1000px] py-3"
                          onClick={() => handleDelegateClick(delegate)}
                        >
                          Overview
                        </Button>
                      </>
                    )
                  ) : (
                    <>
                      <ConnectWalletButton className="flex-1 rounded-[1000px] py-3">
                        Connect to Delegate
                      </ConnectWalletButton>
                      <Button
                        variant="ghost"
                        className="flex-1 bg-input-background text-muted-foreground rounded-[1000px] py-3"
                        onClick={() => handleDelegateClick(delegate)}
                      >
                        Overview
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modals */}
      <DelegateDetailModal
        isOpen={showDelegateModal}
        onClose={() => setShowDelegateModal(false)}
        delegate={selectedDelegate}
        onDelegate={() => {
          setShowDelegateModal(false);
          setShowVotingModal(true);
        }}
        onNavigate={onNavigate}
        onSelectProposal={onSelectProposal}
      />

      <DelegateVotingModal
        isOpen={showVotingModal}
        onClose={() => setShowVotingModal(false)}
        delegate={selectedDelegate}
      />

      <BecomeADelegateModal
        isOpen={showBecomeADelegateModal}
        onClose={() => setShowBecomeADelegateModal(false)}
      />

      {/* Revoke Confirmation Modal */}
      <Dialog open={revokeModalOpen} onOpenChange={closeRevokeModal}>
        <DialogContent className="bg-card border-border">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-destructive/20 rounded-full flex items-center justify-center bg-[rgba(255,255,255,0.2)]">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <DialogTitle className="text-foreground">Revoke delegation?</DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  This action cannot be undone
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          {selectedDelegationToRevoke && (
            <div className="space-y-4">
              <div className="bg-secondary/50 rounded-xl p-4 border border-border">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Delegate</span>
                    <span className="text-sm font-medium text-foreground">{selectedDelegationToRevoke.delegate.name}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Amount</span>
                    <span className="text-sm font-medium text-foreground">{selectedDelegationToRevoke.delegation.amount}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Conviction</span>
                    <span className="text-sm font-medium text-foreground">x{selectedDelegationToRevoke.delegation.conviction}</span>
                  </div>
                </div>
              </div>

              <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-4">
                <p className="text-sm text-destructive-foreground">
                  Revoking this delegation will remove your voting power from this delegate and may affect ongoing proposals. This action will immediately update your delegation stats.
                </p>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={closeRevokeModal}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  onClick={confirmRevoke}
                  className="flex-1 bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  Confirm revocation
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
