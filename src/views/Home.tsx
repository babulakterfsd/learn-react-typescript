import React, { useState } from 'react';
import Person from '../components/Person';

const Home = () => {
  return (
    <div className='flex justify-around'>
      <Person />
    </div>
  );
};

export default Home;
