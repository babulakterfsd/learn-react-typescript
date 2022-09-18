import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  return (
    <div className='absolute right-0 top-0'>
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
