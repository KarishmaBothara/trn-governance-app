import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
// import { motion, AnimatePresence } from 'motion/react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Slider } from './ui/slider';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { useUser } from './UserContext';
import { ConnectWalletButton } from './ConnectWalletButton';
import Root from '../imports/Root-99-709';

interface VotingModalProps {
  isOpen: boolean;
  onClose: () => void;
  proposal: any;
}

const convictionMultipliers = [
  { value: 'none', label: 'None (0.1x)', multiplier: 0.1, lockPeriod: 0 },
  { value: '1x', label: '1x', multiplier: 1, lockPeriod: 7 },
  { value: '2x', label: '2x', multiplier: 2, lockPeriod: 14 },
  { value: '3x', label: '3x', multiplier: 3, lockPeriod: 28 },
  { value: '4x', label: '4x', multiplier: 4, lockPeriod: 56 },
  { value: '5x', label: '5x', multiplier: 5, lockPeriod: 112 },
  { value: '6x', label: '6x', multiplier: 6, lockPeriod: 224 },
];

export function VotingModal({ isOpen, onClose, proposal }: VotingModalProps) {
  const { isLoggedIn } = useUser();
  const [voteDirection, setVoteDirection] = useState<'aye' | 'nay' | null>(null);
  const [stakeAmount, setStakeAmount] = useState([1000]);
  const [conviction, setConviction] = useState('1x');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const selectedConviction = convictionMultipliers.find(c => c.value === conviction)!;
  const votingPower = stakeAmount[0] * selectedConviction.multiplier;
  const estimatedFee = 0.1;

  const handleSubmit = async () => {
    if (!voteDirection) return;

    setIsSubmitting(true);

    // Simulate transaction
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitted(true);

    // Show success toast
    toast.success(`Vote ${voteDirection.toUpperCase()} submitted!`, {
      description: `Your ${voteDirection} vote with ${votingPower.toLocaleString()} voting power has been recorded on proposal #${proposal.id}.`,
      duration: 5000,
    });

    // Close modal after showing success
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setVoteDirection(null);
      setStakeAmount([1000]);
      setConviction('1x');
    }, 3000);
  };

  if (submitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="bg-card border-0 text-foreground">
          <DialogTitle className="sr-only">Vote Submitted Successfully</DialogTitle>
          <DialogDescription className="sr-only">
            Your vote has been successfully submitted and recorded on-chain.
          </DialogDescription>
          <div className="text-center space-y-4 py-6">
            <CheckCircle size={48} className="text-chart-5 mx-auto" />
            <div>
              <h3 className="text-foreground text-xl">Vote Submitted!</h3>
              <p className="text-muted-foreground mt-2">
                Your {voteDirection} vote has been recorded on-chain
              </p>
            </div>
            <div className="bg-card rounded-lg p-4 text-sm">
              <p className="text-muted-foreground">Transaction Hash:</p>
              <p className="text-foreground font-mono text-xs mt-1">
                0x1234567890abcdef1234567890abcdef12345678
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card border-0 text-foreground">
        <DialogHeader>
          <DialogTitle>Vote on Proposal #{proposal.id}</DialogTitle>
          <DialogDescription>
            Cast your vote on this governance proposal by selecting your vote direction, stake amount, and conviction multiplier.
          </DialogDescription>
        </DialogHeader>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Proposal Summary */}
          <div className="bg-card rounded-lg p-4">
            <h4 className="text-foreground mb-2">{proposal.title}</h4>
            <div className="flex items-center gap-2">
              <Badge className="bg-chart-1/20 text-chart-1 text-xs">
                {proposal.track}
              </Badge>
              <span className="text-sm text-muted-foreground">
                {proposal.votes.turnout}% turnout
              </span>
            </div>
          </div>

          {/* Vote Direction */}
          <div className="space-y-3">
            <Label>Your Vote</Label>
            <div className="flex gap-3">
              <Button
                variant={voteDirection === 'aye' ? 'default' : 'outline'}
                onClick={() => setVoteDirection('aye')}
                className={`flex-1 ${voteDirection === 'aye' ? 'bg-chart-5 hover:bg-chart-5/80' : ''}`}
              >
                Aye (Support)
              </Button>
              <Button
                variant={voteDirection === 'nay' ? 'default' : 'outline'}
                onClick={() => setVoteDirection('nay')}
                className={`flex-1 ${voteDirection === 'nay' ? 'bg-destructive hover:bg-destructive/80' : ''}`}
              >
                Nay (Oppose)
              </Button>
            </div>
          </div>

          {/* Stake Amount */}
          <div className="space-y-3">
            <div className="flex justify-between">
              <Label>Stake Amount</Label>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                Balance: 10,000 <span className="inline-block w-3 h-3"><Root /></span>
              </span>
            </div>
            <Slider
              value={stakeAmount}
              onValueChange={setStakeAmount}
              max={10000}
              min={100}
              step={100}
              className="w-full"
            />
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground flex items-center gap-1">100 <span className="inline-block w-3 h-3"><Root /></span></span>
              <span className="text-foreground font-medium flex items-center gap-1">
                {stakeAmount[0].toLocaleString()} <span className="inline-block w-3 h-3"><Root /></span>
              </span>
              <span className="text-muted-foreground flex items-center gap-1">10,000 <span className="inline-block w-3 h-3"><Root /></span></span>
            </div>
          </div>

          {/* Conviction */}
          <div className="space-y-3">
            <Label>Conviction Multiplier</Label>
            <Select value={conviction} onValueChange={setConviction}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {convictionMultipliers.map((conv) => (
                  <SelectItem key={conv.value} value={conv.value}>
                    <div className="flex justify-between w-full">
                      <span>{conv.label}</span>
                      {conv.lockPeriod > 0 && (
                        <span className="text-muted-foreground text-xs ml-4">
                          {conv.lockPeriod} days lock
                        </span>
                      )}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="text-sm text-muted-foreground">
              {selectedConviction.lockPeriod > 0
                ? `Your tokens will be locked for ${selectedConviction.lockPeriod} days after the proposal ends`
                : 'No lock period, but reduced voting power'
              }
            </div>
          </div>

          <Separator />

          {/* Voting Summary */}
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Stake:</span>
              <span className="text-foreground flex items-center gap-1">{stakeAmount[0].toLocaleString()} <span className="inline-block w-3 h-3"><Root /></span></span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Multiplier:</span>
              <span className="text-foreground">{selectedConviction.multiplier}x</span>
            </div>
            <div className="flex justify-between font-medium">
              <span className="text-foreground">Voting Power:</span>
              <span className="text-foreground flex items-center gap-1">{votingPower.toLocaleString()} <span className="inline-block w-3 h-3"><Root /></span></span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Transaction Fee:</span>
              <span className="text-foreground flex items-center gap-1">{estimatedFee} <span className="inline-block w-3 h-3"><Root /></span></span>
            </div>
          </div>

          {/* Warning */}
          {selectedConviction.lockPeriod > 0 && (
            <div className="flex gap-3 p-3 bg-chart-3/10 border border-chart-3/20 rounded-lg">
              <AlertCircle size={20} className="text-chart-3 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="text-foreground font-medium">Conviction voting locks your tokens</p>
                <p className="text-muted-foreground flex items-center gap-1">
                  Your {stakeAmount[0].toLocaleString()} <span className="inline-block w-3 h-3"><Root /></span> will be locked for {selectedConviction.lockPeriod} days
                </p>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            {isLoggedIn ? (
              <Button
                onClick={handleSubmit}
                disabled={!voteDirection || isSubmitting}
                className={`flex-1 ${
                  voteDirection === 'aye' 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : voteDirection === 'nay'
                    ? 'bg-red-600 hover:bg-red-700'
                    : ''
                }`}
              >
                {isSubmitting ? 'Submitting...' : `Vote ${voteDirection?.toUpperCase() || ''}`}
              </Button>
            ) : (
              <ConnectWalletButton className="flex-1" />
            )}
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
