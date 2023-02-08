import { useEffect, useRef, useState } from "react";

export const CountComp = (): JSX.Element => {
  // STALE CLOUSURE COMPONENT EXAMPLE SOLVED
  const [count, setCount] = useState(0);
  const contRef = useRef(0);
  contRef.current = count;
  // SOLUTION 2
  //useEffect(() => {
  //  const int = setInterval(() => setCount(c => c + 1), 1000);
  //  return () =>  clearInterval(int)
  //}, []);

  useEffect(() => {
    const int = setInterval(() => setCount(contRef.current + 1), 1000);
    return () =>  clearInterval(int)
  }, []);

  return (
    <div className="CountComp">
      <h1>{count}</h1>
    </div>
  );
};
export default CountComp;
