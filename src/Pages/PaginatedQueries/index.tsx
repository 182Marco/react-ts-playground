import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchColors } from "../../utils/api";
import { Color } from "../../utils/api.models";
import "./style.scss";

export const PaginatedQueries = () => {
  const [paginationNum, setPaginationNum] = useState(1);

  const { isLoading, isError, data } = useQuery(["colors", paginationNum], () =>
    fetchColors(paginationNum)
  );

  const colors: Color[] | undefined = data?.data;

  console.log(`marcom ---> data: `, data);

  return (
    <div className="paginatedQueries">
      <h1>Paginated Queries</h1>
      <header>
        <button
          onClick={() => setPaginationNum(s => s - 1)}
          disabled={paginationNum < 2}
        >
          prev page
        </button>
        <button onClick={() => setPaginationNum(s => s + 1)}>
          next page page
        </button>
      </header>
      {isLoading && <h2>is Loading ...</h2>}
      {isError && <h2>There is an Error</h2>}
      {colors &&
        colors.map(obj => (
          <pre key={obj.id}>
            {obj.name}: {obj.hex}
          </pre>
        ))}
    </div>
  );
};

export default PaginatedQueries;
