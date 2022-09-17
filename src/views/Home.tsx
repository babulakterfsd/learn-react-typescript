import React, { useState } from 'react';
import Counter from '../components/Counter';
import User from '../components/User';

const Home = () => {
  return (
    <div className='flex justify-around h-screen items-center'>
      <User />
    </div>
  );
};

export default Home;
