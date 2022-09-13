import React from 'react';

const Persons = ({
  items,
  clickHandler,
}: {
  items: string[];
  clickHandler: (name: string) => void;
}) => {
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
