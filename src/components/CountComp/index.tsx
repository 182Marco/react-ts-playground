import { useEffect, useRef, useState } from "react";
import './style.scss'

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
      <h2>Stale closure solved</h2>
      <p>2 ways</p>
      <ol>
        <li>With the default param of old state</li>
        <li>Storing the updated value inside a useRef()</li>
      </ol>
      <h1>{count}</h1>
    </div>
  );
};
export default CountComp;
