import { useState } from "react";
import "./style.scss";
import rest from "../../utils/rest";

export const React18 = () => {
  const [pieceOfstate1, setPieceOfstate1] = useState(0);
  const [pieceOfstate2, setPieceOfstate2] = useState(0);

  const doubleUpdater = async () => {
    await rest(500);
    setPieceOfstate1(1);
    setPieceOfstate1(2);
  };

  console.log(
    "pieceOfstate1: ",
    pieceOfstate1,
    "pieceOfstate2: ",
    pieceOfstate2
  );

  return (
    <div className="React18">
      <h2>Demo react 18 (2022)</h2>
      <button onClick={doubleUpdater}>
        update 2 states and re-render once
      </button>
    </div>
  );
};

export default React18;
