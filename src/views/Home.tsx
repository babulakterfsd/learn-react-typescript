import React, { useState } from 'react';
import Counter from '../components/Counter';

const Home = () => {
  return (
    <div className='flex justify-around'>
      <Counter />
    </div>
  );
};

export default Home;
