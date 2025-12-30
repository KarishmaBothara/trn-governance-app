import { useState } from 'react';
import { NavigationItem } from '@/app/page';
import { Button } from '../ui/button';
// import { Badge } from '../ui/badge';
import { ProposalCard } from '../ProposalCard';
import { FeatureCard } from '../FeatureCard';
import { Send, ArrowRightLeft, LayoutGrid } from 'lucide-react';
import {useProposalInfo} from "@/hooks/useProposal";
// const imgLeftIcon = "/../../imports/left_icon.png";


interface GovernanceHubProps {
  onNavigate: (page: NavigationItem) => void;
  onSelectProposal: (proposalId: string) => void;
}

type ProposalTab = 'queued' | 'active' | 'history';

// interface Proposal {
//   id: string;
//   title: string;
//   status: 'queued' | 'active' | 'passed' | 'rejected' | 'fast-tracked';
//   track: string;
//   daysLeft: number;
//   proposalNumber: string;
//   description: string;
//   aye: number;
//   nay: number;
//   proposer: string;
//   proposerAvatar?: string;
// }

// Mock proposal data with accurate 28-day scheduling cycles
// const mockProposals: Proposal[] = [
//   {
//     id: '1',
//     title: 'Proposal title goes here',
//     status: 'queued',
//     track: 'Root',
//     daysLeft: Math.floor(Math.random() * 28) + 1, // Days until next 28-day scheduling cycle
//     proposalNumber: '#63542',
//     description: 'This is a brief description of the proposal that explains what it aims to achieve and why it matters.',
//     aye: 75,
//     nay: 25,
//     proposer: 'FV Seona',
//     proposerAvatar: imgLeftIcon,
//   },
//   {
//     id: '2',
//     title: 'Another proposal title',
//     status: 'active',
//     track: 'Treasurer',
//     daysLeft: Math.floor(Math.random() * 28) + 1, // Days remaining in 28-day voting period
//     proposalNumber: '#63543',
//     description: 'Another proposal description that provides context and details about the proposed changes.',
//     aye: 60,
//     nay: 40,
//     proposer: 'FV Seona',
//     proposerAvatar: imgLeftIcon,
//   },
//   {
//     id: '3',
//     title: 'Third proposal example',
//     status: 'passed',
//     track: 'Fellow',
//     daysLeft: 0,
//     proposalNumber: '#63541',
//     description: 'A passed proposal that was successfully approved by the community.',
//     aye: 85,
//     nay: 15,
//     proposer: 'FV Seona',
//     proposerAvatar: imgLeftIcon,
//   },
//   {
//     id: '4',
//     title: 'Fourth proposal title',
//     status: 'rejected',
//     track: 'Root',
//     daysLeft: 0,
//     proposalNumber: '#63540',
//     description: 'A rejected proposal that did not gain sufficient community support.',
//     aye: 30,
//     nay: 70,
//     proposer: 'FV Seona',
//     proposerAvatar: imgLeftIcon,
//   },
//   {
//     id: '5',
//     title: 'Fifth proposal in queue',
//     status: 'queued',
//     track: 'Treasurer',
//     daysLeft: Math.floor(Math.random() * 28) + 1, // Days until next scheduling cycle
//     proposalNumber: '#63544',
//     description: 'A queued proposal waiting for its turn in the governance pipeline.',
//     aye: 0,
//     nay: 0,
//     proposer: 'FV Seona',
//     proposerAvatar: imgLeftIcon,
//   },
//   {
//     id: '6',
//     title: 'Sixth active proposal',
//     status: 'active',
//     track: 'Fellow',
//     daysLeft: Math.floor(Math.random() * 28) + 1, // Days remaining in voting period
//     proposalNumber: '#63545',
//     description: 'An active proposal currently under community voting.',
//     aye: 45,
//     nay: 55,
//     proposer: 'FV Seona',
//     proposerAvatar: imgLeftIcon,
//   },
// ];



const quickActions = [
  {
    title: 'Submit a Proposal',
    description: 'Create and submit a new governance proposal to the network',
    icon: Send,
    action: 'submit-proposal' as NavigationItem,
  },
  {
    title: 'Delegate Your Vote',
    description: 'Delegate your voting power to trusted community members',
    icon: ArrowRightLeft,
    action: 'delegate' as NavigationItem,
  },
  {
    title: 'View All Proposals',
    description: 'Browse and search through all governance proposals',
    icon: LayoutGrid,
    action: 'proposals' as NavigationItem,
  },
];

export function GovernanceHub({ onNavigate, onSelectProposal }: GovernanceHubProps) {
  const [activeTab, setActiveTab] = useState<ProposalTab>('queued');
  const { data: proposalsInfo } = useProposalInfo();
  const proposals = proposalsInfo ? proposalsInfo : [];
  const getFilteredProposals = () => {
    switch (activeTab) {
      case 'queued':
        return proposals.filter((p: any) => p.status === 'queued');
      case 'active':
        return proposals.filter((p: any) => p.status === 'active');
      case 'history':
        return proposals.filter((p: any) => p.status === 'passed' || p.status === 'rejected');
      default:
        return proposals;
    }
  };

  return (
    <div className="space-y-12">
      {/* Welcome Section */}
      <div className="text-left space-y-8">
        <div className="space-y-4">
          <h1 className="text-foreground">Governance Dashboard</h1>
          <div className="text-muted-foreground max-w-2xl">
            Participate in <span>The Root</span> Network governance by voting on proposals, delegating your vote,
            and helping shape the future of the network.
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickActions.map((action, index) => (
            <FeatureCard
              key={index}
              title={action.title}
              description={action.description}
              icon={action.icon}
              onClick={() => onNavigate(action.action)}
            />
          ))}
        </div>
      </div>



      {/* Governance Dashboard */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-foreground">Governance Dashboard</h2>
          <Button
            variant="outline"
            onClick={() => onNavigate('proposals')}
            className="px-6"
          >
            View all proposals
          </Button>
        </div>

        {/* Custom Tab Navigation */}
        <div className="border-b border-border">
          <div className="flex gap-2 md:gap-8">
            <Button
              variant="ghost"
              onClick={() => setActiveTab('queued')}
              className={`pb-2 text-xs md:text-sm font-medium border-b-2 rounded-none transition-colors hover:bg-transparent px-2 md:px-4 ${
                activeTab === 'queued'
                  ? 'text-foreground border-primary'
                  : 'text-muted-foreground border-transparent hover:text-foreground'
              }`}
            >
              <span className="hidden sm:inline">Latest Queued Proposals</span>
              <span className="sm:hidden">Queued</span>
            </Button>
            <Button
              variant="ghost"
              onClick={() => setActiveTab('active')}
              className={`pb-2 text-xs md:text-sm font-medium border-b-2 rounded-none transition-colors hover:bg-transparent px-2 md:px-4 ${
                activeTab === 'active'
                  ? 'text-foreground border-primary'
                  : 'text-muted-foreground border-transparent hover:text-foreground'
              }`}
            >
              <span className="hidden sm:inline">Active Referenda</span>
              <span className="sm:hidden">Active</span>
            </Button>
            <Button
              variant="ghost"
              onClick={() => setActiveTab('history')}
              className={`pb-2 text-xs md:text-sm font-medium border-b-2 rounded-none transition-colors hover:bg-transparent px-2 md:px-4 ${
                activeTab === 'history'
                  ? 'text-foreground border-primary'
                  : 'text-muted-foreground border-transparent hover:text-foreground'
              }`}
            >
              <span className="hidden sm:inline">Proposal History</span>
              <span className="sm:hidden">History</span>
            </Button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {getFilteredProposals().map((proposal: any) => (
              <ProposalCard
                key={proposal.id}
                proposal={proposal}
                onSelect={() => {
                  onSelectProposal(proposal.id);
                  onNavigate('proposal-detail');
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
