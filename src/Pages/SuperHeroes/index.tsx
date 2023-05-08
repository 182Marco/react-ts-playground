import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { allSuperHersoEndPoint } from "../../utils/api";
import "./style.scss";

const SuperHeroes = () => {
  const { isLoading, isErrror, error, data } = useFetch(allSuperHersoEndPoint);

  const [selected, setselected] = useState<string[]>([]);

  return (
    <div className="superHeroes">
      {isErrror && error}
      {isLoading && "loading..."}
      {data &&
        data.map(obj => (
          <pre
            className={selected.includes(obj.id) ? "selected" : ""}
            key={obj.id}
            onClick={() =>
              selected.includes(obj.id)
                ? setselected([...selected.filter(e => e !== obj.id)])
                : setselected([...selected, obj.id])
            }
          >
            {obj.name}
          </pre>
        ))}
      <Link to={`/dinamic-parallel-queries/${selected.join("-")}`}>
        Go to details of selected heroes
      </Link>
    </div>
  );
};

export default SuperHeroes;
