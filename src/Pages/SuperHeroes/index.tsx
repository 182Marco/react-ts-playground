import useFetch from "../../Hooks/useFetch";
import { allSuperHersoEndPoint } from "../../utils/api";
import "./style.scss";

const SuperHeroes = () => {
  const { isLoading, isErrror, error, data } = useFetch(allSuperHersoEndPoint);

  return (
    <div className="superHeroes">
      {isErrror && error}
      {isLoading && "loading..."}
      {data &&
        data.map(obj => (
          <pre key={obj.id}>
            {obj.name} - alterego: {obj.alterEgo}
          </pre>
        ))}
    </div>
  );
};

export default SuperHeroes;
