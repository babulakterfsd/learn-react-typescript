import { useState } from 'react';

type UserType = {
  email: string;
  password: string;
};

const AllStates = () => {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(false);
  const [btcAmount, setBtcAmount] = useState(0);

  const logout = () => {
    setUser(null);
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
