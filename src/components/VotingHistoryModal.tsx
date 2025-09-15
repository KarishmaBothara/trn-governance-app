import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ArrowUp, ArrowDown } from 'lucide-react';
const leftIcon = "/../imports/left_icon.png";

interface VotingHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Mock voting history data
const votingHistory = [
  {
    voter: 'FV Seona',
    avatar: leftIcon,
    votes: 2000,
    delegated: 10,
    vote: 'aye' as const,
  },
  {
    voter: 'Alexander Chen',
    avatar: leftIcon,
    votes: 12000,
    delegated: null,
    vote: 'aye' as const,
  },
  {
    voter: 'Maria Rodriguez',
    avatar: leftIcon,
    votes: 1000,
    delegated: 25,
    vote: 'nay' as const,
  },
  {
    voter: 'David Kim',
    avatar: leftIcon,
    votes: 8000,
    delegated: null,
    vote: 'aye' as const,
  },
  {
    voter: 'Sarah Thompson',
    avatar: leftIcon,
    votes: 4000,
    delegated: null,
    vote: 'aye' as const,
  },
];

export function VotingHistoryModal({ isOpen, onClose }: VotingHistoryModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card border-0 text-foreground p-0 gap-0 overflow-hidden flex flex-col">
        <DialogTitle className="sr-only">
          Proposal Voting History
        </DialogTitle>
        <DialogDescription className="sr-only">
          View detailed voting history including voter information and vote breakdown.
        </DialogDescription>

        {/* Header */}
        <div className="pb-5 border-b border-border flex-shrink-0">
          <h2 className="text-foreground font-bold text-xl">Votes</h2>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-5 space-y-6">
            {/* Vote progress bar */}
            <div className="space-y-3">
              <div className="w-full bg-green-400 h-2 rounded-full" />
              <div className="flex justify-between text-sm">
                <div className="flex items-center gap-2">
                  <ArrowUp size={16} className="text-green-400" />
                  <span className="text-green-400 font-bold">80% Aye</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowDown size={16} className="text-red-400" />
                  <span className="text-red-400 font-bold">20% Nay</span>
                </div>
              </div>
            </div>

            {/* Vote type tabs */}
            <div className="flex gap-6">
              <Button className="bg-primary text-primary-foreground rounded-full px-6 py-2">
                Aye (4)
              </Button>
              <Button variant="ghost" className="text-muted-foreground rounded-full px-6 py-2">
                Nay (1)
              </Button>
              <Button variant="ghost" className="text-muted-foreground rounded-full px-6 py-2">
                Abstain (0)
              </Button>
            </div>

            {/* Voting History section */}
            <div className="space-y-4">
              <h3 className="text-foreground">Voting History</h3>
              
              <div className="space-y-3">
                {votingHistory.map((vote, index) => (
                  <Card 
                    key={index} 
                    className="bg-card border border-border transition-all duration-200 hover:border-white/80"
                  >
                    <CardContent className="pt-5 pr-5 pb-5">
                      <div className="flex items-center justify-between pl-0">
                        <div className="space-y-1">
                            <h4 className="text-foreground font-bold">{vote.voter}</h4>
                            <div className="flex items-center gap-1">
                              {vote.vote === 'aye' ? (
                                <ArrowUp size={14} className="text-green-400" />
                              ) : (
                                <ArrowDown size={14} className="text-red-400" />
                              )}
                              <span className="text-xs text-muted-foreground font-bold">
                                {vote.vote === 'aye' ? 'Aye' : 'Nay'}
                              </span>
                            </div>
                          </div>
                        
                        <div className="flex items-center gap-6">
                          <div className="text-right">
                            <p className="text-xs text-muted-foreground">Votes</p>
                            <p className="text-foreground font-bold">{vote.votes.toLocaleString()}</p>
                          </div>
                          {vote.delegated && (
                            <div className="text-right">
                              <p className="text-xs text-muted-foreground">Delegated</p>
                              <p className="text-foreground font-bold">{vote.delegated}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load more button */}
              <div className="flex justify-center pt-4">
                <Button variant="ghost" className="text-muted-foreground">
                  Load more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}