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
// import { mockCancellationMotions } from '../council/mockData';
import { CancellationMotion, CancellationVote, CancellationVoteType } from '../council/types';
import {useReferendumInfo} from "@/hooks/useReferendums";
import {useBestNumber} from "@/hooks/useBestNumber";
import {useBlockTime} from "@/hooks/useBlockTime";
import {BN_ONE} from "@polkadot/util";
import {useTrnApi} from "@futureverse/transact-react";
import {useAuth} from "@futureverse/auth-react";
import {useSigner} from "@/hooks/useSigner";
import {useCustomExtrinsicBuilder} from "@/hooks/useCustomExtrinsicBuilder";
import {useCouncilMembers} from "@/hooks/useCouncilMembers";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {updateVote} from "@/lib/utils";
import {ApiPromise} from "@polkadot/api";

interface ReferendumDetailProps {
  referendumId: string | null;
  onNavigate: (page: NavigationItem) => void;
}

export function ReferendumDetail({ referendumId, onNavigate }: ReferendumDetailProps) {
  const [isCouncilMember, setIsCouncilMember] = useState(false);
  const { userSession } = useAuth();
  const eoa = userSession?.eoa;
  const fpass = userSession?.futurepass;
  const signer = useSigner();
  const { trnApi } = useTrnApi();
  const builder = useCustomExtrinsicBuilder({
    signer,
    walletAddress: userSession?.eoa ?? "",
    trnApi,
  });
  const [voteDirection, setVoteDirection] = useState<'aye' | 'nay' | null>('aye');
  // const [stakeAmount, setStakeAmount] = useState([200]);
  const [rootAmount, setRootAmount] = useState('200');
  const [conviction, setConviction] = useState([2]);
  const [showVotingHistory, setShowVotingHistory] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [cancellationMotion,] = useState<CancellationMotion | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<string>('');
  const [cancellationVotes, setCancellationVotes] = useState<CancellationVote[]>([]);
  const { data: referendumData } = useReferendumInfo();
  const p = referendumData && referendumData.find((r: any) => r.refIdx === referendumId);
  const ayeVotes = p?.voteCountAye;
  const nayVotes = p?.voteCountNay;
  const totalVotes = ayeVotes + nayVotes;
  const ayePercentage = Math.round((ayeVotes / totalVotes) * 100) || 0;
  const nayPercentage = 100 - ayePercentage;
  const status = p?.status;
  const { data: bestNumber } = useBestNumber();
  // const enactBlock = status?.end.add(status.delay);
  const remainBlock = status?.end.sub(bestNumber).isub(BN_ONE);
  const { data: councilMembers } = useCouncilMembers();

  const [, votingPeriodHours] = useBlockTime(remainBlock, trnApi as ApiPromise);

  const [account, setAccount] = useState<string>('EOA');
  const accountType = {
    'FPass': { label: 'FPass', description: 'Use futurepass address' },
    'EOA': { label: 'EOA', description: 'Use eoa address' },
  };

  useEffect(() => {
    if (councilMembers && eoa && fpass) {
      const exist = councilMembers.find((cm: any) => cm.address.toLowerCase() === eoa.toLowerCase() || cm.address.toLowerCase() === fpass.toLowerCase())
      if (exist) {
        setIsCouncilMember(true);
      }
    }
  }, [councilMembers, eoa, fpass]);

  // Check if there's an active cancellation motion for this referendum
  // useEffect(() => {
  //   const motion = mockCancellationMotions.find(
  //     m => m.referendumId === referendumId && (m.status === 'active' || m.status === 'passed')
  //   );
  //   setCancellationMotion(motion || null);
  // }, [referendumId]);


  // Mock referendum data - status depends on cancellation motion result
  const referendum = {
    id: referendumId,
    pId: p?.idx,
    title: p?.title,
    status: cancellationMotion?.status === 'passed' ? 'Cancelled' : 'Active',
    track: 'Root',
    proposer: p?.proposer,
    daysLeft: votingPeriodHours, // Random days left in 28-day voting period
    ayePercentage: ayePercentage,
    nayPercentage: nayPercentage,
    ayeVotes: ayeVotes,
    nayVotes: nayVotes,
    enactmentDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString(), // 30-day enactment delay
    bondedAmount: '50 ROOT'
  };

  // Mock existing vote data - null if referendum is cancelled
  // const [existingVote, setExistingVote] = useState<{
  //   direction: 'aye' | 'nay';
  //   amount: string;
  //   conviction: number;
  //   votingPower: number;
  // } | null>(referendum.status === 'Cancelled' ? null : {
  //   direction: 'aye',
  //   amount: '150',
  //   conviction: 1,
  //   votingPower: 300
  // });

  const [existingVote, setExistingVote] = useState<{
    direction: 'aye' | 'nay';
    amount: string;
    conviction: number;
    votingPower: number;
  } | null>( null );

  // Countdown timer for cancellation motion
  useEffect(() => {
    if (!cancellationMotion || cancellationMotion.status !== 'active' || cancellationMotion.remainingTimeMs <= 0) {
      setTimeRemaining('');
      return;
    }

    const updateTimer = () => {
      const remaining = cancellationMotion.remainingTimeMs;

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
    const interval = setInterval(updateTimer, 60000);

    return () => clearInterval(interval);
  }, [cancellationMotion]);

  // Initialize form with existing vote data when component loads
  React.useEffect(() => {
    if (existingVote) {
      setVoteDirection(existingVote.direction);
      setRootAmount(existingVote.amount);
      setConviction([existingVote.conviction]);
    }
  }, [existingVote]);

  if (!bestNumber || status?.end.sub(bestNumber).lten(0)) {
    return null;
  }

  const handleVoteSubmit = async () => {
    // Call extrinsic to vote
    // Don't allow voting on cancelled referendums
    if (referendum.status === 'Cancelled') {
      toast.error('Cannot vote on a cancelled referendum');
      return;
    }

    const voteType = voteDirection === 'aye' ? 'Aye' : 'Nay';
    const aye = voteDirection === 'aye' ? true : false;
    const convictionMultiplier = Math.pow(2, conviction[0]);
    const isUpdate = existingVote !== null;

    if (!signer || !userSession || !trnApi || !builder) return;
    const convictionValue = trnApi.registry.createType('Conviction', conviction[0]);
    const vote = trnApi.registry.createType('PalletDemocracyVoteAccountVote', { vote: { aye: aye, conviction: convictionValue}, balance: rootAmount}, 0);
    const extrinsic = trnApi.tx.democracy.vote(referendumId, vote);

    const tx = account === 'FPass' ? await builder
        .fromExtrinsic(extrinsic)
        .addFuturePass(userSession.futurepass) : await builder.fromExtrinsic(extrinsic);


    const res = await tx.signAndSend({
      onSign: () => {
        // setTxStatus("signing");
        toast.success(<div className="space-y-2">
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
      },
      onSend: async () => {
      }
    });
    // const { extrinsicId, transactionHash, result } = res;
      const { result } = res;
      const event = result?.events.find((event) => {
      // if (!("event" in event)) return event.name === "democracy.Voted";

      return event.event.section === "democracy" && event.event.method === "Voted";
    });
    if (event) {
      const voter = event.event.data[0].toString();
      const refIndex = (event.event.data[1] as any).toNumber();
      const eventVote = (event.event.data[2] as any).toJSON();
      const isAye = eventVote.standard.vote === "0x83" ? true : false;
      const amount = eventVote.standard.balance;
      const pId = referendum.pId;

      await updateVote(voter, refIndex,  isAye, amount, parseInt(pId));

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
    } else {
      toast.info("Vote failed.");
    }
      // Navigate back to proposals page
      setTimeout(() => {
          onNavigate('proposals');
      }, 1000);
  };

  // const handleCancellationVote = (motionId: string, voteType: CancellationVoteType) => {
  const handleCancellationVote = (voteType: CancellationVoteType) => {
    // Find the motion to get referendum ID
    const motion = cancellationMotion;
    if (!motion) return;

    const existingVoteIndex = cancellationVotes.findIndex(vote => vote.referendumId === motion.referendumId);

    if (existingVoteIndex >= 0) {
      const existingVote = cancellationVotes[existingVoteIndex];
      if (existingVote.voteType === voteType) {
        // Remove vote if clicking the same action
        setCancellationVotes(prev => prev.filter(vote => vote.referendumId !== motion.referendumId));
        toast.success(`Vote removed for referendum cancellation`);
      } else {
        // Change vote type
        setCancellationVotes(prev => prev.map(vote =>
          vote.referendumId === motion.referendumId
            ? { ...vote, voteType }
            : vote
        ));
        toast.success(`Vote changed to ${voteType === 'cancel' ? 'cancel' : 'against'} for referendum ${motion.referendumId}`);
      }
    } else {
      // Add new vote
      setCancellationVotes(prev => [...prev, { referendumId: motion.referendumId, voteType }]);
      toast.success(`Successfully voted to ${voteType === 'cancel' ? 'cancel' : 'keep'} referendum ${motion.referendumId}`);
    }
  };

  // const handleCancelReferendum = () => {
  //   // Simulate proposing cancellation motion
  //   const newMotion: CancellationMotion = {
  //     id: `cancel-${Date.now()}`,
  //     referendumId: referendumId!,
  //     referendumTitle: referendum.title,
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

  if (!referendumId) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No referendum selected</p>
        <Button onClick={() => onNavigate('proposals')} className="mt-4">
          View All Referendums
        </Button>
      </div>
    );
  }

  // const convictionMultipliers = ['x2 (2 days)', 'x4 (4 days)', 'x8 (8 days)', 'x16 (16 days)', 'x32 (32 days)'];
  const convictionMultiplier = [1, 5, 11, 21, 34, 52];
  const selectedConviction = conviction[0];
  const votingPower = parseInt(rootAmount || '0') * (convictionMultiplier[selectedConviction] * selectedConviction);

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

  // Get user's vote for cancellation motion
  const userCancellationVote = cancellationVotes.find(vote => vote.referendumId === referendumId);
  const hasVotedToCancel = userCancellationVote?.voteType === 'cancel';
  const hasVotedAgainst = userCancellationVote?.voteType === 'against';

  return (
    <div className="space-y-6">
      {/* Back button */}
      <Button
        variant="ghost"
        onClick={() => onNavigate('proposals-referendums')}
        className="bg-secondary text-muted-foreground hover:text-foreground px-4 py-3 rounded-[10px] flex items-center gap-2"
      >
        <ArrowLeft size={20} />
        All Referendums
      </Button>

      {/* Title */}
      <h1 className="text-foreground text-4xl font-bold">
        {referendum.title} #{referendum.id}
      </h1>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="xl:col-span-2 space-y-6">


          {/* Cancellation Result Banner for Cancelled Referendums */}
          {referendum.status === 'Cancelled' && (
            <div className="bg-gray-500/10 border-2 border-gray-500/20 rounded-2xl p-4">
              <div className="flex items-start gap-3">
                <X size={20} className="text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="space-y-2">
                  <h3 className="text-gray-400 font-bold">Referendum Cancelled</h3>
                  <p className="text-foreground text-sm">
                    This referendum has been cancelled by council vote. Voting is now closed and the proposal will not be enacted.
                  </p>
                  {cancellationMotion && (
                    <div className="text-xs text-muted-foreground">
                      Cancelled with {cancellationMotion.votesFor} out of {cancellationMotion.requiredVotes} required council votes
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Cancellation Motion Progress Tracker - Only for active motions and council members */}
          {cancellationMotion && cancellationMotion.status === 'active' && isCouncilMember && (
            <div className="bg-card rounded-2xl p-5 border-2 border-red-500/20">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-3">
                    <AlertTriangle size={20} className="text-red-400" />
                    <h2 className="text-xl font-bold text-red-400">Cancellation Motion Progress</h2>
                  </div>
                  <Badge className="bg-red-500/20 text-red-400 text-[10px] font-bold uppercase px-1.5 py-0.5 rounded">
                    Council Vote Required
                  </Badge>
                </div>

                {/* Progress */}
                <div className="space-y-3">
                  <div className="flex w-full h-2 rounded-full overflow-hidden bg-border">
                    <div
                      className="bg-red-400 transition-all duration-200"
                      style={{ width: `${(cancellationMotion.votesFor / cancellationMotion.requiredVotes) * 100}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-bold text-foreground">
                          {cancellationMotion.votesFor} / {cancellationMotion.requiredVotes} votes to cancel
                        </span>
                        <span className="text-xs text-muted-foreground">
                          ({cancellationMotion.votesAgainst} against)
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Requires 2/3 majority of council members • Proposed by {cancellationMotion.proposer.name}
                      </p>
                    </div>
                    {timeRemaining && (
                      <div className="flex items-center gap-1">
                        <Clock size={14} className="text-muted-foreground" />
                        <span className="text-sm font-bold text-foreground">
                          {timeRemaining} left
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Council Voting Buttons */}
                <div className="space-y-3 border-t border-border pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle size={16} className="text-amber-400" />
                    <span className="text-sm font-bold text-foreground">Council Vote</span>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      className={`flex-1 h-10 ${hasVotedToCancel ? 'bg-red-500 text-white' : ''}`}
                      variant={hasVotedToCancel ? "default" : "outline"}
                      // onClick={() => handleCancellationVote(cancellationMotion.id, 'cancel')}
                      onClick={() => handleCancellationVote('cancel')}
                    >
                      {hasVotedToCancel ? '✓ Voted to Cancel' : 'Vote to Cancel'}
                    </Button>
                    <Button
                      className={`flex-1 h-10 ${hasVotedAgainst ? 'bg-green-500 text-white' : ''}`}
                      variant={hasVotedAgainst ? "default" : "outline"}
                      // onClick={() => handleCancellationVote(cancellationMotion.id, 'against')}
                      onClick={() => handleCancellationVote('against')}
                    >
                      {hasVotedAgainst ? '✓ Voted Against' : 'Vote Against'}
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    As a council member, you can vote on this cancellation motion. Your vote will be counted toward the 2/3 majority requirement.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Referendum Info Card */}
          <div className="bg-card rounded-2xl p-5">
            <div className="space-y-6">
              {/* Header with meta info */}
              <div className="flex items-start justify-between border-b border-border pb-6">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-foreground font-bold">{referendum.proposer}</span>
                  <span className="text-xs text-muted-foreground">
                    {referendum.status === 'Cancelled' ? 'Cancelled by Council' : `${referendum.daysLeft} left`} | #{referendum.id}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Badge className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${getStatusBadgeClass(referendum.status)}`}>
                    {referendum.status}
                  </Badge>
                  <Badge className="bg-chart-1/20 text-chart-1 text-[10px] font-bold uppercase px-1.5 py-0.5 rounded">
                    {referendum.track}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold mb-4">TL;DR</h2>
                  <p className="text-base text-foreground">
                    {p?.description}
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4">Summary</h2>
                  <div className="space-y-4 text-base text-foreground">
                    <p>
                      {p?.summary}
                    </p>
                  </div>
                </div>

                {/*<div>*/}
                {/*  <h2 className="text-xl font-bold mb-4">Technical Details</h2>*/}
                {/*  <div className="space-y-4 text-base text-foreground">*/}
                {/*    <p>*/}
                {/*      The upgrade has been thoroughly tested on testnet environments and includes backward compatibility measures to ensure smooth transition.*/}
                {/*    </p>*/}
                {/*    <p>*/}
                {/*      Key technical improvements include substrate runtime optimizations, enhanced RPC performance, and improved storage efficiency.*/}
                {/*    </p>*/}
                {/*  </div>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Votes Card */}
          <div className="bg-card rounded-2xl p-5">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Votes</h2>
                <Badge className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${getStatusBadgeClass(referendum.status)}`}>
                  {referendum.status}
                </Badge>
              </div>

              {/* Vote progress - Only show if not cancelled */}
              {referendum.status !== 'Cancelled' && (
                <div className="space-y-3">
                  <div className="flex w-full h-1.5 rounded-full overflow-hidden">
                    <div className="bg-green-400" style={{ width: `${referendum.ayePercentage}%` }} />
                    <div className="bg-red-400" style={{ width: `${referendum.nayPercentage}%` }} />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-1">
                      <ArrowUp size={16} className="text-green-400" />
                      <span className="text-xs text-muted-foreground font-bold">{referendum.ayePercentage}% Aye</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ArrowDown size={16} className="text-red-400" />
                      <span className="text-xs text-muted-foreground font-bold">{referendum.nayPercentage}% Nay</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Cancelled referendum message */}
              {referendum.status === 'Cancelled' && (
                <div className="bg-gray-500/10 rounded-lg p-3 border border-gray-500/20">
                  <p className="text-sm text-gray-400 text-center">
                    Voting was closed when this referendum was cancelled by council vote.
                  </p>
                </div>
              )}

              <Button
                variant="outline"
                onClick={() => setShowVotingHistory(true)}
                className="bg-secondary text-secondary-foreground border-2 border-border rounded-full w-full py-3 hover:bg-secondary/80"
              >
                Check votes
              </Button>
            </div>
          </div>

          {/* Cancel Referendum Button - Council Members Only, Active Referendums Only */}
          {/*{isCouncilMember && referendum.status === 'Active' && !cancellationMotion && (*/}
          {/*  <div className="bg-card rounded-2xl p-5">*/}
          {/*    <div className="space-y-4">*/}
          {/*      <div className="flex items-center gap-2">*/}
          {/*        <AlertTriangle size={16} className="text-red-400" />*/}
          {/*        <h2 className="text-xl font-bold">Council Actions</h2>*/}
          {/*      </div>*/}
          {/*      <p className="text-sm text-muted-foreground">*/}
          {/*        As a council member, you can propose to cancel this referendum.*/}
          {/*      </p>*/}
          {/*      <Button*/}
          {/*        onClick={() => setShowCancelModal(true)}*/}
          {/*        variant="outline"*/}
          {/*        className="w-full bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20"*/}
          {/*      >*/}
          {/*        <AlertTriangle size={16} className="mr-2" />*/}
          {/*        Cancel Referendum*/}
          {/*      </Button>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*)}*/}

          {/* Cast Vote Card - Only show if referendum is active (not cancelled) */}
          {referendum.status === 'Active' && (
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
                {cancellationMotion?.status === 'active' && (
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <AlertTriangle size={14} className="text-amber-400 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-amber-400">
                        This referendum may be cancelled by council vote. Your vote will remain valid unless cancelled.
                      </p>
                    </div>
                  </div>
                )}

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
                <Select
                    value={account}
                    onValueChange={(value) => { setAccount(value) }}
                >
                  <SelectTrigger className="bg-input-background border-border text-foreground">
                    <SelectValue placeholder="Account">
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
                {/* Vote direction - Only for logged in users */}
                {userSession && (
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
                {userSession && (
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
                {userSession && (
                  <div className="space-y-3">
                    <label className="text-xs text-muted-foreground">
                      Set Conviction
                    </label>
                    <div className="space-y-3">
                      <Slider
                        value={conviction}
                        onValueChange={setConviction}
                        max={6}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>x0 (0 week)</span>
                        {/*<span>x1 (1 week)</span>*/}
                        {/*<span>x2 (5 weeks)</span>*/}
                        {/*<span>x3 (11 weeks)</span>*/}
                        {/*<span>x4 (21 weeks)</span>*/}
                        {/*<span>x5 (34 weeks)</span>*/}
                        <span>x6 (52 weeks)</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Submit button - Different for logged in vs logged out users */}
                {userSession ? (
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
                {userSession && existingVote && (
                  <Button
                    onClick={() => {
                      setExistingVote(null);
                      toast.success('Vote removed successfully');
                    }}
                    variant="outline"
                    className="bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20 w-full rounded-full py-3"
                  >
                    Remove Vote
                  </Button>
                )}
              </div>
            </div>
          )}

          {/* Cancelled Referendum Notice - Show instead of voting section */}
          {referendum.status === 'Cancelled' && (
            <div className="bg-card rounded-2xl p-5">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <X size={16} className="text-gray-400" />
                  <h2 className="text-xl font-bold text-gray-400">Voting Closed</h2>
                </div>
                <div className="bg-gray-500/10 rounded-lg p-4 border border-gray-500/20">
                  <p className="text-sm text-gray-400 text-center">
                    This referendum has been cancelled by council vote. Voting is no longer available.
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
              Cancel Referendum
            </DialogTitle>
            <DialogDescription>
              This action will propose cancellation of this referendum. It requires a 2/3 majority of council members to pass.
              If approved, this referendum will be cancelled and removed from voting.
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

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowCancelModal(false)}>
              Cancel
            </Button>
            <Button
              // onClick={handleCancelReferendum}
              className="bg-red-500 text-white hover:bg-red-600"
            >
              <AlertTriangle size={16} className="mr-2" />
              Confirm Cancel Motion
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Voting History Modal */}
      <VotingHistoryModal
        referendum={referendum}
        isOpen={showVotingHistory}
        onClose={() => setShowVotingHistory(false)}
      />
    </div>
  );
}
