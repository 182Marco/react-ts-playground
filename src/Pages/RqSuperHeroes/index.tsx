import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Heroes } from "../../models/mainModels";
import "./style.scss";

const fetchHeroes = () => axios.get("http://localhost:3000/superheroesdata");

const RqSuperHeroes = () => {
  const { isLoading, data, isError, error } = useQuery(
    ["superHeores"],
    fetchHeroes
  );

  const heroes: Heroes = data?.data;

  return (
    <div className="RqSuperHeroes">
      <h2>{isError && JSON.stringify(error)}</h2>
      <h2>{isLoading && "loading..."}</h2>
      {heroes &&
        heroes.map(obj => (
          <h2 key={obj.id}>
            {obj.name} - alterego: {obj.alterEgo}
          </h2>
        ))}
    </div>
  );
};

export default RqSuperHeroes;
