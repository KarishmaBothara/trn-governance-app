import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';
// import { Copy } from 'lucide-react';
import { toast } from 'sonner';
import svgPaths from '../imports/svg-wj4geuf9e4';
import { ReactNode } from 'react';
import { useAuth } from "@futureverse/auth-react";
import {truncateAddress} from "@/lib/utils";

interface ProfileModalProps {
  profileName: string;
  walletAddress: string;
  fpassAddress: string;
  trigger: ReactNode;
}

export function ProfileModal({ profileName, walletAddress, fpassAddress, trigger }: ProfileModalProps) {
  const { signOutPass } = useAuth();
  const handleCopyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    toast.success('Address copied to clipboard');
  };

  const handleCopyFpassAddress = () => {
    navigator.clipboard.writeText(fpassAddress);
    toast.success('Address copied to clipboard');
  };

  const handleDisconnect = () => {
    // Mock disconnect functionality
    signOutPass({ postRedirecturi: "http://localhost:3000" })
    toast.success('Wallet disconnected');
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        {trigger}
      </PopoverTrigger>
      <PopoverContent
        className="max-w-[400px] w-full bg-black/10 backdrop-blur-[40px] border border-border text-foreground p-6 gap-0 overflow-hidden rounded-xl mr-8"
        align="end"
        side="bottom"
        sideOffset={8}
      >
        {/* Header Profile Section */}
        <div className="pb-5">
          <div className="space-y-2">
            <h2 className="text-foreground font-medium text-xl">{profileName}</h2>
            <p className="text-muted-foreground text-sm">
              Your wallet connection and account details
            </p>
          </div>
        </div>

        {/* Wallet Information Section */}
        <div className="pt-6 space-y-6">
          {/* FPass Address */}
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground font-bold uppercase tracking-wide">Your FPass Address</p>
            <div className="flex items-center justify-between">
              <p className="text-foreground font-bold text-xl">{truncateAddress(fpassAddress)}</p>
              <Button
                variant="ghost"
                size="sm"
                className="p-1.5 h-6 w-6 rounded-md hover:bg-white/10"
                onClick={handleCopyFpassAddress}
              >
                <svg width="12" height="14" viewBox="0 0 12 14" className="text-white/70">
                  <g>
                    <path d={svgPaths.p31610a80} fill="currentColor" fillOpacity="0.72"/>
                    <path d={svgPaths.p36946880} fill="currentColor" fillOpacity="0.72"/>
                  </g>
                </svg>
              </Button>
            </div>
          </div>

          {/* Signed in with wallet */}
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground font-bold uppercase tracking-wide">Signed in with non-custodial wallet</p>
            <div className="flex items-center justify-between">
              <p className="text-foreground font-bold text-xl">{truncateAddress(walletAddress)}</p>
              <Button
                variant="ghost"
                size="sm"
                className="p-1.5 h-6 w-6 rounded-md hover:bg-white/10"
                onClick={handleCopyAddress}
              >
                <svg width="12" height="14" viewBox="0 0 12 14" className="text-white/70">
                  <g>
                    <path d={svgPaths.p31610a80} fill="currentColor" fillOpacity="0.72"/>
                    <path d={svgPaths.p36946880} fill="currentColor" fillOpacity="0.72"/>
                  </g>
                </svg>
              </Button>
            </div>
          </div>



          {/* Disconnect Button */}
          <Button
            variant="outline"
            className="w-full bg-[#141414] hover:bg-[#1a1a1a] text-white/70 hover:text-white rounded-[10px] border border-white/10 py-2.5"
            onClick={handleDisconnect}
          >
            Disconnect Wallet
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
