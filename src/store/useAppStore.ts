import { create } from 'zustand';

export interface UserSession {
  userId: string;
  name: string;
  role: 'Underwriter' | 'ClaimsAnalyst' | 'Auditor' | 'Admin';
  token: string;
}

interface AppStoreState {
  session: UserSession | null;
  activeModule: string;
  setSession: (session: UserSession | null) => void;
  setActiveModule: (moduleName: string) => void;
}

// Singleton state accessible across federated remote modules
export const useAppStore = create<AppStoreState>((set) => ({
  session: {
    userId: 'usr_840192',
    name: 'Ashutosh Moralwar',
    role: 'Admin',
    token: 'jwt_mock_token_9381',
  },
  activeModule: 'reinsurance',
  setSession: (session) => set({ session }),
  setActiveModule: (activeModule) => set({ activeModule }),
}));
