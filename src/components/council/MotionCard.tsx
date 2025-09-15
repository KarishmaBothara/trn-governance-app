import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { ArrowUp, ArrowDown, Clock } from 'lucide-react';
import { Motion, UserVote, VoteType } from './types';
import { NavigationItem } from '@/app/page';

interface MotionCardProps {
  motion: Motion;
  userVotes: UserVote[];
  onVote: (motionId: string, voteType: VoteType) => void;
  isCouncilMember: boolean;
  onNavigate?: (page: NavigationItem) => void;
  onSelectMotion?: (id: string) => void;
}

export function MotionCard({ motion, userVotes, onVote, isCouncilMember, onNavigate, onSelectMotion }: MotionCardProps) {
  const userVote = userVotes.find(vote => vote.motionId === motion.id);
  const hasSecondedMotion = userVote?.voteType === 'second';
  const hasVotedToClose = userVote?.voteType === 'close';
  const [timeRemaining, setTimeRemaining] = useState<string>('');

  // Countdown timer effect
  useEffect(() => {
    if (!motion.remainingTimeMs || motion.status === 'cancelled' || motion.remainingTimeMs <= 0) {
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

    if (onSelectMotion && onNavigate) {
      onSelectMotion(motion.id);
      onNavigate('motion-detail');
    }
  };

  return (
    <Card
      className="bg-card border-border hover:border-white/80 cursor-pointer transition-all duration-200"
      onClick={handleCardClick}
    >
      <CardContent className="p-5 space-y-4">
        {/* Status and Track Badges */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Badge className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${
              motion.status === 'proposed' ? 'bg-yellow-500/20 text-yellow-400' :
              motion.status === 'voting' ? 'bg-blue-500/20 text-blue-400' :
              motion.status === 'passed' ? 'bg-green-500/20 text-green-400' :
              motion.status === 'cancelled' ? 'bg-gray-500/20 text-gray-400' :
              'bg-red-500/20 text-red-400'
            }`}>
              {motion.status}
            </Badge>
            <Badge className="bg-chart-1/20 text-chart-1 text-[10px] font-bold uppercase px-1.5 py-0.5 rounded">
              {motion.track}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            {timeRemaining && (
              <div className="flex items-center gap-1">
                <Clock size={12} className="text-muted-foreground" />
                <span className="text-xs text-muted-foreground font-bold">
                  {timeRemaining}
                </span>
              </div>
            )}
            <span className="text-xs text-muted-foreground">
              {motion.proposalNumber}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-foreground text-xl font-bold">
          {motion.title}
        </h3>

        {/* Voting Stats and Proposer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Aye percentage */}
            <div className="flex items-center gap-1">
              <ArrowUp size={14} className="text-green-400" />
              <span className="text-xs text-muted-foreground font-bold">
                {motion.ayePercentage}% Aye
              </span>
            </div>

            {/* Nay percentage */}
            <div className="flex items-center gap-1">
              <ArrowDown size={14} className="text-red-400" />
              <span className="text-xs text-muted-foreground font-bold">
                {motion.nayPercentage}% Nay
              </span>
            </div>
          </div>

          {/* Proposer - without avatar */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Proposed by:</span>
            <span className="text-xs text-muted-foreground font-bold">
              {motion.proposer.name}
            </span>
          </div>
        </div>

        {/* Action Buttons - Only visible for council members */}
        {isCouncilMember && (
          <div className="flex gap-2">
            <Button
              className={`flex-1 h-10 ${hasSecondedMotion ? 'bg-primary text-primary-foreground' : ''}`}
              variant={hasSecondedMotion ? "default" : "outline"}
              onClick={(e) => {
                e.stopPropagation();
                onVote(motion.id, 'second');
              }}
              disabled={motion.status === 'cancelled'}
            >
              {hasSecondedMotion ? '✓ Seconded' : `Second motion (${motion.secondsReceived}/${motion.secondsNeeded})`}
            </Button>
            <Button
              className={`flex-1 h-10 ${hasVotedToClose ? 'bg-destructive text-destructive-foreground' : ''}`}
              variant={hasVotedToClose ? "default" : "outline"}
              onClick={(e) => {
                e.stopPropagation();
                onVote(motion.id, 'close');
              }}
              disabled={motion.status === 'cancelled'}
            >
              {hasVotedToClose ? '✓ Voted to close' : `Close (${motion.votedMembers}/${motion.totalMembers})`}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
