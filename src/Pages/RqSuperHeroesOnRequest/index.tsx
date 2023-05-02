import { useQuery } from "@tanstack/react-query";
import { Heroes } from "../../models/mainModels";
import { fetchHeroes } from "../../utils/api";
import "./style.scss";

const RqSuperHeroesOnRequest = () => {
  const { isLoading, fetchStatus, data, isError, error, refetch } = useQuery(
    ["superHeores"],
    fetchHeroes,
    {
      enabled: false,
    }
  );

  const heroes: Heroes = data?.data;

  return (
    <div className="RqSuperHeroesOnRequest">
      <button onClick={() => refetch()}>Fetch Heros</button>
      <h2>{isError && JSON.stringify(error)}</h2>
      <h2>{isLoading && fetchStatus !== "idle" && "loading..."}</h2>
      {heroes &&
        heroes.map(obj => (
          <h2 key={obj.id}>
            {obj.name} - alterego: {obj.alterEgo}
          </h2>
        ))}
    </div>
  );
};

export default RqSuperHeroesOnRequest;
