import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
  const { user, logout, btcAmount, setBtcAmount } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setBtcAmount(0);
    navigate('/', { replace: true });
  };

  return (
    <div className='absolute right-0 top-0'>
      <button className='bg-lime-300 text-lime-800 p-2 rounded-full font-semibold cursor-none'>
        {btcAmount}
      </button>
      <Link to='/'>
        <button className='p-2'>Home</button>
      </Link>
      {user?.email ? (
        <button className='p-2' onClick={() => handleLogout()}>
          Logout
        </button>
      ) : (
        <Link to='/login'>
          <button className='p-2'>Login</button>
        </Link>
      )}
      <Link to='/dashboard'>
        <button className='p-2'>Dashboard</button>
      </Link>
    </div>
  );
};

export default Navbar;
