import useAuth from '../hooks/useAuth';

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div className='flex justify-around h-screen items-center'>
      <p>Welcome, {user?.email}</p>
    </div>
  );
};

export default Dashboard;
