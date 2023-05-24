import { useQueryGetHeroes } from "../../Hooks/useQueryGetHeroes";
import { onError, onSuccess } from "./utils";
import "./style.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { genRandom } from "../../utils/number";
import { createUniqueId } from "../../utils/createUniqueId";
import { IQueryObj } from "../../models/mainModels";
import usePostHero from "../../Hooks/usePostHero";

const RqSuperHeroesOnRequest = () => {
  const { isLoading, fetchStatus, data, isError, error, refetch } =
    useQueryGetHeroes(onSuccess, onError, false);

  const [newHero, setNewHero] = useState<IQueryObj>({
    id: data ? createUniqueId(data) : genRandom(),
    name: "",
    alterEgo: "",
  });

  const printHero = () => console.log(`marcom ---> newHero: `, newHero);
  const {
    mutate: addHero,
    isLoading: isPosting,
    isError: isErrorPost,
  } = usePostHero();

  return (
    <div className="RqSuperHeroesOnRequest">
      <header>
        <input
          type="text"
          placeholder="Type in super hero name"
          onChange={e => setNewHero(s => ({ ...s, name: e.target.value }))}
        />
        <input
          type="text"
          placeholder="Type in super hero alterEgo"
          onChange={e => setNewHero(s => ({ ...s, alterEgo: e.target.value }))}
        />
        <button
          onClick={() => {
            printHero();
            addHero(newHero);
          }}
        >
          Save hero
        </button>
        <button onClick={() => refetch()} disabled={isPosting}>
          Fetch Heros
        </button>
      </header>
      {isPosting && <p>... posting the new hero</p>}
      {isErrorPost && <p>... there has been an error posting the new hero</p>}
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
