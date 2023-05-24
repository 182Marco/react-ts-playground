import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "../../Hooks/useIntersectionObserver";
import { fetchColors } from "../../utils/api";
import { Color } from "../../utils/api.models";
import "./style.scss";

export const PaginatedQueries = () => {
  const [paginationNum] = useState(1);
  const elOnPagebuttom = useRef<HTMLSpanElement>(null);
  const { isIntersecting } = useIntersectionObserver(elOnPagebuttom, {}) || {};

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
    () => fetchColors(paginationNum, 10),
    {
      getNextPageParam: (lastPage, pages) => pages.length + 1,
    }
  );

  useEffect(() => {
    if (isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  }, [isIntersecting, hasNextPage]);

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
      <span ref={elOnPagebuttom}></span>
    </div>
  );
};

export default PaginatedQueries;
