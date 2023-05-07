import { useGetHeroById } from "../../Hooks/useQueryGetHeroes";
import { useParams } from "react-router";

export const SuperHeroDetails = () => {
  const { id } = useParams();

  const { isLoading, data, isError, error } = useGetHeroById(id);
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
          <h2>{data?.name}</h2>
          <h3>{data?.alterEgo}</h3>
        </>
      )}
    </>
  );
};

export default SuperHeroDetails;
