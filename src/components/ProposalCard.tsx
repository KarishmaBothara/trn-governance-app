import { Badge } from './ui/badge';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

export interface Proposal {
  id: string;
  title: string;
  status: 'queued' | 'active' | 'passed' | 'rejected' | 'fast-tracked';
  track: string;
  aye: number;
  nay: number;
  daysLeft: number;
  proposer: string;
  proposerAvatar?: string;
}

interface ProposalCardProps {
  proposal: Proposal;
  onSelect: () => void;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'passed':
      return 'bg-green-500/20 text-green-400 border-green-500/30';
    case 'rejected':
      return 'bg-red-500/20 text-red-400 border-red-500/30';
    case 'active':
      return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    case 'queued':
      return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    case 'fast-tracked':
      return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

const getTrackColor = () /*(track: string)*/ => {
  return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
};

export function ProposalCard({ proposal, onSelect }: ProposalCardProps) {
  return (
    <motion.div
      className="bg-card rounded-xl p-5 shadow-elevation-sm border border-border cursor-pointer"
      onClick={onSelect}
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
        {/* Header with badges and meta info */}
        <div className="flex items-start justify-between">
          <div className="flex gap-3">
            <Badge className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${getStatusColor(proposal.status)}`}>
              {proposal.status}
            </Badge>
            {/*<Badge className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${getTrackColor(proposal.track)}`}>*/}
            <Badge className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${getTrackColor()}`}>
              {proposal.track}
            </Badge>
          </div>
          <div className="hidden sm:block text-xs text-muted-foreground font-bold">
            {proposal.daysLeft} days left | #{proposal.id}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-foreground">{proposal.title}</h3>

        {/* Vote breakdown and proposer */}
        <div className="flex items-start justify-between">
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <ArrowUp size={14} className="text-green-400" />
              <span className="text-xs text-muted-foreground font-bold">{proposal.aye}% Aye</span>
            </div>
            <div className="flex items-center gap-1">
              <ArrowDown size={14} className="text-red-400" />
              <span className="text-xs text-muted-foreground font-bold">{proposal.nay}% Nay</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            {proposal.proposerAvatar && (
              <div
                className="w-5 h-5 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(${proposal.proposerAvatar})` }}
              />
            )}
            <span className="text-xs text-muted-foreground font-bold">{proposal.proposer}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
