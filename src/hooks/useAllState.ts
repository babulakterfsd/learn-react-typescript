import { useState } from 'react';
import { UserType } from '../types/Global.types';

const AllStates = () => {
  const [user, setUser] = useState<UserType>({} as UserType);
  const [loading, setLoading] = useState(false);
  const [btcAmount, setBtcAmount] = useState(0);

  const logout = () => {
    setUser({} as UserType);
  };

  return {
    user,
    setUser,
    loading,
    setLoading,
    logout,
    btcAmount,
    setBtcAmount,
  };
};

export default AllStates;
