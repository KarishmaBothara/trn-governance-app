import { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'council-member' | 'delegate' | 'standard-user' | 'logged-out';

interface UserProfile {
  name: string;
  address: string;
  discordHandle?: string;
  twitterHandle?: string;
}

interface UserContextType {
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  isLoggedIn: boolean;
  isCouncilMember: boolean;
  isDelegate: boolean;
  isStandardUser: boolean;
  userProfile: UserProfile | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [userRole, setUserRole] = useState<UserRole>('logged-out');

  const isLoggedIn = userRole !== 'logged-out';
  const isCouncilMember = userRole === 'council-member';
  const isDelegate = userRole === 'delegate';
  const isStandardUser = userRole === 'standard-user';

  // Mock user profile data - in a real app this would come from authentication/profile service
  const userProfile: UserProfile | null = isLoggedIn ? {
    name: 'Alex Chen',
    address: '0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t',
    discordHandle: 'alexchen#1234',
    twitterHandle: '@alexchen_dev'
  } : null;

  return (
    <UserContext.Provider value={{
      userRole,
      setUserRole,
      isLoggedIn,
      isCouncilMember,
      isDelegate,
      isStandardUser,
      userProfile
    }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}