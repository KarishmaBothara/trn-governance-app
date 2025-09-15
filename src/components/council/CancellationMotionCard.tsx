import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { Clock } from 'lucide-react';
import { CancellationMotion, CancellationVote, CancellationVoteType } from './types';
import { NavigationItem } from "@/app/page";

interface CancellationMotionCardProps {
  motion: CancellationMotion;
  userVotes: CancellationVote[];
  onVote: (motionId: string, voteType: CancellationVoteType) => void;
  isCouncilMember: boolean;
  onNavigate?: (page: NavigationItem) => void;
  onSelectProposal?: (id: string) => void;
}

export function CancellationMotionCard({ motion, userVotes, onVote, isCouncilMember, onNavigate, onSelectProposal }: CancellationMotionCardProps) {
  const userVote = userVotes.find(vote => vote.referendumId === motion.referendumId);
  const hasVotedToCancel = userVote?.voteType === 'cancel';
  const hasVotedAgainst = userVote?.voteType === 'against';
  const [timeRemaining, setTimeRemaining] = useState<string>('');

  // Countdown timer effect
  useEffect(() => {
    if (!motion.remainingTimeMs || motion.status !== 'active' || motion.remainingTimeMs <= 0) {
      setTimeRemaining('');
      return;
    }

    const updateTimer = () => {
      const remaining = motion.remainingTimeMs;

      if (remaining <= 0) {
        setTimeRemaining('Expired');
        return;
      }

      const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      if (days > 0) {
        setTimeRemaining(`${days}d ${hours}h`);
      } else if (hours > 0) {
        setTimeRemaining(`${hours}h`);
      } else {
        const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        if (minutes > 0) {
          setTimeRemaining(`${minutes}m`);
        } else {
          setTimeRemaining('< 1m');
        }
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [motion.remainingTimeMs, motion.status]);

  const handleCardClick = (e: React.MouseEvent) => {
    // Don't navigate if clicking on action buttons
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }

    if (onSelectProposal && onNavigate) {
      onSelectProposal(motion.referendumId);
      onNavigate('referendum-detail');
    }
  };

  const getStatusBadgeClass = () => {
    switch (motion.status) {
      case 'active':
        return 'bg-red-500/20 text-red-400';
      case 'passed':
        return 'bg-gray-500/20 text-gray-400';
      case 'failed':
        return 'bg-green-500/20 text-green-400';
      default:
        return 'bg-muted/20 text-muted-foreground';
    }
  };

  return (
    <Card
      className="bg-card rounded-xl border-border hover:border-white/80 cursor-pointer transition-all duration-200"
      onClick={handleCardClick}
    >
      <CardContent className="p-5 space-y-4">
        {/* Status and Time */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Badge className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${getStatusBadgeClass()}`}>
              {motion.status === 'active' ? 'Cancellation Motion' :
               motion.status === 'passed' ? 'Cancelled' : 'Motion Failed'}
            </Badge>
            <Badge className="bg-chart-2/20 text-chart-2 text-[10px] font-bold uppercase px-1.5 py-0.5 rounded">
              Referendum
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            {timeRemaining && motion.status === 'active' && (
              <div className="flex items-center gap-1">
                <Clock size={12} className="text-muted-foreground" />
                <span className="text-xs text-muted-foreground font-bold">
                  {timeRemaining}
                </span>
              </div>
            )}
            <span className="text-xs text-muted-foreground">
              #{motion.referendumId}
            </span>
          </div>
        </div>

        {/* Title with Warning Icon */}
        <h3 className="text-foreground text-xl font-bold">
          {motion.referendumTitle}
        </h3>

        {/* Voting Progress */}
        <div className="space-y-3">
          {/* Progress Bar */}
          <div className="flex w-full h-1.5 rounded-full overflow-hidden bg-border">
            <div
              className="bg-red-400 transition-all duration-200"
              style={{ width: `${(motion.votesFor / motion.requiredVotes) * 100}%` }}
            />
          </div>

          {/* Vote Count */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground font-bold">
                {motion.votesFor} / {motion.requiredVotes} votes to cancel
              </span>
              <span className="text-xs text-muted-foreground">
                ({motion.votesAgainst} against)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Proposed by:</span>
              <span className="text-xs text-muted-foreground font-bold">
                {motion.proposer.name}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons - Only visible for council members and active motions */}
        {isCouncilMember && motion.status === 'active' && (
          <div className="flex gap-2">
            <Button
              className={`flex-1 h-10 ${hasVotedToCancel ? 'bg-red-500 text-white' : ''}`}
              variant={hasVotedToCancel ? "default" : "outline"}
              onClick={(e) => {
                e.stopPropagation();
                onVote(motion.id, 'cancel');
              }}
            >
              {hasVotedToCancel ? '✓ Voted to Cancel' : 'Vote to Cancel'}
            </Button>
            <Button
              className={`flex-1 h-10 ${hasVotedAgainst ? 'bg-green-500 text-white' : ''}`}
              variant={hasVotedAgainst ? "default" : "outline"}
              onClick={(e) => {
                e.stopPropagation();
                onVote(motion.id, 'against');
              }}
            >
              {hasVotedAgainst ? '✓ Voted Against' : 'Vote Against'}
            </Button>
          </div>
        )}

        {/* Result Display for Completed Motions */}
        {motion.status !== 'active' && (
          <div className="bg-muted/20 rounded-lg p-3">
            <div className="text-sm text-muted-foreground">
              {motion.status === 'passed'
                ? `Motion passed with ${motion.votesFor} votes. Referendum has been cancelled.`
                : `Motion failed with only ${motion.votesFor} votes (required ${motion.requiredVotes}). Referendum continues.`
              }
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
