export type UserType = {
  email: string;
  password: string;
};

export type AuthProviderProps = {
  children: React.ReactNode;
};

export type AuthContextType = {
  user: UserType;
  loading: boolean;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  logout: () => void;
  btcAmount: number;
  setBtcAmount: React.Dispatch<React.SetStateAction<number>>;
};

export type userListType = {
  name: string;
  btc: number;
};
