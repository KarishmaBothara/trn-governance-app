import { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick?: () => void;
}

export function FeatureCard({ icon: Icon, title, description, onClick }: FeatureCardProps) {
  return (
    <motion.div 
      className="bg-card rounded-xl p-3 border border-border cursor-pointer"
      onClick={onClick}
      whileHover={{ 
        scale: 1.02, 
        borderColor: 'rgba(255, 255, 255, 0.6)',
        y: -1
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="space-y-1">
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.15 }}
        >
          <Icon size={16} className="text-foreground" />
        </motion.div>
        <h4 className="text-foreground">{title}</h4>
        <p className="text-xs text-foreground">{description}</p>
      </div>
    </motion.div>
  );
}