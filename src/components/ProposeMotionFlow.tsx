import { useState } from 'react';
import { NavigationItem } from "@/app/page";
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { toast } from 'sonner';

interface ProposeMotionFlowProps {
  onNavigate?: (page: NavigationItem) => void;
  onComplete?: () => void;
}

type MotionStep = 'setup' | 'details' | 'review';

interface MotionData {
  type: string;
  title: string;
  summary: string;
  details: string;
  discussionLink: string;
  threshold: string;
}

interface StepIndicatorProps {
  currentStep: MotionStep;
}

function StepIndicator({ currentStep }: StepIndicatorProps) {
  const steps = [
    { key: 'setup', number: 1, title: 'Setup', isActive: currentStep === 'setup' },
    { key: 'details', number: 2, title: 'Details', isActive: currentStep === 'details' },
    { key: 'review', number: 3, title: 'Review', isActive: currentStep === 'review' },
  ];

  return (
    <div className="flex items-center justify-center gap-2 md:gap-8 mb-8 md:mb-12">
      {steps.map((step, index) => (
        <div key={step.key} className="flex items-center">
          <div className="flex items-center gap-2 md:gap-3">
            <div
              className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-bold ${
                step.isActive 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted text-muted-foreground'
              }`}
            >
              {step.number}
            </div>
            <span
              className={`text-xs md:text-sm font-medium ${
                step.isActive ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              {step.title}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div className="w-4 md:w-16 h-px bg-border mx-2 md:mx-6" />
          )}
        </div>
      ))}
    </div>
  );
}

export function ProposeMotionFlow({ onComplete }: ProposeMotionFlowProps) {
  const [currentStep, setCurrentStep] = useState<MotionStep>('setup');
  const [motionData, setMotionData] = useState<MotionData>({
    type: '',
    title: '',
    summary: '',
    details: '',
    discussionLink: '',
    threshold: '',
  });

  const stepContent = {
    setup: {
      title: 'Choose Motion Type',
      description: 'Select the type of council motion you want to propose. Different motion types have different voting thresholds and requirements.',
    },
    details: {
      title: 'Add Motion Details',
      description: 'Provide comprehensive information about your motion to help council members understand and evaluate it effectively.',
    },
    review: {
      title: 'Review & Submit',
      description: 'Review your motion details carefully before submitting to the council for voting.',
    },
  };

  const motionTypes = {
    'root-upgrade': { label: 'Root Upgrade', threshold: 'Super Majority (67%)', deposit: '500 ROOT' },
    'treasury-spend': { label: 'Treasury Spend', threshold: 'Simple Majority (51%)', deposit: '200 ROOT' },
    'referendum-cancel': { label: 'Cancel Referendum', threshold: 'Super Majority (67%)', deposit: '300 ROOT' },
    'external-proposal': { label: 'External Proposal', threshold: 'Simple Majority (51%)', deposit: '150 ROOT' },
    'emergency-proposal': { label: 'Emergency Proposal', threshold: 'Super Majority (67%)', deposit: '1000 ROOT' },
  };

  const handleContinue = () => {
    if (currentStep === 'setup' && motionData.type) {
      setCurrentStep('details');
    } else if (currentStep === 'details') {
      setCurrentStep('review');
    } else if (currentStep === 'review') {
      // Handle motion submission
      console.log('Submitting motion:', motionData);

      // Show success toast
      toast.success('Council motion submitted!', {
        description: `Your ${selectedMotionType?.label.toLowerCase()} motion "${motionData.title}" has been submitted to the council for voting.`,
        duration: 5000,
      });

      // Complete the flow after a short delay
      setTimeout(() => {
        onComplete?.();
      }, 1000);
    }
  };

  const handleBack = () => {
    if (currentStep === 'details') {
      setCurrentStep('setup');
    } else if (currentStep === 'review') {
      setCurrentStep('details');
    } else {
      onComplete?.();
    }
  };

  const canContinue = () => {
    switch (currentStep) {
      case 'setup':
        return !!motionData.type;
      case 'details':
        return !!(motionData.title && motionData.summary);
      case 'review':
        return true;
      default:
        return false;
    }
  };

  const selectedMotionType = motionData.type ? motionTypes[motionData.type as keyof typeof motionTypes] : null;

  const renderStepContent = () => {
    switch (currentStep) {
      case 'setup':
        return (
          <div className="space-y-6">
            <h2 className="text-foreground">Setup Your Motion</h2>

            <p className="text-foreground">
              Choose the type of council motion you want to propose. Each motion type has different
              voting thresholds and requirements for council members.
            </p>

            <div className="space-y-3">
              <label className="text-sm text-foreground">
                What type of motion are you proposing?
              </label>
              <Select
                value={motionData.type}
                onValueChange={(value) => setMotionData({...motionData, type: value})}
              >
                <SelectTrigger className="bg-input-background border-border text-foreground">
                  <SelectValue placeholder="Choose motion type" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(motionTypes).map(([key, type]) => (
                    <SelectItem key={key} value={key}>{type.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedMotionType && (
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-500/20 text-blue-400">
                      {selectedMotionType.threshold}
                    </Badge>
                    <span className="text-sm text-muted-foreground">Required threshold</span>
                  </div>
                  <p className="text-sm text-foreground">
                    Deposit: {selectedMotionType.deposit}
                  </p>
                </div>
              </div>
            )}
          </div>
        );

      case 'details':
        return (
          <div className="space-y-6">
            <h2 className="text-foreground">Add Motion Details</h2>

            <p className="text-foreground">
              Provide comprehensive information about your motion to help council members
              understand and evaluate it effectively.
            </p>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-foreground">Motion Title</label>
                <Input
                  value={motionData.title}
                  onChange={(e) => setMotionData({...motionData, title: e.target.value})}
                  placeholder="Enter a clear, descriptive title for your motion"
                  className="bg-input-background border-border text-foreground"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-foreground">Summary</label>
                <Textarea
                  value={motionData.summary}
                  onChange={(e) => setMotionData({...motionData, summary: e.target.value})}
                  placeholder="Provide a brief summary of your motion (200-500 characters)"
                  className="bg-input-background border-border text-foreground min-h-24"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-foreground">Detailed Description</label>
                <Textarea
                  value={motionData.details}
                  onChange={(e) => setMotionData({...motionData, details: e.target.value})}
                  placeholder="Provide detailed information about your motion, including rationale, implementation details, and expected outcomes"
                  className="bg-input-background border-border text-foreground min-h-32"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-foreground">Discussion Link</label>
                <Input
                  value={motionData.discussionLink}
                  onChange={(e) => setMotionData({...motionData, discussionLink: e.target.value})}
                  placeholder="https://forum.rootnetwork.io/..."
                  className="bg-input-background border-border text-foreground"
                />
              </div>
            </div>
          </div>
        );

      case 'review':
        return (
          <div className="space-y-6">
            <h2 className="text-foreground">Review Your Motion</h2>

            <p className="text-foreground">
              Please review all details carefully before submitting. Once submitted,
              your motion will be visible to council members for voting.
            </p>

            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="text-foreground">Motion Type</h4>
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-500/20 text-blue-400">
                    {selectedMotionType?.label}
                  </Badge>
                  <Badge className="bg-green-500/20 text-green-400">
                    {selectedMotionType?.threshold}
                  </Badge>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-foreground">Title</h4>
                <p className="text-foreground">{motionData.title}</p>
              </div>

              <div className="space-y-2">
                <h4 className="text-foreground">Summary</h4>
                <p className="text-foreground">{motionData.summary}</p>
              </div>

              {motionData.details && (
                <div className="space-y-2">
                  <h4 className="text-foreground">Details</h4>
                  <p className="text-foreground">{motionData.details}</p>
                </div>
              )}

              {motionData.discussionLink && (
                <div className="space-y-2">
                  <h4 className="text-foreground">Discussion Link</h4>
                  <a
                    href={motionData.discussionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {motionData.discussionLink}
                  </a>
                </div>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderCallPreview = () => {
    if (!motionData.type) {
      return (
        <div className="pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            Choose a motion type to get started
          </p>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Voting threshold</p>
            <p className="text-sm text-foreground">{selectedMotionType?.threshold}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Transaction fee</p>
            <p className="text-sm text-foreground">0.01 ROOT</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Deposit required</p>
            <p className="text-sm text-foreground">{selectedMotionType?.deposit || '—'}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Council members</p>
            <p className="text-sm text-foreground">13 active</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Call hash</p>
            <p className="text-sm text-foreground font-mono">0x1234...abcd</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Decoded call</p>
            <p className="text-sm text-foreground">council.propose()</p>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <Badge className="bg-green-500/20 text-green-400 text-xs">
            Council Motion
          </Badge>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-8">
        <h1 className="text-foreground text-left">Propose a Motion</h1>

        {/* Step Description Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(stepContent).map(([key, content]) => (
            <Card
              key={key}
              className={`bg-card border transition-colors ${
                currentStep === key ? 'border-primary/30' : 'border-border'
              }`}
            >
              <CardContent className="p-6">
                <div className="space-y-3 text-left">
                  <h4 className="text-foreground">{content.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed text-left">
                    {content.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Step Indicator */}
      <StepIndicator currentStep={currentStep} />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Form Area */}
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="space-y-6">
                {renderStepContent()}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleContinue}
                    disabled={!canContinue()}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
                  >
                    {currentStep === 'review' ? 'Submit Motion' : 'Continue'}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call Preview Sidebar */}
        <div className="lg:col-span-1">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="space-y-6">
                <h3 className="text-foreground">Motion Preview</h3>
                {renderCallPreview()}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
