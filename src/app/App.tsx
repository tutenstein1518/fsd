import React from "react";
import { useEffect, useRef } from "react";
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

// if you want to try your code on the right panel
// remember to export App() component like below

export function App() {
  const [count, setCount] = React.useState(0);
  const prevCount = usePrevious(count);
  return (
    <div>
      <h1>Текущее значение: {count}</h1>
      <h2>Предыдущее значение: {prevCount}</h2>
      <button onClick={() => setCount(count + 1)}> Увеличить на 1 </button>
    </div>
  );
}
