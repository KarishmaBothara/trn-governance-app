import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ArrowUp, ArrowDown } from 'lucide-react';
import * as React from "react";
import {useVotes} from "@/hooks/useVotes";
// import {Proposal} from "../../generated/prisma";

interface VotingHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  referendum?: any
}

export function VotingHistoryModal({ isOpen, referendum, onClose }: VotingHistoryModalProps) {
  const { data: voteData } = useVotes(referendum?.pId);
  if (!referendum) return;
  const votingHistory = voteData ? voteData : [];
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
              <div className="flex w-full h-1.5 rounded-full overflow-hidden">
              <div className="bg-green-400" style={{ width: `${referendum.ayePercentage}%` }} />
              <div className="bg-red-400" style={{ width: `${referendum.nayPercentage}%` }} />
              </div>
              <div className="flex justify-between text-sm">
                <div className="flex items-center gap-2">
                  <ArrowUp size={16} className="text-green-400" />
                  <span className="text-green-400 font-bold">{referendum.ayePercentage} Aye</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowDown size={16} className="text-red-400" />
                  <span className="text-red-400 font-bold">{referendum.nayPercentage} Nay</span>
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
                {votingHistory.map((vote: any, index: number) => (
                  <Card
                    key={index}
                    className="bg-card border border-border transition-all duration-200 hover:border-white/80"
                  >
                    <CardContent className="pt-5 pr-5 pb-5">
                      <div className="flex items-center justify-between pl-0">
                        <div className="space-y-1">
                            <h4 className="text-foreground font-bold">{vote.voter}</h4>
                            <div className="flex items-center gap-1">
                              {vote.voteAye ? (
                                <ArrowUp size={14} className="text-green-400" />
                              ) : (
                                <ArrowDown size={14} className="text-red-400" />
                              )}
                              <span className="text-xs text-muted-foreground font-bold">
                                {vote.voteAye ? 'Aye' : 'Nay'}
                              </span>
                            </div>
                          </div>

                        <div className="flex items-center gap-6">
                          <div className="text-right">
                            <p className="text-xs text-muted-foreground">Votes</p>
                            <p className="text-foreground font-bold">{vote.amount}</p>
                          </div>
                        {/*  {vote.delegated && (*/}
                        {/*    <div className="text-right">*/}
                        {/*      <p className="text-xs text-muted-foreground">Delegated</p>*/}
                        {/*      <p className="text-foreground font-bold">{vote.delegated}</p>*/}
                        {/*    </div>*/}
                        {/*  )}*/}
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
