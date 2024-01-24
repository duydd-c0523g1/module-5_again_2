import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((number) => number + 1);
  }

  function decrement() {
    setCount((number => number - 1))
  }

  function reset() {
    setCount(() => 0);
  }

  return (
    <div>
      <h1>Đếm: {count}</h1>
      <button onClick={() => increment()}>+1</button>
      <button onClick={() => {
        increment();
        increment();
      }}>+2</button>
      <button onClick={() => decrement()}>-1</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}
export default Counter