import { Button } from './ui/button';
import { motion } from 'motion/react';
import { ProfileModal } from './ProfileModal';
import { ConnectWalletButton } from './ConnectWalletButton';
import { Menu } from 'lucide-react';
// import { useUser } from './UserContext';
import Root from '../imports/Root-99-709';
import { useAuth } from "@futureverse/auth-react";
// import { useTrnApi } from "@futureverse/transact-react";
import { useRootBalanceInfo } from "@/hooks/useRootBalance";
import { formatBalance } from "@/lib/utils";
import { useSigner } from "@/hooks/useSigner";

interface TopBarProps {
  onMobileMenuToggle?: () => void;
}


export function TopBar({ onMobileMenuToggle }: TopBarProps) {
  // const { isLoggedIn } = useUser();
  const signer = useSigner();
  const { userSession } = useAuth();
  const { data: rootBalance, /*isLoading*/ } = useRootBalanceInfo();
  console.log("userSession.user::",userSession?.user);
  let address: string = "";
  let fpassAddress: string = "";
  let profileName: string = "";
  if (userSession) {
    address = userSession?.eoa?.toString();
    fpassAddress = userSession?.futurepass?.toString();
    profileName= (userSession.user?.profile?.profile as any)?.selectedProfile?.displayName || "User";

  }
  //
  // const {
  //   data: pools,
  //   isFetching: isFetchingPools,
  //   isLoading: isLoadingPools,
  // } = useRootBalanceInfo();


  return (
    <motion.div
      className="flex justify-between items-center gap-4 p-4 md:px-8 md:pt-8 pb-0"
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 0.1 }}
    >
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={onMobileMenuToggle}
          className="p-2"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Right side content */}
      <div className="flex items-center gap-4 ml-auto">
        {/* Root Amount Display - Only show for logged in users */}
        {userSession && (
          <motion.div
            className="text-foreground text-sm font-medium hidden sm:block"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 0.15 }}
          >

            <span className="font-bold flex items-center gap-1">{formatBalance(rootBalance)} <span className="inline-block w-4 h-4"><Root /></span></span>
          </motion.div>
        )}

        {/* Profile Modal for logged in users OR Connect Wallet button for logged out users */}
        {userSession ? (
          <ProfileModal
            profileName={profileName}
            walletAddress={address}
            fpassAddress={fpassAddress}
            trigger={
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
              >
                <Button
                  variant="outline"
                  className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-full px-3 md:px-6 py-2"
                >
                  {profileName}
                </Button>
              </motion.div>
            }
          />
        ) : (
          <ConnectWalletButton
            variant="outline"
            className="rounded-full px-3 md:px-6 py-2"
          >
            Connect Wallet
          </ConnectWalletButton>
        )}
      </div>
    </motion.div>
  );
}

