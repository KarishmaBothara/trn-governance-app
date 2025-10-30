import { useState } from 'react';
import { Button } from '../ui/button';
import { ProposeMotionFlow } from '../ProposeMotionFlow';
import { VoteForCouncilModal } from '../VoteForCouncilModal';
import { ResignSeatModal } from '../ResignSeatModal';
import { CouncilorDetailModal } from '../CouncilorDetailModal';
import { CancellationMotionCard } from '../council/CancellationMotionCard';
import { toast } from 'sonner';
import {
  CouncilProps,
  CouncilTab,
  MotionStatus,
  VoteType,
  CouncilMember,
  UserVote,
  CancellationVote,
  CancellationVoteType
} from '../council/types';
import { mockMotions, mockCouncilMembers, mockCancellationMotions } from '../council/mockData';
import { MotionCard } from '../council/MotionCard';
import { CouncilMemberCard } from '../council/CouncilMemberCard';
import { useTrnApi } from "@futureverse/transact-react";
import { useCouncilMembers } from "@/hooks/useCouncilMembers";
import {useCouncilProposals} from "@/hooks/useCouncilProposals";
import {useEffect} from "react";
import {useAuth} from "@futureverse/auth-react";
import {useSigner} from "@/hooks/useSigner";
import {useCustomExtrinsicBuilder} from "@/hooks/useCustomExtrinsicBuilder";
import {useWeight} from "@/hooks/useWeight";
import {closeVote, vote} from "@/lib/utils";
import {ProposalType} from "../../../generated/prisma";
import {useOldCouncilProposal} from "@/hooks/useOldCouncilProposal";

export function Council({ onNavigate, onSelectProposal, onSelectMotion, setIfCouncilMember }: CouncilProps) {
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
  // const { isCouncilMember, isLoggedIn } = useUser();
  const [isCouncilMember, setIsCouncilMember] = useState(false);
  const [activeTab, setActiveTab] = useState<CouncilTab>('overview');
  const [activeMotionStatus, setActiveMotionStatus] = useState<MotionStatus>('proposed');
  const [showVoteModal, setShowVoteModal] = useState(false);
  const [showResignModal, setShowResignModal] = useState(false);
  const [selectedCouncilor, setSelectedCouncilor] = useState<CouncilMember | null>(null);
  const [showCouncilorModal, setShowCouncilorModal] = useState(false);
  const [userVotes, setUserVotes] = useState<UserVote[]>([]);
  const [cancellationVotes, setCancellationVotes] = useState<CancellationVote[]>([]);
  const { data: councilMembers } = useCouncilMembers();
  const { data: proposalDBInfo } = useCouncilProposals();
  const { data: oldProposals } = useOldCouncilProposal();

  console.log("Inside council............", proposalDBInfo);

  // Redirect non-council members away from propose tab
  if (activeTab === 'propose' && !isCouncilMember) {
    setActiveTab('overview');
  }

  useEffect(() => {
    if (councilMembers && eoa && fpass) {
      const exist = councilMembers.find(cm => cm.address.toLowerCase() === eoa.toLowerCase() || cm.address.toLowerCase() === fpass.toLowerCase())
      if (exist) {
        setIsCouncilMember(true);
      }
    }
  }, [councilMembers, eoa, fpass]);


  const handleVote = async (motion: any, aye: boolean, accountType: string) => {
    if (!signer || !userSession || !trnApi || !builder) return;
    const extrinsic = trnApi.tx.council.vote(motion.hash || motion.preimage, motion?.idx, aye);

    const tx = accountType === 'FPass' ? await builder
        .fromExtrinsic(extrinsic)
        .addFuturePass(userSession.futurepass) : await builder.fromExtrinsic(extrinsic);

    const status = await vote(tx, toast, motion.id);

    if (status) {
      toast.success('Proposal voted successfully!', {
        description: `Your proposal "${motion.title}" has been updated with votes.`,
        duration: 5000,
      });
    } else {
      toast.success('Proposal vote unsuccessful!', {
        description: `Your proposal voting did not complete`,
        duration: 5000,
      });
    }
    // Navigate back to proposals page
    setTimeout(() => {
      if (motion.type === ProposalType.Democracy) {
        onNavigate('proposals');
      } else {
        onNavigate('council');
      }
    }, 1000);

    }

  const handleCloseVote = async (motion: any, encodedCallLength: number, weight: any, voteType: VoteType, accountType: string) => {
    if (!signer || !userSession || !trnApi || !builder) return;
    const extrinsic = trnApi.tx.council.close(motion.hash || motion.preimage, motion?.idx, weight, encodedCallLength);

    const tx = accountType === 'FPass' ? await builder
      .fromExtrinsic(extrinsic)
      .addFuturePass(userSession.futurepass) : await builder.fromExtrinsic(extrinsic);

    const status = await closeVote(tx, toast, motion.id);

    if (status) {
      toast.success('Proposal closed successfully!', {
        description: `Your proposal "${motion.title}" has been closed and ${status}.`,
        duration: 5000,
      });
    } else {
      toast.success('Proposal closure unsuccessful!', {
        description: `Your proposal "${motion.title}" has been closed and ${status}.`,
        duration: 5000,
      });
    }
    // Navigate back to proposals page
    setTimeout(() => {
      if (motion.type === ProposalType.Democracy) {
        onNavigate('proposals');
      } else {
        onNavigate('council');
      }
    }, 1000);

  };

  const handleCancellationVote = (motionId: string, voteType: CancellationVoteType) => {
    // Find the motion to get referendum ID
    const motion = mockCancellationMotions.find(m => m.id === motionId);
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

  if (activeTab === 'propose' && isCouncilMember) {
    return (
      <div className="space-y-8">
        {/* Header Navigation */}
        <div className="space-y-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-foreground">Council</h1>
              <p className="text-muted-foreground mt-1">
                Overview of your governance participation and token management
              </p>
            </div>
            <div className="flex items-center gap-4">
              {userSession && (
                <Button
                  onClick={() => setShowVoteModal(true)}
                >
                  Vote for council
                </Button>
              )}
              {isCouncilMember && (
                <Button
                  onClick={() => setShowResignModal(true)}
                  variant="outline"
                >
                  Resign seat
                </Button>
              )}
            </div>
          </div>

          {/* Main Tabs */}
          <div className="border-b border-border">
            <div className="flex gap-4 md:gap-8 overflow-x-auto scrollbar-hide">
              <Button
                variant="ghost"
                onClick={() => setActiveTab('overview')}
                className={`pb-2 text-sm font-medium border-b-2 rounded-none transition-colors hover:bg-transparent ${
                  activeTab} === 'overview'
                    ? 'text-foreground border-primary'
                    : 'text-muted-foreground border-transparent hover:text-foreground'
                `}
              >
                Council overview
              </Button>
              <Button
                variant="ghost"
                onClick={() => setActiveTab('pipeline')}
                className={`pb-2 text-sm font-medium border-b-2 rounded-none transition-colors hover:bg-transparent ${
                  activeTab} === 'pipeline'
                    ? 'text-foreground border-primary'
                    : 'text-muted-foreground border-transparent hover:text-foreground'
                `}
              >
                Motion pipeline
              </Button>
              {isCouncilMember && (
                <Button
                  variant="ghost"
                  onClick={() => setActiveTab('propose')}
                  className={`pb-2 text-sm font-medium border-b-2 rounded-none transition-colors hover:bg-transparent ${
                    activeTab === 'propose'
                      ? 'text-foreground border-primary'
                      : 'text-muted-foreground border-transparent hover:text-foreground'
                  }`}
                >
                  Propose motion
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Propose Motion Content */}
        <ProposeMotionFlow
          onNavigate={onNavigate || (() => {})}
          onComplete={() => setActiveTab('pipeline')}
        />

        {/* Modals */}
        <VoteForCouncilModal
          isOpen={showVoteModal}
          onClose={() => setShowVoteModal(false)}
        />
        <ResignSeatModal
          isOpen={showResignModal}
          onClose={() => setShowResignModal(false)}
        />
      </div>
    );
  }

  const filteredMotions = proposalDBInfo?.filter(p => p.id !== undefined && p.status === "Processing");//mockMotions.filter(motion => motion.status === activeMotionStatus);
  console.log('filteredMotions::',filteredMotions);
  // const activeCancellationMotions = mockCancellationMotions.filter(motion => motion.status === 'active');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-foreground">Council</h1>
            <p className="text-muted-foreground mt-1">
              Overview of your governance participation and token management
            </p>
          </div>
          <div className="flex items-center gap-4">
            {userSession && (
              <Button
                onClick={() => onNavigate('elections')}
              >
                Vote for council
              </Button>
            )}
            {isCouncilMember && (
              <Button
                onClick={() => setShowResignModal(true)}
                variant="outline"
              >
                Resign seat
              </Button>
            )}
          </div>
        </div>

        {/* Main Tabs */}
        <div className="border-b border-border">
          <div className="flex gap-8">
            <Button
              variant="ghost"
              onClick={() => setActiveTab('overview')}
              className={`pb-2 text-sm font-medium border-b-2 rounded-none transition-colors hover:bg-transparent ${
                activeTab === 'overview'
                  ? 'text-foreground border-primary'
                  : 'text-muted-foreground border-transparent hover:text-foreground'
              }`}
            >
              Council overview
            </Button>
            <Button
              variant="ghost"
              onClick={() => setActiveTab('pipeline')}
              className={`pb-2 text-sm font-medium border-b-2 rounded-none transition-colors hover:bg-transparent ${
                activeTab === 'pipeline'
                  ? 'text-foreground border-primary'
                  : 'text-muted-foreground border-transparent hover:text-foreground'
              }`}
            >
              Motion pipeline
            </Button>
            {isCouncilMember && (
              <Button
                variant="ghost"
                onClick={() => setActiveTab('propose')}
                className={`pb-2 text-sm font-medium border-b-2 rounded-none transition-colors hover:bg-transparent ${
                  activeTab === 'propose'
                    ? 'text-foreground border-primary'
                    : 'text-muted-foreground border-transparent hover:text-foreground'
                }`}
              >
                Propose motion
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Stats Cards */}
          <div className="bg-card rounded-2xl p-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-card border border-border rounded-xl p-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Number of seats</p>
                  <p className="text-xl md:text-2xl font-semibold text-foreground">5</p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Total members</p>
                  <p className="text-xl md:text-2xl font-semibold text-foreground">5</p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Active motions</p>
                  <p className="text-xl md:text-2xl font-semibold text-foreground">8</p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Total voting power</p>
                  <p className="text-xl md:text-2xl font-semibold text-foreground">2.6M</p>
                </div>
              </div>
            </div>
          </div>

          {/* Council Members Grid */}
          <div className="space-y-4">
            <h2 className="text-foreground">Council Members</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {councilMembers && councilMembers.map((member) => (
                <CouncilMemberCard
                  key={member.id}
                  member={member}
                  onCouncilorClick={(member) => {
                    setSelectedCouncilor(member);
                    setShowCouncilorModal(true);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'pipeline' && (
        <div className="space-y-8">
          {/* Active Cancellation Motions Section - Council Members Only */}
          {oldProposals &&
              oldProposals.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-foreground">Closed Motions</h2>
                <div className="text-sm text-muted-foreground">
                  {oldProposals.length} referendum{oldProposals.length !== 1 ? 's' : ''} under cancellation review
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {oldProposals.map((motion) => (
                  <CancellationMotionCard
                    key={motion.id}
                    motion={motion}
                    userVotes={cancellationVotes}
                    onVote={handleCancellationVote}
                    isCouncilMember={isCouncilMember}
                    onNavigate={onNavigate}
                    onSelectProposal={onSelectProposal}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Council Motions Section */}
          <h2 className="text-foreground">Council Motions</h2>

          {/* Motion Status Tabs */}
          <div className="border-b border-border">
            <div className="flex gap-8">
              {(['proposed', 'voting', 'passed', 'rejected'] as MotionStatus[]).map((status) => (
                <Button
                  key={status}
                  variant="ghost"
                  onClick={() => setActiveMotionStatus(status)}
                  className={`pb-2 text-sm font-medium border-b-2 rounded-none transition-colors hover:bg-transparent capitalize ${
                    activeMotionStatus === status
                      ? 'text-foreground border-primary'
                      : 'text-muted-foreground border-transparent hover:text-foreground'
                  }`}
                >
                  {status}
                </Button>
              ))}
            </div>
          </div>

          {/* Motions Grid */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredMotions && filteredMotions.map((motion) => (
                <MotionCard
                  key={motion.id}
                  motion={motion}
                  userVotes={userVotes}
                  onClose={handleCloseVote}
                  onVote={handleVote}
                  isCouncilMember={isCouncilMember}
                  onNavigate={onNavigate}
                  onSelectMotion={onSelectMotion}
                  setIfCouncilMember={setIfCouncilMember}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      <VoteForCouncilModal
        isOpen={showVoteModal}
        onClose={() => setShowVoteModal(false)}
      />
      <ResignSeatModal
        isOpen={showResignModal}
        onClose={() => setShowResignModal(false)}
      />
      <CouncilorDetailModal
        isOpen={showCouncilorModal}
        onClose={() => setShowCouncilorModal(false)}
        councilor={selectedCouncilor as any}
        onNavigate={onNavigate}
        onSelectProposal={onSelectProposal}
      />
    </div>
  );
}
