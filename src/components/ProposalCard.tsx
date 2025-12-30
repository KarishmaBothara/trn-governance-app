import { Badge } from './ui/badge';
// import { ArrowUp, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
import {Button} from "@/components/ui/button";
import {useCouncilMembers} from "@/hooks/useCouncilMembers";
import {useEffect, useState} from "react";
import {useAuth} from "@futureverse/auth-react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useSigner} from "@/hooks/useSigner";
import {useCustomExtrinsicBuilder} from "@/hooks/useCustomExtrinsicBuilder";
import {useTrnApi} from "@futureverse/transact-react";
import {toast} from "sonner";
import {truncateAddress} from "@/lib/utils";

export interface Proposal {
  id: string;
  title: string;
  status: 'queued' | 'active' | 'passed' | 'rejected' | 'fast-tracked' | 'Cancelled' | 'Active';
  track: string;
  aye: number;
  nay: number;
  daysLeft: number;
  proposer: string;
  proposerAvatar?: string;
  preimage: string;
  description: string;
  summary: string;
  link: string;
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
  const { data: councilMembers } = useCouncilMembers();
  const [, setIsCouncilMember] = useState(false);
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
  const [account, setAccount] = useState<string>('EOA');
  const accountType = {
    'FPass': { label: 'FPass', description: 'Use futurepass address' },
    'EOA': { label: 'EOA', description: 'Use eoa address' },
  };

  useEffect(() => {
    if (councilMembers && eoa && fpass) {
      const selectedAccount = account === 'FPass' ? fpass : eoa;
      const exist = councilMembers.find((cm: any) => cm.address.toLowerCase() === selectedAccount.toLowerCase())
      if (exist) {
        setIsCouncilMember(true);
      }
    }
  }, [councilMembers, eoa, fpass, account]);

  const endorse = async () => {
      // Handle submission
      if (!signer || !userSession || !trnApi || !builder) return;
      const extrinsic = trnApi.tx.democracy.second(proposal.id);

      const tx = account === 'FPass' ? await builder
          .fromExtrinsic(extrinsic)
          .addFuturePass(userSession.futurepass) : await builder.fromExtrinsic(extrinsic);

      const res = await tx.signAndSend({
        onSign: () => {
          toast.info('Signing', {
            description: `You endorsed proposal "${proposal.title}" has been submitted.`,
            duration: 5000,
          });
        },
        onSend: async () => {
        }
      });
      // const { extrinsicId, transactionHash, result } = res;
    const { result } = res;
      const event = result?.events.find((event) => {
            return event.event.section === "democracy" && event.event.method === "Seconded";
      });
      if(event) {
        toast.success('Endorsement submitted successfully!', {
          description: `Your proposal "${proposal.title}" has been submitted successfully.`,
          duration: 5000,
        });
      } else {
        toast.info('Endorsement submission failed!');
      }

  };

  // const cancelProposal = async () => {
  //   // Handle submission
  //   if (!signer || !userSession || !trnApi || !builder) return;
  //   const extrinsic = trnApi.tx.democracy.cancelProposal(proposal.id);
  //
  //   const tx = account === 'FPass' ? await builder
  //       .fromExtrinsic(extrinsic)
  //       .addFuturePass(userSession.futurepass) : await builder.fromExtrinsic(extrinsic);
  //
  //   const res = await tx.signAndSend({
  //     onSign: () => {
  //       toast.info('Signing', {
  //         description: `You proposal "${proposal.title}" cancelation request has been submitted.`,
  //         duration: 5000,
  //       });
  //     },
  //     onSend: async () => {
  //     }
  //   });
  //   const { extrinsicId, transactionHash, result } = res;
  //   const event = result?.events.find((event) => {
  //     return event.event.section === "democracy" && event.event.method === "Seconded";
  //   });
  //   if(event) {
  //     toast.success('Proposal canceled successfully!', {
  //       description: `Your proposal "${proposal.title}" has been canceled successfully.`,
  //       duration: 5000,
  //     });
  //   } else {
  //     toast.info('Proposal cancelation failed!');
  //   }
  //
  // };

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
              #{proposal.id}
            </Badge>
          </div>
          {/*<div className="hidden sm:block text-xs text-muted-foreground font-bold">*/}
          {/*  {proposal.daysLeft} days left | #{proposal.id}*/}
          {/*</div>*/}
        </div>

        {/* Title */}
        <h3 className="text-foreground">{proposal.title}</h3>
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

        {/* Vote breakdown and proposer */}
        <div className="flex items-start justify-between">
          <div className="flex gap-4">


            {/*<div className="flex items-center gap-1">*/}
            {/*  <ArrowUp size={14} className="text-green-400" />*/}
            {/*  <span className="text-xs text-muted-foreground font-bold">{proposal.aye}% Aye</span>*/}
            {/*</div>*/}
            {/*<div className="flex items-center gap-1">*/}
            {/*  <ArrowDown size={14} className="text-red-400" />*/}
            {/*  <span className="text-xs text-muted-foreground font-bold">{proposal.nay}% Nay</span>*/}
            {/*</div>*/}
          </div>
          <div className="flex items-start gap-3">
            <Button
                onClick={endorse}
                disabled={proposal.status == "rejected"}
            >
              Endorse
            </Button>
            {/*<Button*/}
            {/*    disabled={!isCouncilMember || (proposal.status == "rejected") }*/}
            {/*    onClick={cancelProposal}*/}
            {/*>*/}
            {/* Cancel Proposal*/}
            {/*</Button>*/}
            {proposal.proposerAvatar && (
              <div
                className="w-5 h-5 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(${proposal.proposerAvatar})` }}
              />
            )}
            <span className="text-xs text-muted-foreground font-bold">{truncateAddress(proposal.proposer.toString())}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
