import { useQueries } from "@tanstack/react-query";
import { fetchHeroes } from "../../utils/api";

export const DinamicParallelQueries = ({ ids }: { ids: number[] }) => {
  const queryRes = useQueries({
    queries: ids.map(n => ({
      queryKey: ["superHero", n],
      queryFn: () => fetchHeroes(n),
    })),
  });

  console.log(`queryRes --->  `, queryRes);

  return <>DinamicParallelQueries</>;
};

export default DinamicParallelQueries;
