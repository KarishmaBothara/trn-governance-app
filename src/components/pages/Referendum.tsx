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
import { ArrowLeft, ArrowUp, ArrowDown, AlertTriangle, Clock, X } from 'lucide-react';
import { toast } from 'sonner';
import { useUser } from '../UserContext';
import { mockCancellationMotions } from '../council/mockData';
import { CancellationMotion, CancellationVote, CancellationVoteType } from '../council/types';
import {useBestNumber} from "@/hooks/useBestNumber";
import {useBlockTime} from "@/hooks/useBlockTime";
import {useTrnApi} from "@futureverse/transact-react";
import {BN_ONE} from "@polkadot/util";
import { motion } from 'motion/react';

interface ReferendumDetailProps {
  referendumId: string | null;
  onNavigate: (page: NavigationItem) => void;
}

interface Referendum {
  id: string;
  title: string;
  status: any;
  track: string;
  proposer: string;
  proposerAvatar: string;
  ayeVotes: number;
  nayVotes: number;
  ayePercentage: number;
  nayPercentage: number;
  conviction: number;
  submittedDate: string;
  bondedAmount: string;
};

const getStatusBadgeClass = (status: string) => {
  switch (status) {
    case 'Active':
      return 'bg-blue-500/20 text-blue-400';
    case 'Passed':
      return 'bg-green-500/20 text-green-400';
    case 'Rejected':
      return 'bg-red-500/20 text-red-400';
    case 'Cancelled':
      return 'bg-gray-500/20 text-gray-400';
    case 'Fast-Tracked':
      return 'bg-purple-500/20 text-purple-400';
    default:
      return 'bg-muted/20 text-muted-foreground';
  }
};
const getTrackColor = () /*(track: string)*/ => {
  return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
};

export function Referendum({ referendum, onSelect }: { referendum: Referendum, onSelect: () => void }) {
  const {id, title, track, proposer, proposerAvatar, status, ayeVotes, nayVotes, ayePercentage, nayPercentage, conviction, submittedDate, bondedAmount } = referendum;
  const { trnApi } = useTrnApi();
  const { data: bestNumber } = useBestNumber();
  const enactBlock = status.end.add(status.delay);
  const remainBlock = status.end.sub(bestNumber).isub(BN_ONE);

  const [, votingPeriodHours] = useBlockTime(remainBlock, trnApi);
  const [, enactmentDate] = useBlockTime(enactBlock.sub(bestNumber), trnApi);
  if (!bestNumber || status.end.sub(bestNumber).lten(0)) {
    return null;
  }

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
              <Badge className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${getStatusBadgeClass('Active')}`}>
                {/*{referendum.status}*/}
                {'Active'}
              </Badge>
              {/*<Badge className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${getTrackColor(referendum.track)}`}>*/}
              {/*<Badge className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${getTrackColor()}`}>*/}
              {/*  {referendum.track}*/}
              {/*</Badge>*/}
            </div>
            <div className="hidden sm:block text-xs text-foreground font-medium">
              {`${votingPeriodHours} left`}
              {/*{referendum.status === 'Active' && votingPeriodHours > 0 && `${votingPeriodHours} left`}*/}
              {/*{referendum.status === 'Cancelled' && 'Cancelled by Council'}*/}
              {/*{referendum.status !== 'Active' && referendum.status !== 'Cancelled' && ''} | #{referendum.id}*/}
            </div>
          </div>

          {/* Title */}
          <h4 className="text-foreground">{referendum.title}</h4>

          {/* Vote breakdown and proposer - Only show for non-cancelled */}
          {referendum.status !== 'Cancelled' && (
              <div className="flex items-start justify-between">
                <div className="flex gap-1">
                  <div className="flex items-center gap-1">
                    <ArrowUp size={16} className="text-green-400" />
                    <span className="text-xs text-foreground font-medium">{referendum.ayePercentage}% Aye</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowDown size={16} className="text-red-400" />
                    <span className="text-xs text-foreground font-medium">{referendum.nayPercentage}% Nay</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div
                      className="w-5 h-5 rounded-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${referendum.proposerAvatar})` }}
                  />
                  <span className="text-xs text-foreground font-medium">{referendum.proposer}</span>
                </div>
              </div>
          )}

          {/* Cancelled referendum info */}
          {referendum.status === 'Cancelled' && (
              <div className="bg-gray-500/10 rounded-lg p-3 border border-gray-500/20">
                <p className="text-xs text-gray-400">This referendum was cancelled by council vote</p>
              </div>
          )}
        </div>
      </motion.div>
  );
}
