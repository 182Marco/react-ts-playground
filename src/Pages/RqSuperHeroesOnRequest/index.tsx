import { useQueryGetHeroes } from "../../Hooks/useQueryGetHeroes";
import { onError, onSuccess } from "./utils";
import "./style.scss";
import { Link } from "react-router-dom";

const RqSuperHeroesOnRequest = () => {
  const { isLoading, fetchStatus, data, isError, error, refetch } =
    useQueryGetHeroes(onSuccess, onError, false);

  return (
    <div className="RqSuperHeroesOnRequest">
      <button onClick={() => refetch()}>Fetch Heros</button>
      <h2>{isError && JSON.stringify(error)}</h2>
      <h2>{isLoading && fetchStatus !== "idle" && "loading..."}</h2>
      {data &&
        data?.map(obj => (
          <Link to={`/super-heros-details/${obj.id}`} key={obj.id}>
            <h2>
              {`(${obj.id})`} {obj.name}
            </h2>
          </Link>
        ))}
    </div>
  );
};

export default RqSuperHeroesOnRequest;
