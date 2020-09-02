import React, { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(props.initialValue);

  function decrement() {
    setCount(count - 1);
  }

  function increment() {
    setCount(count + 1);
  }

  function reset() {
    setCount(props.initialValue);
  }

  return (
    <div>
      <div className={count < 0 ? "text-danger" : undefined}>{count}</div>
      <button type="button" onClick={decrement}>
        -
      </button>
      <button type="button" onClick={increment}>
        +
      </button>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
