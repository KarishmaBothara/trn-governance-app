import { useState } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Card, CardContent } from './ui/card';
import { AlertTriangle } from 'lucide-react';

interface ResignSeatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResignSeatModal({ isOpen, onClose }: ResignSeatModalProps) {
  const [isConfirming, setIsConfirming] = useState(false);

  const handleResign = () => {
    setIsConfirming(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Resigning from council seat');
      setIsConfirming(false);
      onClose();
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card border-0 text-foreground">
        <DialogHeader>
          <DialogTitle className="text-foreground flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            Resign Council Seat
          </DialogTitle>
          <DialogDescription>
            Confirm your resignation from the council seat. This action is permanent and will affect your staked tokens and council privileges.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Warning Message */}
          <div className="space-y-4">
            <p className="text-foreground">
              Are you sure you want to resign from your council seat? This action cannot be undone.
            </p>

            <Card className="bg-destructive/10 border-destructive/20">
              <CardContent className="p-4">
                <div className="space-y-3">
                  <h4 className="text-destructive font-medium">Consequences of resigning:</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-foreground">
                        You will lose your council position immediately
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-foreground">
                        Your staked tokens will be unlocked after a 7-day unbonding period
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-foreground">
                        You will no longer receive council rewards
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-foreground">
                        You cannot vote on council motions
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Current Status */}
          <Card className="bg-input-background border-border">
            <CardContent className="p-4">
              <div className="space-y-3">
                <h4 className="text-foreground">Current Status</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Council position</span>
                    <span className="text-foreground">Active member</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Staked amount</span>
                    <span className="text-foreground">837,000 ROOT</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Term remaining</span>
                    <span className="text-foreground">20 days, 0 hrs, 28 mins</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Unbonding period</span>
                    <span className="text-foreground">7 days</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={onClose}
              disabled={isConfirming}
              className="text-muted-foreground hover:text-foreground"
            >
              Cancel
            </Button>
            <Button
              onClick={handleResign}
              disabled={isConfirming}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90 px-8"
            >
              {isConfirming ? 'Resigning...' : 'Confirm Resignation'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}