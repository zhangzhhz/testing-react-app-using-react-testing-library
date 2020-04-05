import React, { useState } from 'react';

const TestElement = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1 data-testid='counter'>{ counter }</h1>
      <button data-testid='button-up' onClick={() => setCounter(c => c + 1)}>Up</button>
      <button disabled data-testid='button-down' onClick={() => setCounter(c => c - 1)}>Down</button>
    </>
  );
};

export default TestElement;