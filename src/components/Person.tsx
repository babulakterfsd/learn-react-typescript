import React, { useReducer } from 'react';

const INCREMENT = 'INCREMENT';
const INCREMENTBYAMOUNT = 'INCREMENTBYAMOUNT';
const RESET = 'RESET';
const DECREMENT = 'DECREMENT';

const initialState = { count: 0 };
type counterStateType = {
  count: number;
};

type IncrementActionType = { type: typeof INCREMENT };
type IncrementByAmountActionType = {
  type: typeof INCREMENTBYAMOUNT;
  payload: number;
};
type ResetActionType = { type: typeof RESET };
type DecrementActionType = { type: typeof DECREMENT };

type counterActionType =
  | IncrementActionType
  | DecrementActionType
  | ResetActionType
  | IncrementByAmountActionType;

const reducer = (state: counterStateType, action: counterActionType) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case INCREMENTBYAMOUNT:
      return { count: state.count + action.payload };
    case RESET:
      return { count: 0 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const Persons = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='h-screen flex justify-center items-center flex-col text-center'>
      <h1 className='text-2xl'>{state.count}</h1>
      <div className='flex mt-8'>
        <button
          className='bg-green-300 text-green-500 p-1 rounded-md'
          onClick={() => {
            dispatch({ type: INCREMENT });
          }}
        >
          increment
        </button>
        <button
          className='bg-green-300 text-green-500 p-1 rounded-md mx-4'
          onClick={() => {
            dispatch({ type: INCREMENTBYAMOUNT, payload: 5 });
          }}
        >
          increment by 5
        </button>
        <button
          className='bg-pink-300 text-pink-500 p-1 rounded-md mx-4'
          onClick={() => {
            dispatch({ type: RESET });
          }}
        >
          reset
        </button>
        <button
          className='bg-red-300 text-red-500 p-1 rounded-md'
          onClick={() => {
            dispatch({ type: DECREMENT });
          }}
        >
          decrement
        </button>
      </div>
    </div>
  );
};

export default Persons;
