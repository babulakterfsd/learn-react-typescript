import useAuth from '../hooks/useAuth';
import { userListType } from '../types/Global.types';
import UsersList from './UsersList';

const userList: userListType[] = [
  {
    name: 'John',
    btc: 10,
  },
  {
    name: 'Jane',
    btc: 3,
  },
  {
    name: 'Jack',
    btc: 5,
  },
];

const Dashboard = () => {
  const { user, setBtcAmount } = useAuth();
  const handleBTC = () => {
    setBtcAmount((prev) => prev + 1);
  };
  return (
    <div className='flex justify-center h-screen items-center flex-col'>
      <p>Welcome, {user.email}</p>
      <button onClick={() => handleBTC()} className='py-0.5 px-1 bg-green-300 text-green-600 mb-12'>
        Earn BTC
      </button>
      <UsersList currentUserList={userList} onClick={(user) => alert(user.name)} />
    </div>
  );
};

export default Dashboard;
