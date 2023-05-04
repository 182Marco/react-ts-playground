import useQueryGetHeroes from "../../Hooks/useQueryGetHeroes";
import { onError, onSuccess } from "./utils";
import "./style.scss";

const RqSuperHeroesOnRequest = () => {
  const { isLoading, fetchStatus, data, isError, error, refetch } =
    useQueryGetHeroes(onSuccess, onError, false);

  return (
    <div className="RqSuperHeroesOnRequest">
      <button onClick={() => refetch()}>Fetch Heros</button>
      <h2>{isError && JSON.stringify(error)}</h2>
      <h2>{isLoading && fetchStatus !== "idle" && "loading..."}</h2>
      {data &&
        data.map(obj => (
          <h2 key={obj.index}>
            {`(${++obj.index})`} {obj.name} - alterego: {obj.alterEgo}
          </h2>
        ))}
    </div>
  );
};

export default RqSuperHeroesOnRequest;
