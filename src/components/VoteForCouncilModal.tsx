import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
// import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Label } from './ui/label';
import { Vote } from 'lucide-react';
import { useUser } from './UserContext';
import { ConnectWalletButton } from './ConnectWalletButton';

interface VoteForCouncilModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VoteForCouncilModal({ isOpen, onClose }: VoteForCouncilModalProps) {
  const { isLoggedIn } = useUser();
  const [formData, setFormData] = useState({
    stake: '',
    manifesto: '',
    discordHandle: '',
    twitterHandle: '',
  });

  const handleSubmit = () => {
    // Handle submission logic here
    onClose();
  };

  const canSubmit = formData.stake && formData.manifesto;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card border-0 text-foreground p-0 gap-0 overflow-hidden flex flex-col">
        <DialogTitle className="sr-only">
          Vote for Council - Submit Candidacy
        </DialogTitle>
        <DialogDescription className="sr-only">
          Submit your candidacy to join the council. Complete the form below to stake your tokens and provide your manifesto for community consideration.
        </DialogDescription>

        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-border flex-shrink-0">
          <div className="flex items-center gap-2">
            <Vote className="w-5 h-5 text-foreground" />
            <h2 className="text-foreground font-bold text-xl">Vote for Council</h2>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-5 space-y-6">
            <p className="text-foreground">
              Submit your candidacy to join the council. Complete the form below to stake your tokens and provide your manifesto for community consideration.
            </p>

            {/* Header Info */}
            <div className="space-y-4">
              <p className="text-foreground">
                Join the council by submitting your candidacy. Council members help govern the network
                through voting on proposals and managing treasury funds.
              </p>

              {/* Requirements */}
              <Card className="bg-card border border-border">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <h4 className="text-foreground">Requirements</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-chart-5 rounded-full" />
                        <span className="text-sm text-muted-foreground">Minimum stake: 1,000 ROOT</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-chart-5 rounded-full" />
                        <span className="text-sm text-muted-foreground">Council manifesto required</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-chart-5 rounded-full" />
                        <span className="text-sm text-muted-foreground">Active participation expected</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Form */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-foreground">Stake Amount</Label>
                <Input
                  value={formData.stake}
                  onChange={(e) => setFormData({...formData, stake: e.target.value})}
                  placeholder="Enter stake amount (minimum 1,000 ROOT)"
                  className="bg-input-background border-border text-foreground"
                />
                <p className="caption text-muted-foreground">
                  Higher stakes increase your chances of being elected to the council
                </p>
              </div>

              <div className="space-y-2">
                <Label className="text-foreground">Council Manifesto</Label>
                <Textarea
                  value={formData.manifesto}
                  onChange={(e) => setFormData({...formData, manifesto: e.target.value})}
                  placeholder="Describe your vision for the network, your qualifications, and how you plan to contribute as a council member..."
                  className="bg-input-background border-border text-foreground min-h-32"
                />
                <p className="caption text-muted-foreground">
                  This will be publicly visible to voters
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-foreground">Discord Handle (Optional)</Label>
                  <Input
                    value={formData.discordHandle}
                    onChange={(e) => setFormData({...formData, discordHandle: e.target.value})}
                    placeholder="@username"
                    className="bg-input-background border-border text-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-foreground">Twitter Handle (Optional)</Label>
                  <Input
                    value={formData.twitterHandle}
                    onChange={(e) => setFormData({...formData, twitterHandle: e.target.value})}
                    placeholder="@username"
                    className="bg-input-background border-border text-foreground"
                  />
                </div>
              </div>
            </div>

            {/* Cost Breakdown */}
            <Card className="bg-input-background border border-border">
              <CardContent className="p-4">
                <div className="space-y-3">
                  <h4 className="text-foreground">Transaction Summary</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Stake amount</span>
                      <span className="text-foreground">{formData.stake || '0'} ROOT</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Transaction fee</span>
                      <span className="text-foreground">0.01 ROOT</span>
                    </div>
                    <div className="border-t border-border pt-2">
                      <div className="flex justify-between text-sm font-medium">
                        <span className="text-foreground">Total</span>
                        <span className="text-foreground">{(parseFloat(formData.stake || '0') + 0.01).toFixed(2)} ROOT</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

        {/* Fixed Footer */}
        <div className="flex-shrink-0 border-t border-border">
          <div className="pt-6 flex gap-3">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            {isLoggedIn ? (
              <Button
                onClick={handleSubmit}
                disabled={!canSubmit}
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 rounded-[1000px] py-3"
              >
                Submit Candidacy
              </Button>
            ) : (
              <ConnectWalletButton className="flex-1 rounded-[1000px] py-3" />
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
