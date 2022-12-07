import React, { useState } from 'react';

const initialState = 5;

const Counter = () => {
  const [count, setCount] = useState(initialState);

  return (
    <>
      <h1>Counts {count}</h1>
      <p>
        If the new state is computed using the previous state you can pass a
        function to setState. The function will receive the previous value, and
        return an updated value.
      </p>

      <button onClick={() => setCount(initialState)}>Reset</button>

      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>

      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>

      <button onClick={() => setCount((prevCount) => prevCount + 5)}>
        Plus Five
      </button>
    </>
  );
};

export default Counter;
