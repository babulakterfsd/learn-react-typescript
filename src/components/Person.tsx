import React from 'react';

type personProps = {
  items: string[];
  clickHandler: (name: string) => void;
};

const Persons = ({ items, clickHandler }: personProps) => {
  return (
    <div className='h-screen flex justify-center items-center flex-col'>
      {items.map((item, index) => (
        <button
          type='button'
          key={index}
          className='bg-black text-white p-2 rounded-md my-2'
          onClick={() => clickHandler(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Persons;
