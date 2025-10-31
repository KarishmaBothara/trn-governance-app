import { useState, useEffect } from 'react';
import * as React from 'react';
import { NavigationItem } from '@/app/page';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Slider } from '../ui/slider';
import { Input } from '../ui/input';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';
import { VotingHistoryModal } from '../VotingHistoryModal';
import { ConnectWalletButton } from '../ConnectWalletButton';
import { ArrowLeft, ExternalLink, ArrowUp, ArrowDown, AlertTriangle, X } from 'lucide-react';
import { toast } from 'sonner';
import { useUser } from '../UserContext';
import { mockCancellationMotions } from '../council/mockData';
import { CancellationMotion } from '../council/types';
import { Proposal } from "@/components/ProposalCard";
// import {useProposalInfoFromId} from "@/hooks/useProposalInfoFromId";
// import {useProposalInfo} from "@/hooks/useProposal";

interface ProposalDetailProps {
  proposal: Proposal  | null;
  onNavigate: (page: NavigationItem) => void;
}

export function ProposalDetail({ proposal, onNavigate }: ProposalDetailProps) {
  const { isLoggedIn, isCouncilMember } = useUser();
  // const { data: proposal } = useProposalInfoFromId(proposalId);
  const [voteDirection, setVoteDirection] = useState<'aye' | 'nay' | null>('aye');
  // const [stakeAmount, setStakeAmount] = useState([200]);
  const [rootAmount, setRootAmount] = useState('200');
  const [conviction, setConviction] = useState([2]);
  const [showVotingHistory, setShowVotingHistory] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  // const [cancellationMotion, setCancellationMotion] = useState<CancellationMotion | null>(null);
  // const [timeRemaining, setTimeRemaining] = useState<string>('');
  const [, setTimeRemaining] = useState<string>('');
  // Check if there's an active cancellation motion for this proposal
  // useEffect(() => {
  //   const motion = mockCancellationMotions.find(
  //     m => m.referendumId === proposalId && (m.status === 'active' || m.status === 'passed')
  //   );
  //   setCancellationMotion(motion || null);
  // }, [proposalId]);

  // Mock proposal data - status depends on cancellation motion result
  // const proposal = {
  //   id: proposalId,
  //   title: 'Treasury Proposal: Marketing Campaign Q4',
  //   status: cancellationMotion?.status === 'passed' ? 'Cancelled' : 'Active',
  //   track: 'Treasury',
  //   proposer: 'FV Seona',
  //   daysLeft: Math.floor(Math.random() * 28) + 1, // Random days left in 28-day period
  //   ayePercentage: 73,
  //   nayPercentage: 27,
  //   ayeVotes: 3200000,
  //   nayVotes: 1180000,
  //   enactmentDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString(), // 30-day enactment delay
  //   bondedAmount: '100 ROOT'
  // };

  // Mock existing vote data - null if proposal is cancelled
  const [existingVote, setExistingVote] = useState<{
    direction: 'aye' | 'nay';
    amount: string;
    conviction: number;
    votingPower: number;
  } | null>(  {
    direction: 'aye',
    amount: '150',
    conviction: 1,
    votingPower: 300
  });

  // Countdown timer for cancellation motion
  // useEffect(() => {
  //   if (!cancellationMotion || cancellationMotion.status !== 'active' || cancellationMotion.remainingTimeMs <= 0) {
  //     setTimeRemaining('');
  //     return;
  //   }
  //
  //   const updateTimer = () => {
  //     const remaining = cancellationMotion.remainingTimeMs;
  //
  //     if (remaining <= 0) {
  //       setTimeRemaining('Expired');
  //       return;
  //     }
  //
  //     const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //
  //     if (days > 0) {
  //       setTimeRemaining(`${days}d ${hours}h`);
  //     } else if (hours > 0) {
  //       setTimeRemaining(`${hours}h`);
  //     } else {
  //       const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
  //       if (minutes > 0) {
  //         setTimeRemaining(`${minutes}m`);
  //       } else {
  //         setTimeRemaining('< 1m');
  //       }
  //     }
  //   };
  //
  //   updateTimer();
  //   const interval = setInterval(updateTimer, 60000);
  //
  //   return () => clearInterval(interval);
  // }, [cancellationMotion]);

  // Initialize form with existing vote data when component loads
  React.useEffect(() => {
    if (existingVote) {
      setVoteDirection(existingVote.direction);
      setRootAmount(existingVote.amount);
      setConviction([existingVote.conviction]);
    }
  }, [existingVote]);

  const handleVoteSubmit = () => {
    // Don't allow voting on cancelled proposals
    if (proposal?.status === 'Cancelled') {
      toast.error('Cannot vote on a cancelled proposal');
      return;
    }

    const voteType = voteDirection === 'aye' ? 'Aye' : 'Nay';
    const convictionMultiplier = Math.pow(2, conviction[0]);
    const isUpdate = existingVote !== null;

    if (existingVote) {
      setExistingVote({
        direction: voteDirection!,
        amount: rootAmount,
        conviction: conviction[0],
        votingPower: votingPower
      });
    }

    toast.success(
      <div className="space-y-2">
        <div className="font-medium">
          {isUpdate ? 'Vote updated successfully!' : 'Vote submitted successfully!'}
        </div>
        <div className="text-sm text-muted-foreground">
          {rootAmount} ROOT × {convictionMultiplier} conviction ({voteType})
        </div>
        <button
          onClick={() => onNavigate('portfolio')}
          className="text-primary text-sm underline hover:no-underline"
        >
          View in Portfolio →
        </button>
      </div>,
      {
        duration: 6000,
      }
    );
  };

  const handleCancelVote = () => {
    if (!existingVote) return;

    const previousVoteDetails = `${existingVote.amount} ROOT × ${Math.pow(2, existingVote.conviction)} conviction (${existingVote.direction === 'aye' ? 'Aye' : 'Nay'})`;

    setExistingVote(null);

    toast.success(
      <div className="space-y-2">
        <div className="font-medium">
          Vote removed successfully!
        </div>
        <div className="text-sm text-muted-foreground">
          Removed: {previousVoteDetails}
        </div>
        <button
          onClick={() => onNavigate('portfolio')}
          className="text-primary text-sm underline hover:no-underline"
        >
          View in Portfolio →
        </button>
      </div>,
      {
        duration: 6000,
      }
    );
  };

  // const handleCancelProposal = () => {
  //   // Simulate proposing cancellation motion
  //   const newMotion: CancellationMotion = {
  //     id: `cancel-${Date.now()}`,
  //     referendumId: proposalId!,
  //     referendumTitle: proposal?.title,
  //     proposer: { id: 'current-user', name: 'Current User' } as any,
  //     status: 'active',
  //     votesFor: 1, // Proposer's vote
  //     votesAgainst: 0,
  //     totalMembers: 5,
  //     requiredVotes: Math.ceil((5 * 2) / 3), // 2/3 majority
  //     remainingTimeMs: 5 * 24 * 60 * 60 * 1000, // 5 days
  //     submittedDate: new Date().toLocaleDateString()
  //   };
  //
  //   setCancellationMotion(newMotion);
  //   setShowCancelModal(false);
  //
  //   toast.success('Cancellation motion proposed successfully! Council members can now vote.');
  // };

  if (!proposal) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No proposal selected</p>
        <Button onClick={() => onNavigate('proposals')} className="mt-4">
          View All Proposals
        </Button>
      </div>
    );
  }

  // const convictionMultipliers = ['x2 (2 days)', 'x4 (4 days)', 'x8 (8 days)', 'x16 (16 days)', 'x32 (32 days)'];
  const votingPower = parseInt(rootAmount || '0') * Math.pow(2, conviction[0]);

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-blue-500/20 text-blue-400';
      case 'Cancelled':
        return 'bg-gray-500/20 text-gray-400';
      default:
        return 'bg-muted/20 text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      {/* Back button */}
      <Button
        variant="ghost"
        onClick={() => onNavigate('proposals')}
        className="bg-secondary text-muted-foreground hover:text-foreground px-4 py-3 rounded-[10px] flex items-center gap-2"
      >
        <ArrowLeft size={20} />
        All Proposals
      </Button>

      {/* Title */}
      <h1 className="text-foreground text-4xl font-bold">
        {proposal?.title}
      </h1>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="xl:col-span-2 space-y-6">

          {/* Cancellation Result Banner for Cancelled Proposals */}
          {proposal?.status === 'Cancelled' && (
            <div className="bg-gray-500/10 border-2 border-gray-500/20 rounded-2xl p-4">
              <div className="flex items-start gap-3">
                <X size={20} className="text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="space-y-2">
                  <h3 className="text-gray-400 font-bold">Proposal Cancelled</h3>
                  <p className="text-foreground text-sm">
                    This proposal has been cancelled by council vote. Voting is now closed and the proposal will not proceed to referendum.
                  </p>
                  {/*{cancellationMotion && (*/}
                  {/*  <div className="text-xs text-muted-foreground">*/}
                  {/*    Cancelled with {cancellationMotion.votesFor} out of {cancellationMotion.requiredVotes} required council votes*/}
                  {/*  </div>*/}
                  {/*)}*/}
                </div>
              </div>
            </div>
          )}

          {/* Proposal Info Card */}
          <div className="bg-card rounded-2xl p-5">
            <div className="space-y-6">
              {/* Header with meta info */}
              <div className="flex items-start justify-between border-b border-border pb-6">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-foreground font-bold">{proposal?.proposer}</span>
                  <span className="text-xs text-muted-foreground">
                    Preimage - {proposal.preimage}  #{proposal?.id}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Badge className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${getStatusBadgeClass(proposal?.status)}`}>
                    {proposal?.status}
                  </Badge>
                  {/*<Badge className="bg-chart-3/20 text-chart-3 text-[10px] font-bold uppercase px-1.5 py-0.5 rounded">*/}
                  {/*  {proposal?.track}*/}
                  {/*</Badge>*/}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold mb-4">TL;DR</h2>
                  <p className="text-base text-foreground">
                    {proposal?.description}
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4">Summary</h2>
                  <div className="space-y-4 text-base text-foreground">
                    <p>
                      {proposal?.summary}
                    </p>
                  </div>
                </div>

                {/*<div>*/}
                {/*  <h2 className="text-xl font-bold mb-4">Implementation Details</h2>*/}
                {/*  <div className="space-y-4 text-base text-foreground">*/}
                {/*    <p>*/}
                {/*      The campaign will be executed in three phases, each with specific deliverables and success metrics.*/}
                {/*    </p>*/}
                {/*    <p>*/}
                {/*      Phase 1 focuses on brand awareness, Phase 2 on community building, and Phase 3 on conversion optimization.*/}
                {/*    </p>*/}
                {/*  </div>*/}
                {/*</div>*/}

                <div className="bg-secondary rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <ExternalLink size={16} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">External Links</span>
                  </div>
                  <div className="space-y-1">
                    <a href={proposal?.link} className="text-sm text-primary hover:underline block">
                      View full proposal document
                    </a>
                    {/*<a href="#" className="text-sm text-primary hover:underline block">*/}
                    {/*  Budget breakdown spreadsheet*/}
                    {/*</a>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Votes Card */}
          {/*<div className="bg-card rounded-2xl p-5">*/}
          {/*  <div className="space-y-6">*/}
          {/*    <div className="flex items-center justify-between">*/}
          {/*      <h2 className="text-xl font-bold">Votes</h2>*/}
          {/*      <Badge className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${getStatusBadgeClass(proposal?.status)}`}>*/}
          {/*        {proposal?.status}*/}
          {/*      </Badge>*/}
          {/*    </div>*/}

              {/* Vote progress - Only show if not cancelled */}
              {/*{proposal?.status !== 'Cancelled' && (*/}
              {/*  <div className="space-y-3">*/}
              {/*    <div className="flex w-full h-1.5 rounded-full overflow-hidden">*/}
              {/*      <div className="bg-green-400" style={{ width: `${proposal?.ayePercentage}%` }} />*/}
              {/*      <div className="bg-red-400" style={{ width: `${proposal?.nayPercentage}%` }} />*/}
              {/*    </div>*/}
              {/*    <div className="flex justify-between">*/}
              {/*      <div className="flex items-center gap-1">*/}
              {/*        <ArrowUp size={16} className="text-green-400" />*/}
              {/*        <span className="text-xs text-muted-foreground font-bold">{proposal?.ayePercentage}% Aye</span>*/}
              {/*      </div>*/}
              {/*      <div className="flex items-center gap-1">*/}
              {/*        <ArrowDown size={16} className="text-red-400" />*/}
              {/*        <span className="text-xs text-muted-foreground font-bold">{proposal?.nayPercentage}% Nay</span>*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*)}*/}

              {/* Cancelled proposal message */}
              {/*{proposal?.status === 'Cancelled' && (*/}
              {/*  <div className="bg-gray-500/10 rounded-lg p-3 border border-gray-500/20">*/}
              {/*    <p className="text-sm text-gray-400 text-center">*/}
              {/*      Voting was closed when this proposal was cancelled by council vote.*/}
              {/*    </p>*/}
              {/*  </div>*/}
              {/*)}*/}

              {/*<Button*/}
              {/*  variant="outline"*/}
              {/*  onClick={() => setShowVotingHistory(true)}*/}
              {/*  className="bg-secondary text-secondary-foreground border-2 border-border rounded-full w-full py-3 hover:bg-secondary/80"*/}
              {/*>*/}
              {/*  Check votes*/}
              {/*</Button>*/}
            {/*</div>*/}
          {/*</div>*/}

          {/* Cancel Proposal Button - Council Members Only, Active Proposals Only */}
          {isCouncilMember && proposal?.status === 'Active' && !cancellationMotion && (
            <div className="bg-card rounded-2xl p-5">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <AlertTriangle size={16} className="text-red-400" />
                  <h2 className="text-xl font-bold">Council Actions</h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  As a council member, you can propose to cancel this proposal.
                </p>
                <Button
                  onClick={() => setShowCancelModal(true)}
                  variant="outline"
                  className="w-full bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20"
                >
                  <AlertTriangle size={16} className="mr-2" />
                  Cancel Proposal
                </Button>
              </div>
            </div>
          )}

          {/* Cast Vote Card - Only show if proposal is active (not cancelled) */}
          {proposal?.status === 'Active' && (
            <div id="voting-section" className="bg-card rounded-2xl p-5">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">
                    {existingVote ? 'Update your vote' : 'Cast your vote'}
                  </h2>
                  {existingVote && (
                    <Badge className="bg-chart-1/20 text-chart-1 text-[10px] font-bold uppercase px-1.5 py-0.5 rounded">
                      Already Voted
                    </Badge>
                  )}
                </div>

                {/* Warning for pending cancellation */}
                {/*{cancellationMotion?.status === 'active' && (*/}
                {/*  <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3">*/}
                {/*    <div className="flex items-start gap-2">*/}
                {/*      <AlertTriangle size={14} className="text-amber-400 mt-0.5 flex-shrink-0" />*/}
                {/*      <p className="text-xs text-amber-400">*/}
                {/*        This proposal may be cancelled by council vote. Your vote will remain valid unless cancelled.*/}
                {/*      </p>*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*)}*/}

                {/* Current Vote Display */}
                {existingVote && (
                  <div className="bg-secondary/50 rounded-xl p-4 border border-border">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Current Vote</p>
                        <div className="flex items-center gap-2">
                          {existingVote.direction === 'aye' ? (
                            <ArrowUp size={16} className="text-green-400" />
                          ) : (
                            <ArrowDown size={16} className="text-red-400" />
                          )}
                          <span className="text-sm font-bold">
                            {existingVote.direction === 'aye' ? 'Aye' : 'Nay'}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">Voting Power</p>
                        <p className="text-sm font-bold">{existingVote.votingPower.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Vote direction - Only for logged in users */}
                {isLoggedIn && (
                  <div className="flex gap-7">
                    <Button
                      onClick={() => setVoteDirection('aye')}
                      variant={voteDirection === 'aye' ? 'default' : 'outline'}
                      className={`flex-1 rounded-full py-3 ${
                        voteDirection === 'aye' 
                          ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                          : 'bg-secondary text-secondary-foreground border-2 border-border hover:bg-secondary/80'
                      }`}
                    >
                      Aye
                    </Button>
                    <Button
                      onClick={() => setVoteDirection('nay')}
                      variant={voteDirection === 'nay' ? 'default' : 'outline'}
                      className={`flex-1 rounded-full py-3 ${
                        voteDirection === 'nay' 
                          ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                          : 'bg-secondary text-secondary-foreground border-2 border-border hover:bg-secondary/80'
                      }`}
                    >
                      Nay
                    </Button>
                  </div>
                )}

                {/* Token amount - Only for logged in users */}
                {isLoggedIn && (
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Root Amount</span>
                      </div>
                      <Input
                        type="number"
                        value={rootAmount}
                        onChange={(e) => setRootAmount(e.target.value)}
                        placeholder="Enter ROOT amount"
                        className="bg-input-background border-border text-foreground"
                      />
                    </div>
                  </div>
                )}

                {/* Conviction slider - Only for logged in users */}
                {isLoggedIn && (
                  <div className="space-y-3">
                    <label className="text-xs text-muted-foreground">
                      Set Conviction
                    </label>
                    <div className="space-y-3">
                      <Slider
                        value={conviction}
                        onValueChange={setConviction}
                        max={4}
                        min={0}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>x2 (2 days)</span>
                        <span>x32 (32 days)</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Submit button - Different for logged in vs logged out users */}
                {isLoggedIn ? (
                  <Button
                    onClick={handleVoteSubmit}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-full py-3"
                  >
                    {existingVote ? 'Update' : 'Submit'} {votingPower} Votes
                  </Button>
                ) : (
                  <ConnectWalletButton className="w-full rounded-full py-3" />
                )}

                {/* Remove Vote Button (only show if user has existing vote and is logged in) */}
                {isLoggedIn && existingVote && (
                  <Button
                    onClick={handleCancelVote}
                    variant="outline"
                    className="bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20 w-full rounded-full py-3"
                  >
                    <X size={16} className="mr-2" />
                    Remove Vote
                  </Button>
                )}
              </div>
            </div>
          )}

          {/* Cancelled Proposal Notice - Show instead of voting section */}
          {proposal?.status === 'Cancelled' && (
            <div className="bg-card rounded-2xl p-5">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <X size={16} className="text-gray-400" />
                  <h2 className="text-xl font-bold text-gray-400">Voting Closed</h2>
                </div>
                <div className="bg-gray-500/10 rounded-lg p-4 border border-gray-500/20">
                  <p className="text-sm text-gray-400 text-center">
                    This proposal has been cancelled by council vote. Voting is no longer available.
                  </p>
                </div>
                {existingVote && (
                  <div className="bg-secondary/30 rounded-xl p-4 border border-border">
                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground">Your Previous Vote (Now Invalid)</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {existingVote.direction === 'aye' ? (
                            <ArrowUp size={16} className="text-green-400/50" />
                          ) : (
                            <ArrowDown size={16} className="text-red-400/50" />
                          )}
                          <span className="text-sm font-bold text-muted-foreground">
                            {existingVote.direction === 'aye' ? 'Aye' : 'Nay'}
                          </span>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground">Was: {existingVote.votingPower.toLocaleString()} voting power</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Cancellation Confirmation Modal */}
      <Dialog open={showCancelModal} onOpenChange={setShowCancelModal}>
        <DialogContent className="bg-card border-border">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle size={20} className="text-red-400" />
              Cancel Proposal
            </DialogTitle>
            <DialogDescription>
              This action will propose cancellation of this proposal. It requires a 2/3 majority of council members to pass.
              If approved, this proposal will be cancelled and will not proceed to referendum.
            </DialogDescription>
          </DialogHeader>

          <div className="bg-muted/20 border border-border rounded-lg p-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Council Members:</span>
                <span className="text-sm">5 total</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Required Votes:</span>
                <span className="text-sm font-bold">4 (2/3 majority)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Motion Duration:</span>
                <span className="text-sm">5 days</span>
              </div>
            </div>
          </div>

          {/*<DialogFooter>*/}
          {/*  <Button variant="outline" onClick={() => setShowCancelModal(false)}>*/}
          {/*    Cancel*/}
          {/*  </Button>*/}
          {/*  <Button*/}
          {/*    onClick={handleCancelProposal}*/}
          {/*    className="bg-red-500 text-white hover:bg-red-600"*/}
          {/*  >*/}
          {/*    <AlertTriangle size={16} className="mr-2" />*/}
          {/*    Confirm Cancel Motion*/}
          {/*  </Button>*/}
          {/*</DialogFooter>*/}
        </DialogContent>
      </Dialog>

      {/* Voting History Modal */}
      <VotingHistoryModal
        isOpen={showVotingHistory}
        onClose={() => setShowVotingHistory(false)}
      />
    </div>
  );
}
