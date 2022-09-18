import React, { useState } from 'react';

type authUser = {
  name: string;
};

const User = () => {
  const [user, setUser] = useState<authUser | null>(null);
  const handleLogin = () => {
    setUser({
      name: 'John Doe',
    });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <p>{user?.name ? user?.name : 'Guest'}</p>
      {!user?.name && (
        <button onClick={() => handleLogin()} className='mx-2'>
          Login
        </button>
      )}
      {user?.name && (
        <button onClick={() => handleLogout()} className='mx-2'>
          Logout{' '}
        </button>
      )}
    </div>
  );
};

export default User;
