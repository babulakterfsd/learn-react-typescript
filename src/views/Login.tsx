import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {
  const { setUser } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [timer, setTimer] = useState(0);
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);

  const intervalRef = useRef<number | null>(null);
  const stopTimer = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const loggingUser = { email, password };
    setUser(loggingUser);
    navigate('/dashboard', { replace: true });
  };

  return (
    <div className='flex justify-around h-screen items-center flex-col'>
      <h1>{timer}</h1>
      <button onClick={() => stopTimer()}>stop timer</button>
      <form>
        <input
          type='email'
          placeholder='email'
          name='email'
          className='border-2 mr-2 focus:outline-none'
          ref={emailRef}
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
