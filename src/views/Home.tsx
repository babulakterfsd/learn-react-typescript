import React from 'react';
import Person from '../components/Person';

const Home = () => {
  const items: string[] = ['Bahar', 'Forid', 'Sona'];
  const nameHighlighter = (name: string): void => console.log(name);

  return (
    <div>
      <Person items={items} clickHandler={nameHighlighter} />
    </div>
  );
};

export default Home;
