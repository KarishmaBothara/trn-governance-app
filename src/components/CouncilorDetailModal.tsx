import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { ArrowUp, ArrowDown } from 'lucide-react';
import {NavigationItem} from "@/app/page";

interface CouncilMember {
  id: string;
  name: string;
  address: string;
  backing: string;
  votes: string;
  description: string;
  hasDiscord: boolean;
  hasTwitter: boolean;
  socialLinks?: {
    discord?: string;
    twitter?: string;
    discordHandle?: string;
    twitterHandle?: string;
  };
  stats: {
    motionsProposed: number;
    participation: string;
    termStart: string;
  };
  votingHistory: Array<{
    proposalId: string;
    title: string;
    date: string;
    vote: 'aye' | 'nay' | 'abstain';
    track: string;
  }>;
  recentMotions: Array<{
    id: string;
    title: string;
    status: 'proposed' | 'voting' | 'passed' | 'rejected';
    date: string;
    track: string;
  }>;
}

interface CouncilorDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  councilor: CouncilMember | null;
  onNavigate: (page: NavigationItem) => void;
  onSelectProposal: (id: string) => void;
}

export function CouncilorDetailModal({ isOpen, onClose, councilor, onNavigate, onSelectProposal }: CouncilorDetailModalProps) {

  if (!councilor) return null;

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'proposed': return 'bg-blue-500/20 text-blue-400';
      case 'voting': return 'bg-yellow-500/20 text-yellow-400';
      case 'passed': return 'bg-green-500/20 text-green-400';
      case 'rejected': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  // const getVoteColor = (vote: string) => {
  //   switch (vote) {
  //     case 'aye': return 'text-green-400';
  //     case 'nay': return 'text-red-400';
  //     case 'abstain': return 'text-yellow-400';
  //     default: return 'text-gray-400';
  //   }
  // };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card border-0 text-foreground p-0 gap-0 overflow-hidden flex flex-col">
        <DialogTitle className="sr-only">
          Councilor Details for {councilor.name}
        </DialogTitle>
        <DialogDescription className="sr-only">
          View detailed information about {councilor.name}, including voting history, motions, and council activity.
        </DialogDescription>

        {/* Header */}
        <div className="pb-5 border-b border-border flex-shrink-0 space-y-3">
          <div>
            <h2 className="text-foreground font-bold text-xl">{councilor.name}</h2>
            <p className="text-xs text-muted-foreground">{councilor.address}</p>
          </div>
          <div className="flex items-center gap-4">
            {(councilor.hasDiscord || councilor.socialLinks?.discord) && (
              <a
                href={councilor.socialLinks?.discord || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M20.317 4.37c-1.53-.69-3.17-1.2-4.885-1.47.3.48.65 1.13.89 1.65-1.8-.27-3.54-.27-5.34 0 .24-.52.59-1.17.89-1.65-1.715.27-3.355.78-4.885 1.47-4.4 6.58-5.61 13-5.02 19.34 2.01 1.48 3.96 2.38 5.86 2.96-.47-.64-.89-1.32-1.24-2.03.68.2 1.38.36 2.09.47-.15-.23-.29-.47-.42-.72 1.48.22 2.98.22 4.46 0-.13.25-.27.49-.42.72.71-.11 1.41-.27 2.09-.47-.35.71-.77 1.39-1.24 2.03 1.9-.58 3.85-1.48 5.86-2.96.69-7.36-1.17-13.75-4.94-19.34zm-8.54 15.49c-1.63 0-2.95-1.5-2.95-3.34s1.32-3.34 2.95-3.34 2.95 1.5 2.95 3.34-1.32 3.34-2.95 3.34zm5.54 0c-1.63 0-2.95-1.5-2.95-3.34s1.32-3.34 2.95-3.34 2.95 1.5 2.95 3.34-1.32 3.34-2.95 3.34z" fill="currentColor"/>
                </svg>
                <span className="text-xs">{councilor.socialLinks?.discordHandle || 'council_member'}</span>
              </a>
            )}
            {(councilor.hasTwitter || councilor.socialLinks?.twitter) && (
              <a
                href={councilor.socialLinks?.twitter || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
                </svg>
                <span className="text-xs">{councilor.socialLinks?.twitterHandle || '@council_member'}</span>
              </a>
            )}
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-5 space-y-6">
            {/* Description */}
            <p className="text-foreground leading-6">
              {councilor.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <Card className="bg-card border border-border">
                <CardContent className="p-3">
                  <div className="text-center">
                    <p className="text-foreground font-bold">{councilor.backing}</p>
                    <p className="text-xs text-muted-foreground">Backing</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border border-border">
                <CardContent className="p-3">
                  <div className="text-center">
                    <p className="text-foreground font-bold">{councilor.stats.motionsProposed}</p>
                    <p className="text-xs text-muted-foreground">Motions Proposed</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border border-border">
                <CardContent className="p-3">
                  <div className="text-center">
                    <p className="text-foreground font-bold">{councilor.stats.participation}</p>
                    <p className="text-xs text-muted-foreground">Participation</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border border-border">
                <CardContent className="p-3">
                  <div className="text-center">
                    <p className="text-foreground font-bold text-xs">{councilor.stats.termStart}</p>
                    <p className="text-xs text-muted-foreground">Term Start</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Voting History */}
            <div className="space-y-4">
              <h3 className="text-foreground">Recent Voting History</h3>

              <div className="space-y-3">
                {councilor.votingHistory.slice(0, 5).map((vote, index) => (
                  <Card
                    key={index}
                    className="bg-card border border-border transition-all duration-200 hover:border-white/80 cursor-pointer"
                    onClick={() => {
                      onSelectProposal(vote.proposalId);
                      onNavigate('proposal-detail');
                      onClose();
                    }}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h4 className="text-foreground font-bold">{vote.title}</h4>
                          <div className="flex items-center gap-6">
                            <p className="text-xs text-muted-foreground font-bold">{vote.date}</p>
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
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent Motions */}
            <div className="space-y-4">
              <h3 className="text-foreground">Recent Motions</h3>

              <div className="space-y-3">
                {councilor.recentMotions.map((motion) => (
                  <Card
                    key={motion.id}
                    className="bg-card border border-border transition-all duration-200 hover:border-white/80 cursor-pointer"
                    onClick={() => {
                      onSelectProposal(motion.id);
                      onNavigate('proposal-detail');
                      onClose();
                    }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-foreground font-medium text-sm flex-1">{motion.title}</h4>
                        <Badge className={`${getStatusBadgeColor(motion.status)} text-[6px] px-1 py-0.5 ml-3`}>
                          {motion.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-blue-500/20 text-blue-400 text-[6px] px-1 py-0.5">
                          {motion.track}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{motion.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

          </div>
        </div>


      </DialogContent>
    </Dialog>
  );
}
