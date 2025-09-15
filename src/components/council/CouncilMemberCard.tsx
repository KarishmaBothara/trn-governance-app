import { Card, CardContent } from '../ui/card';
import { CouncilMember } from './types';

interface CouncilMemberCardProps {
  member: CouncilMember;
  onCouncilorClick?: (member: CouncilMember) => void;
}

export function CouncilMemberCard({ member, onCouncilorClick }: CouncilMemberCardProps) {
  return (
    <Card 
      className="bg-card border border-border hover:border-white/80 cursor-pointer transition-all duration-200"
      onClick={() => onCouncilorClick?.(member)}
    >
      <CardContent className="p-5">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border pb-3">
            <div className="flex items-center gap-3">
              <div>
                <h3 className="text-foreground font-bold text-lg">{member.name}</h3>
                <p className="text-xs text-muted-foreground">{member.address}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {member.hasDiscord && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-muted-foreground">
                  <path 
                    d="M20.317 4.37A19.791 19.791 0 0 0 15.822 3a.074.074 0 0 0-.079.037c-.194.35-.408.808-.558 1.171A18.27 18.27 0 0 0 9.674 4a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 5.1 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" 
                    fill="currentColor"
                  />
                </svg>
              )}
              {member.hasTwitter && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-muted-foreground">
                  <path 
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" 
                    fill="currentColor"
                  />
                </svg>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-foreground text-sm">
            {member.description}
          </p>

          {/* Stats */}
          <div className="flex gap-3">
            <Card className="flex-1 bg-card border border-border">
              <CardContent className="p-3">
                <div className="text-center">
                  <p className="text-foreground font-bold">{member.backing}</p>
                  <p className="text-xs text-muted-foreground">Backing</p>
                </div>
              </CardContent>
            </Card>
            <Card className="flex-1 bg-card border border-border">
              <CardContent className="p-3">
                <div className="text-center">
                  <p className="text-foreground font-bold">{member.votes}</p>
                  <p className="text-xs text-muted-foreground">Votes</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}