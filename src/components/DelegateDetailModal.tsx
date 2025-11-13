import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { useUser } from './UserContext';
import { ConnectWalletButton } from './ConnectWalletButton';
import {NavigationItem} from "@/app/page";

interface Delegate {
  id: string;
  name: string;
  address: string;
  votingPower: number;
  totalDelegators: number;
  participation: number;
  description: string;
  // socialLinks: {
    discord?: string;
    twitter?: string;
    discordHandle?: string;
    twitterHandle?: string;
  // };
  // tracks: string[];
  votingHistory: Array<{
    proposalId: string;
    title: string;
    date: string;
    vote: 'aye' | 'nay';
  }>;
}

interface DelegateDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  delegate: Delegate | null;
  onDelegate: () => void;
  onNavigate: (page: NavigationItem) => void;
  onSelectProposal: (id: string) => void;
}

export function DelegateDetailModal({ isOpen, onClose, delegate, onDelegate, onNavigate, onSelectProposal }: DelegateDetailModalProps) {
  const { isLoggedIn } = useUser();

  if (!delegate) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="bg-card border-0 text-foreground p-0 gap-0 overflow-hidden flex flex-col delegate-detail-modal"
      >
        <DialogTitle className="sr-only">
          Delegate Details for {delegate.name}
        </DialogTitle>
        <DialogDescription className="sr-only">
          View detailed information about {delegate.name}, including voting history and delegation options.
        </DialogDescription>

        {/* Header */}
        <div className="pb-5 border-b border-border flex-shrink-0 space-y-3">
          <div>
            <h2 className="text-foreground font-bold text-xl">{delegate.name}</h2>
            <p className="text-xs text-muted-foreground">{delegate.address}</p>
          </div>
          <div className="flex items-center gap-4">
            {delegate.discord && (
              <a
                href={delegate.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M20.317 4.37c-1.53-.69-3.17-1.2-4.885-1.47.3.48.65 1.13.89 1.65-1.8-.27-3.54-.27-5.34 0 .24-.52.59-1.17.89-1.65-1.715.27-3.355.78-4.885 1.47-4.4 6.58-5.61 13-5.02 19.34 2.01 1.48 3.96 2.38 5.86 2.96-.47-.64-.89-1.32-1.24-2.03.68.2 1.38.36 2.09.47-.15-.23-.29-.47-.42-.72 1.48.22 2.98.22 4.46 0-.13.25-.27.49-.42.72.71-.11 1.41-.27 2.09-.47-.35.71-.77 1.39-1.24 2.03 1.9-.58 3.85-1.48 5.86-2.96.69-7.36-1.17-13.75-4.94-19.34zm-8.54 15.49c-1.63 0-2.95-1.5-2.95-3.34s1.32-3.34 2.95-3.34 2.95 1.5 2.95 3.34-1.32 3.34-2.95 3.34zm5.54 0c-1.63 0-2.95-1.5-2.95-3.34s1.32-3.34 2.95-3.34 2.95 1.5 2.95 3.34-1.32 3.34-2.95 3.34z" fill="currentColor"/>
                </svg>
                <span className="text-xs">{delegate.discord || 'moonbeam_ambassador'}</span>
              </a>
            )}
            {delegate.twitter && (
              <a
                href={delegate.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
                </svg>
                <span className="text-xs">{delegate.twitter || '@moonbeam_ambass'}</span>
              </a>
            )}
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-5 space-y-6">
            {/* Description */}
            <p className="text-foreground">
              {delegate.description.toLocaleString()}
            </p>

            <p className="text-foreground">
              Feel free to contact me directly on my networks
            </p>

            {/* Stats */}
            <div className="flex gap-3">
              <Card className="flex-1 bg-card border border-border">
                <CardContent className="p-3">
                  <div className="text-center">
                    <p className="text-foreground font-bold">{delegate.votingPower.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">Voting power</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="flex-1 bg-card border border-border">
                <CardContent className="p-3">
                  <div className="text-center">
                    <p className="text-foreground font-bold">{delegate.totalDelegators}</p>
                    <p className="text-xs text-muted-foreground">Total delegators</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="flex-1 bg-card border border-border">
                <CardContent className="p-3">
                  <div className="text-center">
                    <p className="text-foreground font-bold">{delegate.participation}</p>
                    <p className="text-xs text-muted-foreground">Participation</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/*/!* Tracks *!/*/}
            {/*<div className="space-y-3">*/}
            {/*  <h3 className="text-foreground font-bold text-2xl">Tracks</h3>*/}
            {/*  <div className="flex flex-wrap gap-3">*/}
            {/*    {delegate.tracks.map((track, index) => (*/}
            {/*      <Badge key={index} className="bg-blue-500/20 text-blue-400 text-[6px] font-bold uppercase px-1.5 py-0.5">*/}
            {/*        {track}*/}
            {/*      </Badge>*/}
            {/*    ))}*/}
            {/*  </div>*/}
            {/*</div>*/}

            {/* Voting History */}
            <div className="space-y-4">
              <h3 className="text-foreground font-bold text-2xl">Voting History</h3>

              <div className="space-y-3">
                {delegate.votingHistory.map((vote, index) => (
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

              <Button variant="ghost" className="text-muted-foreground">
                Load more
              </Button>
            </div>

          </div>
        </div>

        {/* Fixed Footer */}
        <div className="flex-shrink-0 border-t border-border">
          <div className="pt-6">
            {isLoggedIn ? (
              <Button
                className="w-full bg-primary text-primary-foreground rounded-[1000px] py-3"
                onClick={onDelegate}
              >
                Delegate
              </Button>
            ) : (
              <ConnectWalletButton className="w-full rounded-[1000px] py-3">
                Connect to Delegate
              </ConnectWalletButton>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
