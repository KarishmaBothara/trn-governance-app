import { NavigationItem } from '@/app/page';
import {V2WeightConstruct} from "@/hooks/useWeight";

export type MotionStatus = 'proposed' | 'voting' | 'passed' | 'rejected' | 'cancelled';
export type VoteType = 'second' | 'close' | 'aye' | 'nay' | 'abstain';;
export type CancellationVoteType = 'cancel' | 'against';
import type { BN } from '@polkadot/util';

export interface UserVote {
  motionId: string;
  voteType: VoteType;
}

export interface CancellationVote {
  referendumId: string;
  voteType: CancellationVoteType;
}

export interface CancellationMotion {
  id: string;
  referendumId: string;
  referendumTitle: string;
  proposer: CouncilMember;
  status: 'active' | 'passed' | 'failed';
  votesFor: number;
  votesAgainst: number;
  totalMembers: number;
  requiredVotes: number; // 2/3 majority
  remainingTimeMs: number;
  submittedDate: string;
}

export interface Motion {
  encodedCallLength: number;
  weight: BN | V2WeightConstruct;
  timeRemaining: string;
  id: string;
  title: string;
  status: MotionStatus;
  track: string;
  daysLeft: number;
  proposalNumber: string;
  ayePercentage: number;
  nayPercentage: number;
  votedMembers: number;
  totalMembers: number;
  secondsNeeded: number;
  secondsReceived: number;
  proposer: {
    name: string;
  };
  description?: string;
  details?: string;
  hash?: string;
  module?: string;
  call?: string;
  submittedDate?: string;
  discordLink?: string;
  timeline?: Array<{
    event: string;
    date: string;
    completed: boolean;
  }>;
  motionDurationHours: number;
  remainingTimeMs: number;
  votesNeededToPass: number;
  userVote?: 'aye' | 'nay' | null;
  canCancel: boolean;
}

export interface CouncilMember {
  id: string;
  name: string;
  address: string;
  backing: string;
  votes: string;
  description: string;
  hasDiscord: boolean;
  hasTwitter: boolean;
  verified: boolean;
  stats: {
    motionsProposed: number;
    participation: string;
    termStart: string;
  };
  votingHistory: Array<{
    proposalId: string;
    title: string;
    date: string;
    vote: 'aye' | 'nay';
    track: string;
  }>;
  recentMotions: Array<{
    id: string;
    title: string;
    status: string;
    date: string;
    track: string;
  }>;
}

export type CouncilTab = 'overview' | 'pipeline' | 'propose';

export interface CouncilProps {
  onNavigate: (page: NavigationItem) => void;
  onSelectProposal: (id: string) => void;
  onSelectMotion: (id: Motion) => void;
  setIsCouncilMember: (isMem: true) => void;
}
