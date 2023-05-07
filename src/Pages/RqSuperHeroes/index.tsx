import { useQuery } from "@tanstack/react-query";
import { Heroes } from "../../models/mainModels";
import { fetchHeroes } from "../../utils/api";
import "./style.scss";

const RqSuperHeroes = () => {
  const { isLoading, data, isError, error } = useQuery(
    ["superHeores", "2"],
    () => fetchHeroes(),
    {
      staleTime: 30000,
    }
  );

  const heroes: Heroes = data?.data;

  return (
    <div className="RqSuperHeroes">
      <h2>{isError && JSON.stringify(error)}</h2>
      <h2>{isLoading && "loading..."}</h2>
      {heroes?.map(obj => (
        <h2 key={obj.id}>
          {obj.name} - alterego: {obj.alterEgo}
        </h2>
      ))}
    </div>
  );
};

export default RqSuperHeroes;
