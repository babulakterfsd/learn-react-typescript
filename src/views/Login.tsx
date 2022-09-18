import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {
  const { user, setUser } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const loggingUser = { email, password };
    setUser(loggingUser);
    navigate('/dashboard', { replace: true });
  };

  return (
    <div className='flex justify-around h-screen items-center'>
      <form>
        <input
          type='email'
          placeholder='email'
          name='email'
          className='border-2 mr-2'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='passwprd'
          name='password'
          className='border-2 mr-2'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type='submit'
          className='py-0.5 px-1 bg-green-300 text-green-600'
          onClick={(e) => handleLogin(e)}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
