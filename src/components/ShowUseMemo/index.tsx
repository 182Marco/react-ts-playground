import { useState, useMemo } from "react";
import "./style.scss";

export const ShowUseMemo = () => {
  const [reRender, triggerReRender] = useState(false);
  const [ar, setAr] = useState([1, 2, 3, 4]);

  const getLargest = () => {
    console.log("function get Largest() is working");
    return Math.max(...ar);
  };

  const memorized = useMemo(() => getLargest(), [ar]);

  return (
    <div className="ShowUseMemo">
      <h2>Use memo Demonstration</h2>
      <pre>
        Largest Number: <em>{memorized}</em>
      </pre>
      <p>
        To re-render the component which displays the largest number through a
        fn here above, toggle the unrelated piece of state clicking this btn:
      </p>
      <button onClick={() => triggerReRender(v => !v)}>re-render</button>
      <p>
        If it does't trigger the 'working' conole.log() it means that useMemo is
        doing his job
      </p>
      <p>
        Anyway use memo has the number[] as a dependency, so se what happens if
        you trigger the dipendencie by adding somthing to it with the following
        btn:
      </p>
      <button onClick={() => setAr(ar => [...ar, ar.length + 1])}>
        add a number to the array
      </button>
    </div>
  );
};

export default ShowUseMemo;
