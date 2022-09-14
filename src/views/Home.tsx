import React from 'react';
import Person from '../components/Person';

const user = {
  name: 'John Doe',
  age: 25,
  languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'],
};
const user2 = {
  name: 'Babul Akter',
  age: 30,
  languages: ['JavaScript', 'TypeScript', 'React', 'Java', 'C++'],
};

const Home = () => {
  return (
    <div className='flex justify-around'>
      <Person user={user} />
      <Person user={user2} />
    </div>
  );
};

export default Home;
