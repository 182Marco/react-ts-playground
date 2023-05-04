import useFetch from "../../Hooks/useFetch";
import { superHeroEndPoint } from "../../utils/api";
import "./style.scss";

const SuperHeroes = () => {
  const { isLoading, isErrror, error, data } = useFetch(superHeroEndPoint);

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
