import React, { useState, createContext, useContext } from 'react';

export const CounterContext = createContext();

const CounterProvider = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(c => c + 1);
  const decrement = () => setCounter(c => c - 1);

  return (
    <CounterContext.Provider value={{ counter, increment, decrement }}>
      <Counter />
    </CounterContext.Provider>
  );
};

export const Counter = () => {
  const { counter, increment, decrement } = useContext(CounterContext);
  
  return (
    <>
      <h1 data-testid='counter'>{counter}</h1>
      <button data-testid='button-up' onClick={increment}>Up</button>
      <button data-testid='button-down' onClick={decrement}>Down</button>
    </>
  );
};

export default CounterProvider;