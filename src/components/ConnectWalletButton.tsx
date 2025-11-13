import { Button } from './ui/button';
import { Wallet } from 'lucide-react';
import { motion } from 'motion/react';
import { useUser } from './UserContext';
import { useAuthUi } from "@futureverse/auth-ui";

interface ConnectWalletButtonProps {
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  children?: React.ReactNode;
}

export function ConnectWalletButton({
  className = "",
  variant = "default",
  size = "default",
  children = "Connect Wallet to Continue"
}: ConnectWalletButtonProps) {
  const { setUserRole } = useUser();
  const { openLogin } = useAuthUi();

  const handleConnectWallet = () => {
    openLogin();
    // In a real application, this would connect to a wallet
    // For now, we'll just set the user to standard-user
    setUserRole('standard-user');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 2 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Button
        onClick={handleConnectWallet}
        variant={variant}
        size={size}
        className={`${className} bg-primary text-primary-foreground hover:bg-primary/90`}
      >
        <Wallet className="w-4 h-4 mr-2" />
        {children}
      </Button>
    </motion.div>
  );
}
