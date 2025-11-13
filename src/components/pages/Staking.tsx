import { Card, CardContent } from '../ui/card';
import { Info, ExternalLink } from 'lucide-react';
import Root from '../../imports/Root-99-709';

export function Staking() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Card className="bg-card border-border max-w-md w-full">
        <CardContent className="p-8 text-center">
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Info className="w-8 h-8 text-primary" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2">
                <h2 className="text-foreground">Staking</h2>
                <a
                    href="https://staking.therootnetwork.com"
                    target="_blank"
                >
                <ExternalLink className="w-5 h-5 text-muted-foreground" />
                </a>
              </div>
            </div>


          </div>
        </CardContent>
      </Card>
    </div>
  );
}
