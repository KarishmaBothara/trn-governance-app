import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger } from './ui/select';
import { Badge } from './ui/badge';
import { useUser, UserRole } from './UserContext';
import {
  ChevronUp,
  ChevronDown
} from 'lucide-react';

const roleConfig = {
  'council-member': {
    label: 'Council Member',
    description: 'Full governance access'
  },
  'delegate': {
    label: 'Delegate',
    description: 'Voting on behalf of others'
  },
  'standard-user': {
    label: 'Standard User',
    description: 'Basic governance access'
  },
  'logged-out': {
    label: 'Not Connected',
    description: 'Connect wallet to participate'
  }
};

export function UserRoleSelector() {
  const { userRole, setUserRole } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const currentRole = roleConfig[userRole];

  const handleRoleChange = (newRole: string) => {
    setUserRole(newRole as UserRole);
    setIsOpen(false);
  };

  return (
    <div className="p-4 border-t border-border">
      <Select
        value={userRole}
        onValueChange={handleRoleChange}
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <SelectTrigger className="w-full bg-sidebar border-sidebar-border hover:bg-sidebar/80 transition-colors">
          <div className="flex items-center w-full">
            <div className="flex-1 text-left">
              <div className="flex items-center gap-2">
                <span className="text-sidebar-foreground font-medium text-sm">
                  {currentRole.label}
                </span>
                {userRole === 'council-member' && (
                  <Badge className="bg-chart-4/20 text-chart-4 text-xs px-1.5 py-0.5">
                    Council
                  </Badge>
                )}
                {userRole === 'delegate' && (
                  <Badge className="bg-chart-5/20 text-chart-5 text-xs px-1.5 py-0.5">
                    Delegate
                  </Badge>
                )}
              </div>
              <p className="caption text-muted-foreground">
                {currentRole.description}
              </p>
            </div>
            {isOpen ? (
              <ChevronUp className="w-4 h-4 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            )}
          </div>
        </SelectTrigger>

        <SelectContent className="w-full bg-popover border-border">
          {Object.entries(roleConfig).map(([role, config]) => {
            return (
              <SelectItem
                key={role}
                value={role}
                className="cursor-pointer hover:bg-accent focus:bg-accent"
              >
                <div className="flex items-center w-full">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-foreground font-medium text-sm">
                        {config.label}
                      </span>
                      {role === 'council-member' && (
                        <Badge className="bg-chart-4/20 text-chart-4 text-xs px-1.5 py-0.5">
                          Council
                        </Badge>
                      )}
                      {role === 'delegate' && (
                        <Badge className="bg-chart-5/20 text-chart-5 text-xs px-1.5 py-0.5">
                          Delegate
                        </Badge>
                      )}
                    </div>
                    <p className="caption text-muted-foreground">
                      {config.description}
                    </p>
                  </div>
                </div>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}
