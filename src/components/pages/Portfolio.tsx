import { useState, useMemo } from 'react';
import { NavigationItem } from '@/app/page';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Lock, ArrowUp, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';
import { useUser } from '../UserContext';
import Root from '../../imports/Root-99-709';



type ActivityTab = 'voting' | 'deposits' | 'delegation' | 'locks';

interface VotingActivity {
  id: string;
  title: string;
  status: 'passed' | 'active' | 'failed';
  date: string;
  vote: 'for' | 'against';
  amount: string;
  conviction: number;
  hasLock?: boolean;
}

interface ProposalDeposit {
  id: string;
  title: string;
  status: 'active' | 'declined';
  date: string;
}

interface DelegateUser {
  id: string;
  name: string;
  address: string;
  amount: string;
  conviction: number;
  timeRemaining: string;
  verified?: boolean;
}

// interface DelegateActivity {
//   id: string;
//   title: string;
//   delegate: {
//     name: string;
//   };
//   status: 'passed' | 'active';
//   vote: 'for' | 'against';
//   date: string;
// }

interface ActiveLock {
  id: string;
  title: string;
  type: 'delegation' | 'voting' | 'proposal';
  date: string;
  amount: string;
  timeRemaining: string;
}

const mockVotingActivities: VotingActivity[] = [
  {
    id: '1',
    title: 'Update XCM Weight Trader Values for Fair Asset Execution',
    status: 'passed',
    date: '8 August 2025',
    vote: 'for',
    amount: '2,000',
    conviction: 6,
  },
  {
    id: '2',
    title: 'Proposal title goes here',
    status: 'active',
    date: '10 August 2025',
    vote: 'for',
    amount: '2,000',
    conviction: 6,
    hasLock: true,
  },
  {
    id: '3',
    title: 'Treasury Proposal: Development Fund Allocation',
    status: 'passed',
    date: '5 August 2025',
    vote: 'for',
    amount: '1,500',
    conviction: 4,
  },
  {
    id: '4',
    title: 'Network Upgrade v2.4.1 Implementation',
    status: 'active',
    date: '11 August 2025',
    vote: 'against',
    amount: '3,000',
    conviction: 2,
    hasLock: true,
  },
  {
    id: '5',
    title: 'Validator Set Expansion Proposal',
    status: 'passed',
    date: '3 August 2025',
    vote: 'for',
    amount: '1,800',
    conviction: 6,
  },
];

const mockProposalDeposits: ProposalDeposit[] = [
  {
    id: '1',
    title: 'Proposal title goes here',
    status: 'active',
    date: '12 July 2025',
  },
  {
    id: '2',
    title: 'Proposal title goes here',
    status: 'active',
    date: '12 July 2025',
  },
  {
    id: '3',
    title: 'Proposal title goes here',
    status: 'declined',
    date: '12 July 2025',
  },
];

const mockDelegatedUsers: DelegateUser[] = [
  {
    id: '1',
    name: 'FV Seona',
    address: '0x1234...5678',
    amount: '2,000',
    conviction: 3,
    timeRemaining: '7d 23h remaining',
    verified: true,
  },
  {
    id: '2',
    name: 'Jane doey doe',
    address: '0x8765...4321',
    amount: '1,500',
    conviction: 2,
    timeRemaining: '12d 15h remaining',
  },
];

// const mockDelegateActivities: DelegateActivity[] = [
//   {
//     id: '1',
//     title: 'Proposal title goes here',
//     delegate: {
//       name: 'FV Seona',
//     },
//     status: 'passed',
//     vote: 'for',
//     date: '12 July 2025',
//   },
//   {
//     id: '2',
//     title: 'Proposal title goes here',
//     delegate: {
//       name: 'FV Seona',
//     },
//     status: 'passed',
//     vote: 'for',
//     date: '12 July 2025',
//   },
//   {
//     id: '3',
//     title: 'Proposal title goes here',
//     delegate: {
//       name: 'FV Seona',
//     },
//     status: 'passed',
//     vote: 'for',
//     date: '12 July 2025',
//   },
//   {
//     id: '4',
//     title: 'Proposal title goes here',
//     delegate: {
//       name: 'FV Seona',
//     },
//     status: 'passed',
//     vote: 'for',
//     date: '12 July 2025',
//   },
// ];
//
// Mock data for standard users' delegation overview
const mockDelegateActivity = [
  {
    id: '1',
    title: 'Proposal title goes here',
    proposer: 'FV Seona',
    status: 'Status Badge',
    vote: 'for' as const,
    date: '12 July 2025',
  },
  {
    id: '2',
    title: 'Treasury Funding for Development',
    proposer: 'FV Seona',
    status: 'Status Badge',
    vote: 'for' as const,
    date: '10 July 2025',
  },
  {
    id: '3',
    title: 'Runtime Upgrade v2.4.1',
    proposer: 'FV Seona',
    status: 'Status Badge',
    vote: 'against' as const,
    date: '8 July 2025',
  },
  {
    id: '4',
    title: 'Network Parameter Updates',
    proposer: 'FV Seona',
    status: 'Status Badge',
    vote: 'for' as const,
    date: '5 July 2025',
  },
];

// Function to convert time remaining string to total hours for sorting
function parseTimeRemaining(timeStr: string): number {
  const match = timeStr.match(/(\d+)d\s+(\d+)h/);
  if (match) {
    const days = parseInt(match[1]);
    const hours = parseInt(match[2]);
    return days * 24 + hours;
  }
  return 0;
}

const mockActiveLocks: ActiveLock[] = [
  {
    id: '1',
    title: 'Delegation to FV Seona',
    type: 'delegation',
    date: '5 August 2025',
    amount: '2,000',
    timeRemaining: '7d 23h remaining',
  },
  {
    id: '2',
    title: 'Network Upgrade v2.4.1 Implementation',
    type: 'voting',
    date: '11 August 2025',
    amount: '3,000',
    timeRemaining: '3d 12h remaining',
  },
  {
    id: '3',
    title: 'Delegation to Jane Doe',
    type: 'delegation',
    date: '6 August 2025',
    amount: '1,500',
    timeRemaining: '8d 15h remaining',
  },
  {
    id: '4',
    title: 'Proposal title goes here',
    type: 'voting',
    date: '10 August 2025',
    amount: '2,000',
    timeRemaining: '5d 8h remaining',
  },
  {
    id: '5',
    title: 'Treasury Development Fund Proposal',
    type: 'proposal',
    date: '12 July 2025',
    amount: '500',
    timeRemaining: '15d 4h remaining',
  },
  {
    id: '6',
    title: 'Council Election Round 12',
    type: 'voting',
    date: '9 August 2025',
    amount: '1,200',
    timeRemaining: '6d 11h remaining',
  },
  {
    id: '7',
    title: 'Validator Reward Distribution Update',
    type: 'voting',
    date: '7 August 2025',
    amount: '2,500',
    timeRemaining: '12d 18h remaining',
  },
  {
    id: '8',
    title: 'Cross-chain Bridge Security Audit',
    type: 'voting',
    date: '4 August 2025',
    amount: '3,500',
    timeRemaining: '18d 22h remaining',
  },
  {
    id: '9',
    title: 'Runtime Upgrade - Performance Improvements',
    type: 'voting',
    date: '11 August 2025',
    amount: '1,800',
    timeRemaining: '2d 14h remaining',
  },
  {
    id: '10',
    title: 'Governance Parameter Adjustment',
    type: 'voting',
    date: '8 August 2025',
    amount: '2,200',
    timeRemaining: '9d 7h remaining',
  },
];

function VotingActivityCard({ activity, onNavigate }: { activity: VotingActivity; onNavigate?: (page: NavigationItem) => void }) {
  return (
    <motion.div
      className="bg-card rounded-xl p-5 shadow-elevation-sm border border-border cursor-pointer"
      onClick={() => onNavigate && onNavigate('proposal-detail')}
      whileHover={{
        scale: 1.005,
        borderColor: 'rgba(255, 255, 255, 0.6)'
      }}
      whileTap={{ scale: 0.995 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="space-y-4">
        {/* Header with status badge and date */}
        <div className="flex items-start justify-between">
          <Badge
            className={`text-[2px] font-bold uppercase px-0.5 py-0 rounded ${
              activity.status === 'passed' 
                ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                : activity.status === 'active'
                ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                : 'bg-red-500/20 text-red-400 border-red-500/30'
            }`}
          >
            Status Badge
          </Badge>
          <div className="text-xs text-foreground font-medium">
            {activity.date}
          </div>
        </div>

        {/* Title */}
        <h4 className="text-foreground">{activity.title}</h4>

        {/* Vote, amount, and conviction on one line */}
        <div className="flex items-center gap-2">
          {activity.vote === 'for' ? (
            <ArrowUp className="w-3 h-3 text-green-400" />
          ) : (
            <ArrowDown className="w-3 h-3 text-red-400" />
          )}
          <span className="text-xs text-foreground font-medium capitalize">
            {activity.vote === 'for' ? 'Aye' : 'Nay'}
          </span>
          <span className="text-foreground flex items-center gap-1">{activity.amount} <span className="inline-block w-3 h-3"><Root /></span></span>
          <span className="text-xs text-foreground font-medium">x{activity.conviction} Conviction</span>
          {activity.hasLock && <Lock className="w-3 h-3 text-muted-foreground" />}
        </div>
      </div>
    </motion.div>
  );
}

function ProposalDepositCard({ deposit, onNavigate }: { deposit: ProposalDeposit; onNavigate?: (page: NavigationItem) => void }) {
  return (
    <motion.div
      className="bg-card rounded-xl p-5 shadow-elevation-sm border border-border cursor-pointer"
      onClick={() => onNavigate && onNavigate('proposal-detail')}
      whileHover={{
        scale: 1.005,
        borderColor: 'rgba(255, 255, 255, 0.6)'
      }}
      whileTap={{ scale: 0.995 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="space-y-4">
        {/* Header with badge and date */}
        <div className="flex items-start justify-between">
          <Badge
            className={`text-[2px] font-bold uppercase px-0.5 py-0 rounded ${
              deposit.status === 'active' 
                ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                : 'bg-red-500/20 text-red-400 border-red-500/30'
            }`}
          >
            Status Badge
          </Badge>
          <div className="text-xs text-foreground font-medium">
            {deposit.date}
          </div>
        </div>

        {/* Title */}
        <h4 className="text-foreground">{deposit.title}</h4>

        {/* Action button */}
        <div className="flex justify-end">
          <Button
            variant="outline"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate && onNavigate('proposal-detail');
            }}
          >
            View Proposal
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

function DelegatedUserCard({ user }: { user: DelegateUser }) {
  const delegatedRootBalance = parseInt(user.amount.replace(/[^0-9]/g, '')) * user.conviction;

  return (
    <motion.div
      className="bg-card rounded-xl p-5 shadow-elevation-sm border border-border"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="space-y-4">
        {/* Header with user info */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <h4 className="text-foreground">{user.name}</h4>
            {user.verified && (
              <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M9 1L3.5 6.5L1 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* Delegation details grid */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-muted-foreground">Delegated Amount</p>
            <p className="text-sm font-medium text-foreground flex items-center gap-1">{user.amount} <span className="inline-block w-3 h-3"><Root /></span></p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Conviction</p>
            <p className="text-sm font-medium text-foreground">x{user.conviction}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Time Remaining</p>
            <p className="text-sm font-medium text-foreground">{user.timeRemaining}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Delegated Balance</p>
            <p className="text-sm font-medium text-foreground flex items-center gap-1">{delegatedRootBalance.toLocaleString()} <span className="inline-block w-3 h-3"><Root /></span></p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// function DelegateActivityCard({
//   activity,
//   onNavigate,
//   onSelectProposal
// }: {
//   activity: DelegateActivity;
//   onNavigate?: (page: NavigationItem) => void;
//   onSelectProposal?: (id: string) => void;
// }) {
//   const handleClick = () => {
//     if (onSelectProposal && onNavigate) {
//       onSelectProposal(activity.id);
//       onNavigate('proposal-detail');
//     }
//   };
//
//   return (
//     <motion.div
//       className="bg-card rounded-xl p-5 shadow-elevation-sm border border-border cursor-pointer"
//       onClick={handleClick}
//       whileHover={{
//         scale: 1.005,
//         borderColor: 'rgba(255, 255, 255, 0.6)'
//       }}
//       whileTap={{ scale: 0.995 }}
//       transition={{ duration: 0.15, ease: "easeOut" }}
//       initial={{ opacity: 0, y: 8 }}
//       animate={{ opacity: 1, y: 0 }}
//     >
//       <div className="space-y-4 relative">
//         {/* Header with status badge and date */}
//         <div className="flex items-start justify-between">
//           <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-[2px] font-bold uppercase px-0.5 py-0 rounded">
//             Status Badge
//           </Badge>
//           <div className="text-xs text-foreground font-medium">
//             {activity.date}
//           </div>
//         </div>
//
//         {/* Title */}
//         <h4 className="text-foreground">{activity.title}</h4>
//
//         {/* Vote direction and delegate name */}
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-1">
//             {activity.vote === 'for' ? (
//               <ArrowUp className="w-3 h-3 text-green-400" />
//             ) : (
//               <ArrowDown className="w-3 h-3 text-red-400" />
//             )}
//             <span className="text-xs text-foreground font-medium capitalize">
//               {activity.vote === 'for' ? 'Aye' : 'Nay'}
//             </span>
//           </div>
//           {/* Delegate name moved to bottom right */}
//           <span className="text-xs text-foreground font-medium">{activity.delegate.name}</span>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

function ActiveLockCard({ lock, onNavigate }: { lock: ActiveLock; onNavigate?: (page: NavigationItem) => void }) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'delegation':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'voting':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'proposal':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const handleClick = () => {
    if (onNavigate) {
      if (lock.type === 'delegation') {
        onNavigate('delegate');
      } else {
        onNavigate('proposal-detail');
      }
    }
  };

  return (
    <motion.div
      className="bg-card rounded-xl p-5 shadow-elevation-sm border border-border cursor-pointer"
      onClick={handleClick}
      whileHover={{
        scale: 1.005,
        borderColor: 'rgba(255, 255, 255, 0.6)'
      }}
      whileTap={{ scale: 0.995 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="space-y-4">
        {/* Header with badge and date */}
        <div className="flex items-start justify-between">
          <Badge className={`text-[2px] font-bold uppercase px-0.5 py-0 rounded ${getTypeColor(lock.type)}`}>
            Type Badge
          </Badge>
          <div className="text-xs text-foreground font-medium">
            {lock.date}
          </div>
        </div>

        {/* Title */}
        <h4 className="text-foreground">{lock.title}</h4>

        {/* Amount and time remaining */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-foreground flex items-center gap-1">{lock.amount} <span className="inline-block w-3 h-3"><Root /></span></span>
            <Lock className="w-3 h-3 text-muted-foreground" />
          </div>
          <span className="text-xs text-foreground font-medium">{lock.timeRemaining}</span>
        </div>
      </div>
    </motion.div>
  );
}



interface PortfolioProps {
  onNavigate?: (page: NavigationItem) => void;
  // onSelectProposal?: (id: string) => void;
}

// export function Portfolio({ onNavigate, onSelectProposal }: PortfolioProps) {
export function Portfolio({ onNavigate }: PortfolioProps) {
  const { isDelegate } = useUser();
  const [activeTab, setActiveTab] = useState<ActivityTab>('voting');
  const [delegatedUsers] = useState<DelegateUser[]>(mockDelegatedUsers);
  const [stats] = useState({
    totalDelegatedRoot: 200000,
    effectiveVotingPower: 12
  });

  // Sort active locks by time remaining (least time first)
  const sortedActiveLocks = useMemo(() => {
    return [...mockActiveLocks].sort((a, b) => parseTimeRemaining(a.timeRemaining) - parseTimeRemaining(b.timeRemaining));
  }, []);

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-foreground">Portfolio</h1>
        <p className="text-muted-foreground max-w-2xl">
          Overview of your governance participation and token management
        </p>
      </div>

      {/* Balance Cards */}
      <div className="bg-card rounded-2xl p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Free Balance</p>
              <p className="text-xl md:text-2xl font-semibold text-foreground">242,008,999</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Locked Balance</p>
              <p className="text-xl md:text-2xl font-semibold text-foreground">837K</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Total Balance</p>
              <p className="text-xl md:text-2xl font-semibold text-foreground">183</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Staked Balance</p>
              <p className="text-xl md:text-2xl font-semibold text-foreground">12</p>
            </div>
          </div>
        </div>
      </div>

      {/* Your Activity Section */}
      <div className="space-y-6">
        <h2 className="text-foreground">Your activity</h2>

        {/* Tab Navigation */}
        <div className="border-b border-border">
          <div className="flex gap-4 md:gap-8 overflow-x-auto scrollbar-hide">
            <Button
              variant="ghost"
              onClick={() => setActiveTab('voting')}
              className={`pb-2 text-sm font-medium border-b-2 rounded-none transition-colors hover:bg-transparent ${
                activeTab === 'voting'
                  ? 'text-foreground border-primary'
                  : 'text-muted-foreground border-transparent hover:text-foreground'
              }`}
            >
              Recent Voting Activity
            </Button>
            <Button
              variant="ghost"
              onClick={() => setActiveTab('deposits')}
              className={`pb-2 text-sm font-medium border-b-2 rounded-none transition-colors hover:bg-transparent ${
                activeTab === 'deposits'
                  ? 'text-foreground border-primary'
                  : 'text-muted-foreground border-transparent hover:text-foreground'
              }`}
            >
              Proposal Deposits
            </Button>
            <Button
              variant="ghost"
              onClick={() => setActiveTab('delegation')}
              className={`pb-2 text-sm font-medium border-b-2 rounded-none transition-colors hover:bg-transparent ${
                activeTab === 'delegation'
                  ? 'text-foreground border-primary'
                  : 'text-muted-foreground border-transparent hover:text-foreground'
              }`}
            >
              Delegation Overview
            </Button>
            <Button
              variant="ghost"
              onClick={() => setActiveTab('locks')}
              className={`pb-2 text-sm font-medium border-b-2 rounded-none transition-colors hover:bg-transparent ${
                activeTab === 'locks'
                  ? 'text-foreground border-primary'
                  : 'text-muted-foreground border-transparent hover:text-foreground'
              }`}
            >
              Active locks
            </Button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'voting' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {mockVotingActivities.map((activity) => (
              <VotingActivityCard key={activity.id} activity={activity} onNavigate={onNavigate} />
            ))}
          </div>
        )}

        {activeTab === 'deposits' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {mockProposalDeposits.map((deposit) => (
              <ProposalDepositCard key={deposit.id} deposit={deposit} onNavigate={onNavigate} />
            ))}
          </div>
        )}

        {activeTab === 'delegation' && isDelegate && (
          <div className="max-w-4xl">
            <div className="space-y-6">
              {/* Stats */}
              <motion.div
                className="bg-card rounded-xl p-6 shadow-elevation-sm border border-border"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="space-y-6">
                  <h3 className="text-foreground">Delegate Stats</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-muted-foreground text-sm">Total delegated to you</p>
                      <p className="text-foreground text-2xl">{stats.totalDelegatedRoot.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">Active delegators</p>
                      <p className="text-foreground text-2xl">{stats.effectiveVotingPower}</p>
                    </div>
                  </div>

                </div>
              </motion.div>

              {/* Delegated Users */}
              <motion.div
                className="bg-card rounded-xl p-6 shadow-elevation-sm border border-border"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="space-y-4">
                  <h3 className="text-foreground">Delegated</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {delegatedUsers.length > 0 ? (
                      delegatedUsers.map((user) => (
                        <DelegatedUserCard key={user.id} user={user} />
                      ))
                    ) : (
                      <div className="lg:col-span-2">
                        <div className="bg-card rounded-xl p-8 shadow-elevation-sm border border-border text-center">
                          <div className="space-y-3">
                            <div className="w-12 h-12 mx-auto bg-muted rounded-full flex items-center justify-center">
                              <Lock className="w-5 h-5 text-muted-foreground" />
                            </div>
                            <div>
                              <h4 className="text-foreground">No active delegations</h4>
                              <p className="text-muted-foreground text-sm mt-1">
                                You currently have no users delegating their voting power to you.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {activeTab === 'delegation' && !isDelegate && (
          <div className="space-y-12">
            {/* Stats Section - Using same style as balance cards */}
            <div className="space-y-6">
              <h3 className="text-foreground">Stats</h3>
              <div className="bg-card rounded-2xl p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-card border border-border rounded-xl p-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Total delegated Root</p>
                      <p className="text-xl md:text-2xl font-semibold text-foreground">200,000</p>
                    </div>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Effective voting power</p>
                      <p className="text-xl md:text-2xl font-semibold text-foreground">12</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Delegated Section */}
            <div className="space-y-6">
              <h3 className="text-foreground">Delegated</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* First Delegate */}
                <motion.div
                  className="bg-card rounded-xl p-5 shadow-elevation-sm border border-border"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="space-y-4">
                    {/* Header with delegate name and verification */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <h4 className="text-foreground">FV Seona</h4>
                        {/* Verification badge */}
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M9 1L3.5 6.5L1 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toast.success('Delegation revoked successfully')}
                      >
                        Revoke
                      </Button>
                    </div>

                    {/* Delegation info */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Delegated Amount</span>
                        <span className="text-foreground flex items-center gap-1">2,000 <span className="inline-block w-3 h-3"><Root /></span></span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Conviction</span>
                        <span className="text-foreground">x3</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Time Remaining</span>
                        <div className="flex items-center gap-1">
                          <span className="text-foreground text-xs">7d 23h remaining</span>
                          <Lock size={12} className="text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Second Delegate */}
                <motion.div
                  className="bg-card rounded-xl p-5 shadow-elevation-sm border border-border"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="space-y-4">
                    {/* Header with delegate name */}
                    <div className="flex items-start justify-between">
                      <h4 className="text-foreground">Jane doey doe</h4>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toast.success('Delegation revoked successfully')}
                      >
                        Revoke
                      </Button>
                    </div>

                    {/* Delegation info */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Delegated Amount</span>
                        <span className="text-foreground flex items-center gap-1">2,000 <span className="inline-block w-3 h-3"><Root /></span></span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Conviction</span>
                        <span className="text-foreground">x3</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Time Remaining</span>
                        <div className="flex items-center gap-1">
                          <span className="text-foreground text-xs">7d 23h remaining</span>
                          <Lock size={12} className="text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Delegate Activity Section */}
            <div className="space-y-6">
              <h3 className="text-foreground">Delegate activity</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {mockDelegateActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    className="bg-card rounded-xl p-5 shadow-elevation-sm border border-border cursor-pointer"
                    whileHover={{
                      scale: 1.005,
                      borderColor: 'rgba(255, 255, 255, 0.6)'
                    }}
                    whileTap={{ scale: 0.995 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="space-y-4">
                      {/* Header with status badge and date */}
                      <div className="flex items-start justify-between">
                        <Badge className="text-[2px] font-bold uppercase px-0.5 py-0 rounded bg-green-500/20 text-green-400 border-green-500/30">
                          Status Badge
                        </Badge>
                        <div className="text-xs text-foreground font-medium">
                          {activity.date}
                        </div>
                      </div>

                      {/* Title */}
                      <h4 className="text-foreground">{activity.title}</h4>

                      {/* Vote and delegate info */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {activity.vote === 'for' ? (
                            <ArrowUp className="w-3 h-3 text-green-400" />
                          ) : (
                            <ArrowDown className="w-3 h-3 text-red-400" />
                          )}
                          <span className="text-xs text-foreground font-medium capitalize">
                            {activity.vote === 'for' ? 'Aye' : 'Nay'}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground">{activity.proposer}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Load More Button */}
              <div className="flex justify-center pt-4">
                <Button
                  variant="ghost"
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => toast.info('Loading more activity...')}
                >
                  Load more
                </Button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'locks' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {sortedActiveLocks.map((lock) => (
              <ActiveLockCard key={lock.id} lock={lock} onNavigate={onNavigate} />
            ))}
          </div>
        )}
      </div>


    </div>
  );
}
