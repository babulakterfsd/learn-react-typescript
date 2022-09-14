import React from 'react';

interface userType {
  name: string;
  age: number;
  languages: string[];
}

type personProps = {
  user: userType;
};

const Persons = ({ user }: personProps) => {
  const { name, age, languages } = user;

  return (
    <div className='h-screen flex justify-center items-center flex-col text-center'>
      <div className='h-56 w-[400] p-5 rounded-md bg-slate-500 text-white'>
        <h2 className='text-lg'>{name}</h2>
        <p className='text-md'>{age}</p>
        <div className='flex justify-center items-center'>
          {languages.map((language: string, index: number) => (
            <p
              className='text-sm mx-2 bg-green-300 text-green-600 rounded-md py-0.5 px-1 font-semibold'
              key={index}
            >
              {language}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Persons;
