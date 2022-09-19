import useAuth from '../hooks/useAuth';

const Dashboard = () => {
  const { user, setBtcAmount } = useAuth();
  const handleBTC = () => {
    setBtcAmount((prev) => prev + 1);
  };
  return (
    <div className='flex justify-around h-screen items-center'>
      <p>Welcome, {user.email}</p>
      <button onClick={() => handleBTC()} className='py-0.5 px-1 bg-green-300 text-green-600'>
        Earn BTC
      </button>
    </div>
  );
};

export default Dashboard;