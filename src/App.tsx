import React, { useState } from 'react';


export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>count is: {count}</p>
      <button onClick={() => {
        setCount((count) => count - 1);
      }}>Decrement</button>
      <button onClick={() => {
        setCount((count) => count + 1);
      }}>Increment</button>
    </div>
  )
}
