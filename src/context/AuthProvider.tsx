import React, { createContext } from 'react';
import AllStates from '../hooks/useAllState';
import { AuthProviderProps, AuthContextType } from '../types/Global.types';

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

function AuthProvider({ children }: AuthProviderProps) {
  const allContexts = AllStates();
  return <AuthContext.Provider value={allContexts}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
