import { useQueries } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchHeroes } from "../../utils/api";

export const DinamicParallelQueries = () => {
  const { ids } = useParams();

  const formattedIds = ids?.split("-") || [];

  const Heros = useQueries({
    queries: formattedIds.map(n => ({
      queryKey: ["superHero", n],
      queryFn: () => fetchHeroes(n),
    })),
  });

  return <>{Heros.map(e => JSON.stringify(e.data?.data))}</>;
};

export default DinamicParallelQueries;
