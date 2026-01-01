import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { ConnectWalletButton } from './ConnectWalletButton';
import {useSigner} from "@/hooks/useSigner";
import {useCustomExtrinsicBuilder} from "@/hooks/useCustomExtrinsicBuilder";
import {useAuth} from "@futureverse/auth-react";
import {useTrnApi} from "@futureverse/transact-react";
import * as React from "react";
import { toast } from 'sonner';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
interface Delegate {
  id: string;
  name: string;
  address: string;
  avatar?: string;
  votingPower: number;
  totalDelegators: number;
  participation: number;
  description: string;
  socialLinks: {
    discord?: string;
    twitter?: string;
  };
  tracks: string[];
  votingHistory: Array<{
    proposalId: string;
    title: string;
    date: string;
    vote: 'aye' | 'nay';
  }>;
}

interface DelegateVotingModalProps {
  isOpen: boolean;
  onClose: () => void;
  delegate: Delegate | null;
}

export function DelegateVotingModal({ isOpen, onClose, delegate }: DelegateVotingModalProps) {
  const [delegateAddress, setDelegateAddress] = useState(delegate?.address);
  const [rootAmount, setRootAmount] = useState('200');
  const [account, setAccount] = useState<string>('EOA');
  // const [conviction, setConviction] = useState([2]); // 0-4 range for conviction slider
  const { userSession } = useAuth();
  const signer = useSigner();
  const { trnApi } = useTrnApi();
  const builder = useCustomExtrinsicBuilder({
        signer,
        walletAddress: userSession?.eoa ?? "",
        trnApi,
    });
  const accountType = {
    'FPass': { label: 'FPass', description: 'Use futurepass address' },
    'EOA': { label: 'EOA', description: 'Use eoa address' },
  };
  // const convictionLabels = ['x2 (2 days)', 'x4 (4 days)', 'x8 (8 days)', 'x16 (16 days)', 'x32 (32 days)'];
  // const votingPower = parseInt(rootAmount || '0') * Math.pow(2, conviction[0] + 1); // x2 to x32

  const handleSubmit = async () => {
    // Handle delegation submission
      // const convictionMultipliers = ['x2 (2 days)', 'x4 (4 days)', 'x8 (8 days)', 'x16 (16 days)', 'x32 (32 days)'];

    if (!trnApi || !builder || !userSession) return;

    const extrinsic = trnApi.tx.democracy.delegate(delegateAddress, rootAmount);

    const tx = account === 'FPass' ? await builder
        .fromExtrinsic(extrinsic)
        .addFuturePass(userSession.futurepass) : await builder.fromExtrinsic(extrinsic);


    const res = await tx.signAndSend({
      onSign: () => {
        // setTxStatus("signing");
        toast.success(
            <div className="space-y-2">
              <div className="font-medium">
                {'Delegate submitted successfully!'}
              </div>
            </div>,
            {
              duration: 6000,
            }
        );
      },
      onSend: async () => {
      }
    });
    const { result } = res;
    const event = result?.events.find((event) => {

      return event.event.section === "democracy" && event.event.method === "Delegated";
    });
   if (event) {
     toast.success(
         <div className="space-y-2">
           <div className="font-medium">
             {`Delegate ${delegate?.name} added successfully!`}
           </div>
         </div>,
         {
           duration: 6000,
         }
     );
   }
   onClose();
  };

  if (!delegate) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card border-0 text-foreground p-0 gap-0 overflow-hidden flex flex-col">
        <DialogTitle className="sr-only">
          Delegate your votes to {delegate.name}
        </DialogTitle>
        <DialogDescription className="sr-only">
          Configure your delegation settings including delegate address, root amount, and conviction multiplier.
        </DialogDescription>

        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-border flex-shrink-0">
          <h2 className="text-foreground font-medium text-xl">Delegate your votes</h2>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">
          {/* Description */}
          <p className="text-foreground">
            Delegate your voting power to a trusted community member for a specific governance track
          </p>

          {/* Delegate Address */}
          <div className="space-y-1">
            <Label className="text-sm text-muted-foreground">Delegates address</Label>
            <div className="bg-input-background border border-border rounded-xl p-4">
              <Input
                value={delegateAddress}
                onChange={(e) => setDelegateAddress(e.target.value)}
                className="bg-transparent border-0 p-0 text-muted-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0"
                placeholder={delegate.address}
              />
            </div>
          </div>


            <div className="space-y-3">
              <label className="text-sm text-foreground">
                Account type
              </label>
              <Select
                  value={account}
                  onValueChange={(value) => { setAccount(value) }}
              >
                <SelectTrigger className="bg-input-background border-border text-foreground">
                  <SelectValue placeholder="Choose proposal type">
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
            </div>

          {/* Root Amount */}
          <div className="space-y-1">
            <Label className="text-sm text-muted-foreground">Select root amount</Label>
            <div className="bg-input-background border border-border rounded-xl p-4">
              <Input
                value={rootAmount}
                onChange={(e) => setRootAmount(e.target.value)}
                className="bg-transparent border-0 p-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0"
                placeholder="Enter root amount"
              />
            </div>
          </div>

          {/* Conviction Slider */}
          {/*<div className="space-y-3">*/}
          {/*  <Label className="text-sm text-muted-foreground">Set Conviction</Label>*/}
          {/*  <div className="space-y-3">*/}
          {/*    <div className="px-3">*/}
          {/*      <Slider*/}
          {/*        value={conviction}*/}
          {/*        onValueChange={setConviction}*/}
          {/*        max={6}*/}
          {/*        min={1}*/}
          {/*        step={1}*/}
          {/*        className="w-full"*/}
          {/*      />*/}
          {/*    </div>*/}
          {/*    <div className="flex justify-between text-xs text-muted-foreground px-3">*/}
          {/*      <span>x2 (2 days)</span>*/}
          {/*      <span>x32 (32 days)</span>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/* Submit Button */}
          {userSession ? (
            <Button
              onClick={handleSubmit}
              className="bg-primary text-primary-foreground w-full rounded-[1000px] py-3 font-bold"
            >
              Submit Votes
            </Button>
          ) : (
            <ConnectWalletButton className="w-full rounded-[1000px] py-3" />
          )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
