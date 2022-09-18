import React, { createContext } from 'react';
import AllStates from '../hooks/useAllState';

type AuthProviderProps = {
  children: React.ReactNode;
};

type UserType = {
  email: string;
  password: string;
};

type AuthContextType = {
  user: any;
  loading: boolean;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

function AuthProvider({ children }: AuthProviderProps) {
  const allContexts = AllStates();
  return <AuthContext.Provider value={allContexts}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
