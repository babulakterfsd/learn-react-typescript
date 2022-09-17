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
      <button onClick={() => handleLogin()} className='mx-2'>
        Login
      </button>
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
};

export default User;
