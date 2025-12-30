import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent } from './ui/card';
// import { Badge } from './ui/badge';
// import { Separator } from './ui/separator';
import { User, Twitter, MessageCircle, AlertCircle, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { ConnectWalletButton } from './ConnectWalletButton';
import { useAuth } from "@futureverse/auth-react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

interface BecomeADelegateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BecomeADelegateModal({ isOpen, onClose }: BecomeADelegateModalProps) {
  // const { isLoggedIn } = useUser();
  const { userSession } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    account: '',
    bio: '',
    twitterHandle: '',
    discordHandle: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const accountType = {
    'FPass': { label: 'FPass', description: 'Use futurepass address' },
    'EOA': { label: 'EOA', description: 'Use eoa address' },
  };

  const handleSubmit = async () => {
    if (!canSubmit()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitted(true);

    try {
      const response = await fetch('/api/delegates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          address: formData.account === "FPass" ? userSession?.futurepass?.toString() : userSession?.eoa?.toString(),
          description: formData.bio,
          twitter: formData.twitterHandle,
          discord: formData.discordHandle,
          totalDelegators: 0,
          participation: 0,
          votingHistory: [],
          votingPower: '0'
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Show success toast
        return true;
      } else {
        // setError(data.error || 'Something went wrong');
        return undefined;
      }
    } catch (error) {
    }

    // Show success toast
    toast.success('Delegate registration submitted!', {
      description: `Your registration as "${formData.name}" has been submitted for review. You'll be notified once approved.`,
      duration: 5000,
    });

    // Close modal after showing success
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setFormData({
        name: '',
        account: '',
        bio: '',
        twitterHandle: '',
        discordHandle: ''
      });
    }, 3000);
  };

  const canSubmit = () => {
    return formData.name && formData.bio;
  };

  // const estimatedFee = 0.1; // ROOT

  if (submitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="bg-card border-0 text-foreground p-0 gap-0 overflow-hidden flex flex-col">
          <DialogTitle className="sr-only">Delegate Registration Submitted</DialogTitle>
          <DialogDescription className="sr-only">
            Your delegate registration has been successfully submitted and is pending approval.
          </DialogDescription>

          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-border flex-shrink-0">
            <h2 className="text-foreground font-bold text-xl">Registration Submitted!</h2>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-5">
              <div className="text-center space-y-4 py-6">
                <CheckCircle size={48} className="text-chart-5 mx-auto" />
                <div>
                  <h3 className="text-foreground text-xl">Registration Submitted!</h3>
                  <p className="text-muted-foreground mt-2">
                    Your delegate registration has been submitted for review
                  </p>
                </div>
                <div className="bg-input-background border border-border rounded-lg p-4 text-sm">
                  <p className="text-muted-foreground">Transaction Hash:</p>
                  <p className="text-foreground font-mono caption mt-1">
                    0x1234567890abcdef1234567890abcdef12345678
                  </p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card border-0 text-foreground p-0 gap-0 overflow-hidden flex flex-col">
        <DialogTitle className="sr-only">
          Become a Delegate Registration Form
        </DialogTitle>
        <DialogDescription className="sr-only">
          Register as a delegate to represent community members in governance decisions. Complete the form with your information and manifesto.
        </DialogDescription>

        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-border flex-shrink-0">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-foreground" />
            <h2 className="text-foreground font-bold text-xl">Become a Delegate</h2>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">

          <div className="p-5 space-y-6">
            <p className="text-foreground">
              Register as a delegate to represent community members in governance decisions. Delegates vote on behalf of token holders who choose to delegate their voting power.
            </p>
            {/* Requirements */}
            <Card className="bg-card border border-border">
              <CardContent className="p-4">
                <div className="space-y-3">
                  <h4 className="text-foreground">Delegate Requirements</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-chart-5 rounded-full" />
                      <span className="text-sm text-muted-foreground">Must have minimum 100 ROOT tokens in account</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-chart-5 rounded-full" />
                      <span className="text-sm text-muted-foreground">Commit to active participation in governance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-chart-5 rounded-full" />
                      <span className="text-sm text-muted-foreground">Provide transparent voting rationale</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Basic Information */}
            <div className="space-y-4">
              <div className="space-y-3">
                {/*<label className="text-sm text-foreground">*/}
                {/*  What type of proposal are you making?*/}
                {/*</label>*/}
                <Select
                    value={formData.account}
                    onValueChange={(value) => { setFormData({...formData, account: value})}}
                >
                  <SelectTrigger className="bg-input-background border-border text-foreground">
                    <SelectValue placeholder="Choose account type">
                      {/*{proposalData.type ? proposalTypes[proposalData.type]?.label : null}*/}
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
              <div className="space-y-2">
                <Label className="text-foreground">Delegate Name *</Label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Enter your delegate name or organization"
                  className="bg-input-background border-border text-foreground"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label className="text-foreground">Bio *</Label>
                  <span className="caption text-muted-foreground">
                    {formData.bio.length}/300
                  </span>
                </div>
                <Textarea
                  value={formData.bio}
                  onChange={(e) => {
                    if (e.target.value.length <= 300) {
                      setFormData({...formData, bio: e.target.value});
                    }
                  }}
                  placeholder="Describe your background, qualifications, governance philosophy, and how you plan to represent delegators (max 300 characters)"
                  className="bg-input-background border-border text-foreground min-h-32"
                />
                <p className="caption text-muted-foreground">
                  This will be publicly visible to potential delegators on your profile
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-foreground">Social Links (Optional)</h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-foreground flex items-center gap-2">
                    <Twitter className="w-4 h-4" />
                    Twitter Handle
                  </Label>
                  <Input
                    value={formData.twitterHandle}
                    onChange={(e) => setFormData({...formData, twitterHandle: e.target.value})}
                    placeholder="@username"
                    className="bg-input-background border-border text-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-foreground flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Discord Handle
                  </Label>
                  <Input
                    value={formData.discordHandle}
                    onChange={(e) => setFormData({...formData, discordHandle: e.target.value})}
                    placeholder="username#1234"
                    className="bg-input-background border-border text-foreground"
                  />
                </div>
              </div>
            </div>





            {/* Important Notice */}
            <div className="flex gap-3 p-3 bg-chart-3/10 border border-chart-3/20 rounded-lg">
              <AlertCircle size={20} className="text-chart-3 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="text-foreground font-medium">Important Notice</p>
                <p className="text-muted-foreground">
                  As a delegate, you will be responsible for voting on behalf of those who delegate to you.
                  Your voting history and decisions will be publicly visible and auditable. You must maintain a minimum of 100 ROOT tokens in your account.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Fixed Footer */}
        <div className="flex-shrink-0 border-t border-border">
          <div className="pt-6 flex gap-3">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            {userSession ? (
              <Button
                onClick={handleSubmit}
                disabled={!canSubmit() || isSubmitting}
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 rounded-[1000px] py-3"
              >
                {isSubmitting ? 'Submitting...' : 'Register as Delegate'}
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
