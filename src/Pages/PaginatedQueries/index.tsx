import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchColors } from "../../utils/api";
import { Color } from "../../utils/api.models";
import "./style.scss";

export const PaginatedQueries = () => {
  const [paginationNum, setPaginationNum] = useState(1);

  const {
    isLoading,
    isError,
    data,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ["colors", paginationNum],
    () => fetchColors(paginationNum, 5),
    {
      getNextPageParam: (lastPage, pages) => pages.length + 1,
    }
  );

  return (
    <div className="paginatedQueries">
      <h1>Infinite scroll query</h1>
      {isLoading && <h2>is Loading ...</h2>}
      {isError && <h2>There is an Error</h2>}
      {data &&
        data?.pages.map((ar, i) => (
          <div key={i}>
            {ar.data.map((e: Color) => (
              <h4 key={e.id}>
                <em>{e.name}: </em>
                <span>{e.hex}</span>
              </h4>
            ))}
          </div>
        ))}
      {isFetchingNextPage && <h2>...loading</h2>}
      <button disabled={!hasNextPage} onClick={() => fetchNextPage()}>
        load more
      </button>
    </div>
  );
};

export default PaginatedQueries;
