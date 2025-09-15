import { useState, useEffect } from 'react';
import { NavigationItem } from '@/app/page';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
// import { Card, CardContent } from '../ui/card';
import { ArrowLeft, ArrowUp, ArrowDown, Clock, X } from 'lucide-react';
import { toast } from 'sonner';
import { useUser } from '../UserContext';
import { mockMotions } from '../council/mockData';
import { Motion, VoteType, UserVote } from '../council/types';

interface MotionDetailProps {
  motionId: string | null;
  onNavigate: (page: NavigationItem) => void;
}

export function MotionDetail({ motionId, onNavigate }: MotionDetailProps) {
  const { isCouncilMember, isLoggedIn } = useUser();
  const [userVotes, setUserVotes] = useState<UserVote[]>([]);
  const [timeRemaining, setTimeRemaining] = useState<string>('');

  // Find the motion by ID (in real app this would fetch from API)
  const motion = mockMotions.find(m => m.id === motionId);


  // Mock detailed motion data
  const detailedMotion: Motion | null = motion ? {
    ...motion,
    description: "This motion proposes critical updates to the network parameter configuration to enhance security and performance of the Root Network infrastructure.",
    details: `This comprehensive motion addresses several key areas of network optimization:

1. **Security Enhancements**: Implementation of additional validation layers for cross-chain transactions
2. **Performance Improvements**: Optimization of consensus mechanisms to reduce block finalization time
3. **Resource Management**: Updated fee structure for more efficient network resource allocation

The proposed changes have been thoroughly tested on the testnet environment and have shown significant improvements in transaction throughput while maintaining network security standards.`,
    hash: "0x742d35cc6ba34c432d34c432d34c432d34c432d34c43",
    module: "Council",
    call: "propose",
    submittedDate: "15 July 2025",
    discordLink: "#motion-discussion-1",
    timeline: [
      {
        event: "Motion Proposed",
        date: "15 July 2025",
        completed: true
      },
      {
        event: "Seconding Period",
        date: "In Progress",
        completed: false
      },
      {
        event: "Voting Period",
        date: "Pending",
        completed: false
      },
      {
        event: "Execution",
        date: "Pending",
        completed: false
      }
    ]
  } : null;

  // Countdown timer effect
  useEffect(() => {
    if (!detailedMotion?.remainingTimeMs || detailedMotion.status === 'cancelled' || detailedMotion.remainingTimeMs <= 0) return;

    const updateTimer = () => {
      const remaining = detailedMotion.remainingTimeMs;

      if (remaining <= 0) {
        setTimeRemaining('Expired');
        return;
      }

      const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));

      if (days > 0) {
        setTimeRemaining(`${days}d ${hours}h`);
      } else if (hours > 0) {
        setTimeRemaining(`${hours}h ${minutes}m`);
      } else if (minutes > 0) {
        setTimeRemaining(`${minutes}m`);
      } else {
        setTimeRemaining('< 1m');
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [detailedMotion?.remainingTimeMs, detailedMotion?.status]);

  const handleVote = (voteType: VoteType) => {
    if (!motionId || !isCouncilMember) return;

    const existingVoteIndex = userVotes.findIndex(vote => vote.motionId === motionId);

    if (existingVoteIndex >= 0) {
      const existingVote = userVotes[existingVoteIndex];
      if (existingVote.voteType === voteType) {
        // Remove vote if clicking the same action
        setUserVotes(prev => prev.filter(vote => vote.motionId !== motionId));
        toast.success(`Vote removed for motion ${motionId}`);
      } else {
        // Change vote type
        setUserVotes(prev => prev.map(vote =>
          vote.motionId === motionId
            ? { ...vote, voteType }
            : vote
        ));

        const voteTypeLabel = voteType === 'second' ? 'second' :
                             voteType === 'close' ? 'close' :
                             voteType === 'aye' ? 'support' : 'oppose';
        toast.success(`Vote changed to ${voteTypeLabel} for motion ${motionId}`);
      }
    } else {
      // Add new vote
      setUserVotes(prev => [...prev, { motionId, voteType }]);

      const voteTypeLabel = voteType === 'second' ? 'second' :
                           voteType === 'close' ? 'close' :
                           voteType === 'aye' ? 'support' : 'oppose';
      toast.success(`Successfully voted to ${voteTypeLabel} motion ${motionId}`);
    }
  };

  const handleCancelMotion = () => {
    if (!motionId || !isCouncilMember || !detailedMotion?.canCancel) return;

    toast.success(`Motion ${motionId} has been cancelled`);
    // In a real app, this would update the motion status
  };

  if (!motionId) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No motion selected</p>
        <Button onClick={() => onNavigate('council')} className="mt-4">
          View Council
        </Button>
      </div>
    );
  }

  if (!detailedMotion) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Motion not found</p>
        <Button onClick={() => onNavigate('council')} className="mt-4">
          View Council
        </Button>
      </div>
    );
  }

  const userVote = userVotes.find(vote => vote.motionId === motionId);
  const hasSecondedMotion = userVote?.voteType === 'second';
  const hasVotedToClose = userVote?.voteType === 'close';
  const hasVotedAye = userVote?.voteType === 'aye' || detailedMotion?.userVote === 'aye';
  const hasVotedNay = userVote?.voteType === 'nay' || detailedMotion?.userVote === 'nay';

  return (
    <div className="space-y-6">
      {/* Back button */}
      <Button
        variant="ghost"
        onClick={() => onNavigate('council')}
        className="bg-secondary text-muted-foreground hover:text-foreground px-4 py-3 rounded-[10px] flex items-center gap-2"
      >
        <ArrowLeft size={20} />
        Council
      </Button>

      {/* Title */}
      <h1 className="text-foreground">
        {detailedMotion.title}
      </h1>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="xl:col-span-2 space-y-6">
          {/* Motion Info Card */}
          <div className="bg-card rounded-2xl p-5">
            <div className="space-y-6">
              {/* Header with meta info */}
              <div className="flex items-start justify-between border-b border-border pb-6">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-foreground font-bold">{detailedMotion.proposer.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {timeRemaining || `${detailedMotion.daysLeft} days left`} | {detailedMotion.proposalNumber}
                  </span>
                </div>
                <Badge className="bg-chart-1/20 text-chart-1 text-[10px] font-bold uppercase px-1.5 py-0.5 rounded">
                  {detailedMotion.track}
                </Badge>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold mb-4">Description</h2>
                  <p className="text-base text-foreground">
                    {detailedMotion.description}
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4">Details</h2>
                  <div className="space-y-4 text-base text-foreground">
                    {detailedMotion.details?.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Discord link */}
                {detailedMotion.discordLink && (
                  <div>
                    <a href="#" className="text-primary font-bold text-base">
                      Discord discussion: {detailedMotion.discordLink}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Timeline Card */}
          <div className="bg-card rounded-2xl p-5">
            <div className="space-y-6">
              <div className="border-b border-border pb-6">
                <h2 className="text-xl font-bold">Timeline</h2>
              </div>

              <div className="flex gap-5">
                <div className="flex flex-col items-center">
                  {detailedMotion.timeline?.map((_, index) => (
                    <div
                      key={index}
                      className={`w-1.5 h-24 rounded-full ${
                        detailedMotion.timeline![index].completed ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
                <div className="space-y-14">
                  {detailedMotion.timeline?.map((item, index) => (
                    <div key={index}>
                      <h3 className="text-base text-foreground">{item.event}</h3>
                      <p className="text-xs text-muted-foreground font-bold">{item.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Metadata Card */}
          <div className="bg-card rounded-2xl p-5">
            <div className="space-y-6">
              <div className="border-b border-border pb-6">
                <h2 className="text-xl font-bold">Metadata</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-base text-foreground">Hash</span>
                  <span className="text-xs text-muted-foreground font-bold">
                    {detailedMotion.hash}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-base text-foreground">Module</span>
                  <span className="text-xs text-muted-foreground font-bold">{detailedMotion.module}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-base text-foreground">Call</span>
                  <span className="text-xs text-muted-foreground font-bold">{detailedMotion.call}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-base text-foreground">Submitted</span>
                  <span className="text-xs text-muted-foreground font-bold">{detailedMotion.submittedDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Status Card */}
          <div className="bg-card rounded-2xl p-5">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Status</h2>
                <Badge className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${
                  detailedMotion.status === 'proposed' ? 'bg-yellow-500/20 text-yellow-400' :
                  detailedMotion.status === 'voting' ? 'bg-blue-500/20 text-blue-400' :
                  detailedMotion.status === 'passed' ? 'bg-green-500/20 text-green-400' :
                  detailedMotion.status === 'cancelled' ? 'bg-gray-500/20 text-gray-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {detailedMotion.status}
                </Badge>
              </div>

              {/* Countdown Timer */}
              {detailedMotion.status !== 'cancelled' && detailedMotion.remainingTimeMs && detailedMotion.remainingTimeMs > 0 && (
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Time Remaining</span>
                    <div className="flex items-center gap-1">
                      <Clock size={14} className="text-muted-foreground" />
                      <span className="text-sm font-bold text-foreground">
                        {timeRemaining}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Votes Needed */}
              {detailedMotion.votesNeededToPass && (
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Votes Needed to Pass</span>
                    <span className="text-sm font-bold text-foreground">
                      {detailedMotion.votesNeededToPass}
                    </span>
                  </div>
                </div>
              )}

              {/* Seconding Progress */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Seconds</span>
                  <span className="text-sm font-bold text-foreground">
                    {detailedMotion.secondsReceived}/{detailedMotion.secondsNeeded}
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{
                      width: `${(detailedMotion.secondsReceived / detailedMotion.secondsNeeded) * 100}%`
                    }}
                  />
                </div>
              </div>

              {/* Voting Progress */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Council Votes</span>
                  <span className="text-sm font-bold text-foreground">
                    {detailedMotion.votedMembers}/{detailedMotion.totalMembers}
                  </span>
                </div>
                <div className="flex w-full h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-green-400"
                    style={{ width: `${detailedMotion.ayePercentage}%` }}
                  />
                  <div
                    className="bg-red-400"
                    style={{ width: `${detailedMotion.nayPercentage}%` }}
                  />
                  <div className="bg-muted flex-1" />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-1">
                    <ArrowUp size={14} className="text-green-400" />
                    <span className="text-xs text-muted-foreground font-bold">
                      {detailedMotion.ayePercentage}% Aye
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowDown size={14} className="text-red-400" />
                    <span className="text-xs text-muted-foreground font-bold">
                      {detailedMotion.nayPercentage}% Nay
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Council Actions Card */}
          <div id="motion-actions-section" className="bg-card rounded-2xl p-5">
            <div className="space-y-6">
              <h2 className="text-xl font-bold">Council Actions</h2>

              {isCouncilMember ? (
                <div className="space-y-4">
                  {/* Current Vote Display */}
                  {(userVote || hasVotedAye || hasVotedNay) && (
                    <div className="bg-secondary/50 rounded-xl p-4 border border-border">
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Your Action</p>
                        <p className="text-sm font-bold">
                          {userVote?.voteType === 'second' ? '✓ Seconded' :
                           userVote?.voteType === 'close' ? '✓ Voted to Close' :
                           userVote?.voteType === 'aye' || hasVotedAye ? '✓ Voted Aye' :
                           userVote?.voteType === 'nay' || hasVotedNay ? '✓ Voted Nay' : ''}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    {/* Second Motion Button */}
                    <Button
                      className={`w-full h-10 ${hasSecondedMotion ? 'bg-primary text-primary-foreground' : ''}`}
                      variant={hasSecondedMotion ? "default" : "outline"}
                      onClick={() => handleVote('second')}
                      disabled={detailedMotion.status === 'cancelled'}
                    >
                      {hasSecondedMotion ? '✓ Seconded' : `Second Motion (${detailedMotion.secondsReceived}/${detailedMotion.secondsNeeded})`}
                    </Button>

                    {/* Voting Buttons - Only show if motion has enough seconds */}
                    {detailedMotion.secondsReceived >= detailedMotion.secondsNeeded && (
                      <>
                        <div className="flex gap-2">
                          <Button
                            className={`flex-1 h-10 ${hasVotedAye ? 'bg-green-600 text-white' : ''}`}
                            variant={hasVotedAye ? "default" : "outline"}
                            onClick={() => handleVote('aye')}
                            disabled={detailedMotion.status === 'cancelled'}
                          >
                            <ArrowUp size={16} className="mr-1" />
                            {hasVotedAye ? '✓ Aye' : 'Vote Aye'}
                          </Button>
                          <Button
                            className={`flex-1 h-10 ${hasVotedNay ? 'bg-red-600 text-white' : ''}`}
                            variant={hasVotedNay ? "default" : "outline"}
                            onClick={() => handleVote('nay')}
                            disabled={detailedMotion.status === 'cancelled'}
                          >
                            <ArrowDown size={16} className="mr-1" />
                            {hasVotedNay ? '✓ Nay' : 'Vote Nay'}
                          </Button>
                        </div>

                        {/* Change Vote / Withdraw Support */}
                        {(hasVotedAye || hasVotedNay) && (
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              className="flex-1 h-10"
                              onClick={() => handleVote(hasVotedAye ? 'nay' : 'aye')}
                              disabled={detailedMotion.status === 'cancelled'}
                            >
                              Change Vote
                            </Button>
                            <Button
                              variant="outline"
                              className="flex-1 h-10"
                              onClick={() => {
                                setUserVotes(prev => prev.filter(vote => vote.motionId !== motionId));
                                toast.success('Support withdrawn');
                              }}
                              disabled={detailedMotion.status === 'cancelled'}
                            >
                              Withdraw Support
                            </Button>
                          </div>
                        )}
                      </>
                    )}

                    {/* Cancel Motion Button - Only for majority council or proposer */}
                    {detailedMotion.canCancel && (
                      <Button
                        variant="destructive"
                        className="w-full h-10"
                        onClick={handleCancelMotion}
                        disabled={detailedMotion.status === 'cancelled'}
                      >
                        <X size={16} className="mr-2" />
                        Cancel Motion (Majority Required)
                      </Button>
                    )}

                    <Button
                      className={`w-full h-10 ${hasVotedToClose ? 'bg-destructive text-destructive-foreground' : ''}`}
                      variant={hasVotedToClose ? "default" : "outline"}
                      onClick={() => handleVote('close')}
                      disabled={detailedMotion.status === 'cancelled'}
                    >
                      {hasVotedToClose ? '✓ Voted to Close' : `Close Motion (${detailedMotion.votedMembers}/${detailedMotion.totalMembers})`}
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {!isLoggedIn ? (
                    <div className="text-center p-4 bg-muted/20 border border-border rounded-lg">
                      <p className="text-sm text-muted-foreground mb-3">
                        Connect your wallet to view available actions
                      </p>
                      <Button className="w-full">
                        Connect Wallet
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center p-4 bg-muted/20 border border-border rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        Only council members can second or close motions
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
