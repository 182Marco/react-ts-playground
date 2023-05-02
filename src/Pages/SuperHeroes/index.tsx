import useFetch from "../../MyHooks/useFetch";
import "./style.scss";

const SuperHeroes = () => {
  const { isLoading, isErrror, error, data } = useFetch(
    "http://localhost:3000/superheroesdata"
  );

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
