import { useState, useEffect } from 'react';
// import { NavigationItem } from '@/app/page';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
// import { Clock, Plus, Vote, ArrowUp, ArrowDown, Users, Crown, Award, AlertCircle, ChevronDown } from 'lucide-react';
import { Plus, Vote, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { useAuth } from "@futureverse/auth-react";
import { useSigner } from "@/hooks/useSigner";
import { useCustomExtrinsicBuilder } from "@/hooks/useCustomExtrinsicBuilder";
import { useTrnApi } from "@futureverse/transact-react";
import { useCouncilMembers } from "@/hooks/useCouncilMembers";
import { nominate } from "@/lib/utils";

// interface ElectionsProps {
//   onNavigate: (page: NavigationItem) => void;
// }

interface ElectionConfig {
  candidacyBond: number;
  votingBondBase: number;
  votingBondFactor: number;
  maxVotesPerVoter: number;
  desiredMembers: number;
  desiredRunnersUp: number;
  termDurationDays: number;
  termRemainingMs: number;
}

const mockElectionConfig: ElectionConfig = {
  candidacyBond: 10,
  votingBondBase: 0.1,
  votingBondFactor: 0.05,
  maxVotesPerVoter: 16,
  desiredMembers: 13,
  desiredRunnersUp: 7,
  termDurationDays: 28,
  termRemainingMs: Math.floor(Math.random() * 28) * 24 * 60 * 60 * 1000, // Random days remaining in 28-day term
};

// export function Elections({ onNavigate }: ElectionsProps) {
export function Elections() {
  const { userSession } = useAuth();
  const eoa = userSession?.eoa;
  const signer = useSigner();
  const { trnApi } = useTrnApi();
  const builder = useCustomExtrinsicBuilder({
    signer,
    walletAddress: userSession?.eoa ?? "",
    trnApi,
  });
  const userProfile = (userSession?.user?.profile?.profile as any)?.selectedProfile || {};
  const [userVotes, setUserVotes] = useState<string[]>([]);
  const [isNominateModalOpen, setIsNominateModalOpen] = useState(false);
  const [isVoteModalOpen, setIsVoteModalOpen] = useState(false);
  const [selectedCandidates, setSelectedCandidates] = useState<string[]>([]);
  const [termCountdown, setTermCountdown] = useState<string>('');
  const [sortBy, setSortBy] = useState<'support-weight' | 'alphabet'>('support-weight');
  const { data: councilMembers } = useCouncilMembers();
  const candidates = councilMembers?.filter((cm: any) => cm.verified === false) || [];

  // Nomination form state
  const [nominationForm, setNominationForm] = useState({
    name: '',
    address: 'FPass',
    description: '',
    discordLink: '',
    twitterLink: ''
  });

  const accountType = {
    'FPass': { label: 'FPass', description: 'Use futurepass address' },
    'EOA': { label: 'EOA', description: 'Use eoa address' },
  };

  // Countdown timer effect
  useEffect(() => {
    const updateTimer = () => {
      const remaining = mockElectionConfig.termRemainingMs;

      if (remaining <= 0) {
        setTermCountdown('Election Period Ended');
        return;
      }

      const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));

      if (days > 0) {
        setTermCountdown(`${days}d ${hours}h ${minutes}m`);
      } else if (hours > 0) {
        setTermCountdown(`${hours}h ${minutes}m`);
      } else {
        setTermCountdown(`${minutes}m`);
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const handleNominate = async () => {
    if (!nominationForm.name || !nominationForm.description || !nominationForm.address) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (!signer || !userSession || !trnApi || !builder) return;
    const candidateCount = 0;
    const extrinsic = trnApi.tx.elections.submitCandidacy(candidateCount);

    const tx = nominationForm.address === 'FPass' ? await builder
        .fromExtrinsic(extrinsic)
        .addFuturePass(userSession.futurepass) : await builder.fromExtrinsic(extrinsic);

    const status = await nominate(tx, toast, nominationForm);

    if (status) {
      toast.success(`Successfully nominated! CandidacyBond of ${mockElectionConfig.candidacyBond} ROOT has been locked.`);
    } else {
      toast.success('Nomination unsuccessful', {
        description: `Your candidate nomination did not complete`,
        duration: 5000,
      });
    }

    setIsNominateModalOpen(false);
    setNominationForm({ name: '', address: '', description: '', discordLink: '', twitterLink: '' });
  };

  const handleVote = () => {
    if (selectedCandidates.length === 0) {
      toast.error('Please select at least one candidate');
      return;
    }

    if (selectedCandidates.length > mockElectionConfig.maxVotesPerVoter) {
      toast.error(`You can only vote for up to ${mockElectionConfig.maxVotesPerVoter} candidates`);
      return;
    }

    const votingDeposit = mockElectionConfig.votingBondBase +
      (selectedCandidates.length * mockElectionConfig.votingBondFactor);

    // Update vote counts and user vote status
    // setCandidates(prev => prev.map(candidate => {
    //   if (selectedCandidates.includes(candidate.id)) {
    //     return { ...candidate, hasUserVoted: true, votes: candidate.votes + 1 };
    //   }
    //   return candidate;
    // }));

    setUserVotes(selectedCandidates);
    toast.success(`Successfully voted for ${selectedCandidates.length} candidates! Voting deposit: ${votingDeposit.toFixed(2)} ROOT`);
    setIsVoteModalOpen(false);
    setSelectedCandidates([]);
  };

  const handleCandidateToggle = (candidateId: string) => {
    setSelectedCandidates(prev => {
      if (prev.includes(candidateId)) {
        return prev.filter(id => id !== candidateId);
      } else if (prev.length < mockElectionConfig.maxVotesPerVoter) {
        return [...prev, candidateId];
      } else {
        toast.error(`You can only vote for up to ${mockElectionConfig.maxVotesPerVoter} candidates`);
        return prev;
      }
    });
  };

  // Sort candidates based on selected sort option
  const sortedCandidates = [...candidates].sort((a, b) => {
    if (sortBy === 'support-weight') {
      return parseInt(b.votes) - parseInt(a.votes); // Sort by votes (descending)
    } else {
      return a.name.localeCompare(b.name); // Sort alphabetically (ascending)
    }
  });

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-6">
        <h1 className="text-foreground">Council Elections</h1>

        {/* Election Status Cards */}
        <div className="bg-card rounded-2xl p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Term Countdown */}
            <div className="bg-card border border-border rounded-xl p-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Term remaining</p>
                <p className="text-xl md:text-2xl font-semibold text-foreground">{termCountdown}</p>
              </div>
            </div>

            {/* Desired Members */}
            <div className="bg-card border border-border rounded-xl p-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Desired members</p>
                <p className="text-xl md:text-2xl font-semibold text-foreground">{mockElectionConfig.desiredMembers}</p>
              </div>
            </div>

            {/* Desired Runners-Up */}
            <div className="bg-card border border-border rounded-xl p-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Desired runners-up</p>
                <p className="text-xl md:text-2xl font-semibold text-foreground">{mockElectionConfig.desiredRunnersUp}</p>
              </div>
            </div>

            {/* Total Candidates */}
            <div className="bg-card border border-border rounded-xl p-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Total candidates</p>
                <p className="text-xl md:text-2xl font-semibold text-foreground">{candidates.length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          onClick={() => {
            // Auto-fill form when opening modal
            if (userProfile) {
              setNominationForm(prev => ({
                ...prev,
                name: userProfile.displayName || '',
                discordLink: userProfile.discordHandle || '',
                twitterLink: userProfile.twitterHandle || '',
                address: eoa || ''
              }));
            }
            setIsNominateModalOpen(true);
          }}
          className="flex items-center gap-2"
          disabled={!userSession}
          title=""
        >
          <Plus size={16} />
          Nominate Candidate
        </Button>

        <Button
          onClick={() => setIsVoteModalOpen(true)}
          variant="outline"
          className="flex items-center gap-2"
          disabled={!userSession || userVotes.length > 0}
          title=""
        >
          <Vote size={16} />
          {userVotes.length > 0 ? `Voted for ${userVotes.length} candidates` : 'Vote for Candidates'}
        </Button>

        {!userSession && (
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <AlertCircle size={16} />
            Connect your wallet to participate in elections
          </div>
        )}
      </div>

      {/* Candidates List */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h2 className="text-xl font-bold">Candidates</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <Select value={sortBy} onValueChange={(value: 'support-weight' | 'alphabet') => setSortBy(value)}>
              <SelectTrigger className="w-auto min-w-[160px] bg-muted border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                <SelectItem value="support-weight">Support Weight</SelectItem>
                <SelectItem value="alphabet">Alphabet</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {sortedCandidates.map((candidate, index) => (
            <Card key={candidate.id} className="bg-card border border-border hover:border-white/80 cursor-pointer transition-all duration-200">
              <CardContent className="p-5">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-foreground font-bold text-lg">{candidate.name}</h3>
                          {candidate.isCurrentMember && (
                            <Badge className="bg-chart-1/20 text-chart-1 text-xs px-1 py-0">
                              Current
                            </Badge>
                          )}
                          {userVotes.includes(candidate.id) && (
                            <Badge className="bg-green-500/20 text-green-400 text-xs px-1 py-0">
                              ✓ Voted
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">{candidate.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-primary/20 text-primary text-xs px-1 py-0">
                        #{index + 1}
                      </Badge>
                      {/* Placeholder for social media icons - these would come from candidate data */}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-muted-foreground opacity-50">
                        <path
                          d="M20.317 4.37A19.791 19.791 0 0 0 15.822 3a.074.074 0 0 0-.079.037c-.194.35-.408.808-.558 1.171A18.27 18.27 0 0 0 9.674 4a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 5.1 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"
                          fill="currentColor"
                        />
                      </svg>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-muted-foreground opacity-50">
                        <path
                          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground text-sm">
                    {candidate.description}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-3">
                    <Card className="flex-1 bg-card border border-border">
                      <CardContent className="p-3">
                        <div className="text-center">
                          <p className="text-foreground font-bold">{candidate.supportWeight}</p>
                          <p className="text-xs text-muted-foreground">Support Weight</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="flex-1 bg-card border border-border">
                      <CardContent className="p-3">
                        <div className="text-center">
                          <p className="text-foreground font-bold">{candidate.votes}</p>
                          <p className="text-xs text-muted-foreground">Votes</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Nominate Candidate Modal */}
      <Dialog open={isNominateModalOpen} onOpenChange={setIsNominateModalOpen}>
        <DialogContent className="bg-card border-border">
          <DialogHeader>
            <DialogTitle>Nominate Candidate</DialogTitle>
            <DialogDescription>
              Submit your candidacy for the council election. A bond of {mockElectionConfig.candidacyBond} ROOT will be locked.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {/* User Address Display */}
            {userProfile && (
              <div className="bg-muted/20 border border-border rounded-lg p-4">
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">Your Address</Label>
                  <Select
                      value={nominationForm.address}
                      onValueChange={(value) => {
                        setNominationForm({ ...nominationForm, address: value});
                      }}
                  >
                    <SelectTrigger className="bg-input-background border-border text-foreground">
                      <SelectValue placeholder="Choose proposal type">
                        {/*{proposalData.type ? proposalTypes[proposalData.type]?.label : null}*/}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(accountType).map(([key, type]) => (
                          <SelectItem key={key} value={key}>
                            <div>
                              <div className="font-medium">{type.label}</div>
                              <div className="text-xs text-muted-foreground">{type.description}</div>
                            </div>
                          </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {/*<Input*/}
                  {/*    id="address"*/}
                  {/*    value={nominationForm.address}*/}
                  {/*    onChange={(e) => setNominationForm({ ...nominationForm, address: e.target.value })}*/}
                  {/*    placeholder="Enter your name or organization"*/}
                  {/*    className="bg-input-background border-border"*/}
                  {/*/>*/}
                  {/*<p className="text-sm font-mono break-all">{userProfile.address}</p>*/}
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="name">Candidate Name *</Label>
              <Input
                id="name"
                value={nominationForm.name}
                onChange={(e) => setNominationForm({ ...nominationForm, name: e.target.value })}
                placeholder="Enter your name or organization"
                className="bg-input-background border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description & Platform *</Label>
              <Textarea
                id="description"
                value={nominationForm.description}
                onChange={(e) => setNominationForm({ ...nominationForm, description: e.target.value })}
                placeholder="Describe your experience, qualifications, and platform..."
                className="bg-input-background border-border min-h-[120px]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="discord">Discord Handle</Label>
                <Input
                  id="discord"
                  value={nominationForm.discordLink}
                  onChange={(e) => setNominationForm({ ...nominationForm, discordLink: e.target.value })}
                  placeholder="username#1234"
                  className="bg-input-background border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="twitter">Twitter Handle</Label>
                <Input
                  id="twitter"
                  value={nominationForm.twitterLink}
                  onChange={(e) => setNominationForm({ ...nominationForm, twitterLink: e.target.value })}
                  placeholder="@username"
                  className="bg-input-background border-border"
                />
              </div>
            </div>

            <div className="bg-muted/20 border border-border rounded-lg p-4">
              <div className="flex items-start gap-2">
                <AlertCircle size={16} className="text-chart-3 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-sm font-bold">Candidacy Bond Required</p>
                  <p className="text-xs text-muted-foreground">
                    {mockElectionConfig.candidacyBond} ROOT will be locked as your candidacy bond.
                    This will be returned if you receive enough votes or at the end of the election period.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsNominateModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleNominate} className="flex items-center gap-2">
              <Plus size={16} />
              Submit Candidacy ({mockElectionConfig.candidacyBond} ROOT)
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Vote Modal */}
      <Dialog open={isVoteModalOpen} onOpenChange={setIsVoteModalOpen}>
        <DialogContent className="bg-card border-border max-w-2xl">
          <DialogHeader>
            <DialogTitle>Vote for Candidates</DialogTitle>
            <DialogDescription>
              Select up to {mockElectionConfig.maxVotesPerVoter} candidates to vote for.
              Voting deposit: {mockElectionConfig.votingBondBase} ROOT + {mockElectionConfig.votingBondFactor} ROOT per candidate.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4 max-h-96 overflow-y-auto">
            {candidates.map((candidate: any) => (
              <div
                key={candidate.id}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  selectedCandidates.includes(candidate.id)
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:border-border-hover'
                }`}
                onClick={() => handleCandidateToggle(candidate.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-sm">{candidate.name}</h4>
                      {candidate.isCurrentMember && (
                        <Badge className="bg-chart-1/20 text-chart-1 text-xs px-1 py-0">
                          Current
                        </Badge>
                      )}
                      {selectedCandidates.includes(candidate.id) && (
                        <Badge className="bg-primary/20 text-primary text-xs px-1 py-0">
                          ✓ Selected
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{candidate.supportWeight}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-muted/20 border border-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm">Selected candidates:</span>
              <Badge className="bg-primary/20 text-primary text-xs">
                {selectedCandidates.length} / {mockElectionConfig.maxVotesPerVoter}
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Voting deposit:</span>
              <span className="text-sm font-bold">
                {(mockElectionConfig.votingBondBase + (selectedCandidates.length * mockElectionConfig.votingBondFactor)).toFixed(2)} ROOT
              </span>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsVoteModalOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleVote}
              disabled={selectedCandidates.length === 0}
              className="flex items-center gap-2"
            >
              <Vote size={16} />
              Vote for {selectedCandidates.length} Candidates
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
