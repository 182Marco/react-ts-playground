import useQueryGetHeroes from "../../Hooks/useQueryGetHeroes";
import { onError, onSuccess } from "../RqSuperHeroesOnRequest/utils";
import { useParams } from "react-router";

export const SuperHeroDetails = () => {
  const params = useParams();
  console.log(`params.id --->  `, params.id);
  const { isLoading, data, isError, error } = useQueryGetHeroes(
    onSuccess,
    onError,
    true,
    params.id
  );
  console.log(`data in detail page --->  `, data);
  return (
    <>
      {isError && (
        <h2>
          <>Sorry my dear user, this error occurred : {error}</>
        </h2>
      )}
      {isLoading ? (
        <h2>...isLoading </h2>
      ) : (
        <>
          {!Array.isArray(data?.data) && (
            <>
              <h2>{data?.data?.name}</h2>
              <h2>{data?.data?.alterEgo}</h2>
              <h3></h3>
            </>
          )}
        </>
      )}
    </>
  );
};

export default SuperHeroDetails;
