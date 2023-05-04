import { useQuery } from "@tanstack/react-query";
import { IQueryObj } from "../models/mainModels";
import { fetchHeroes } from "../utils/api";

export const useQueryGetHeroes = (
  onSuccess: () => void,
  onError: () => void,
  isEnabled = true
) => {
  return useQuery(["superHeores"], fetchHeroes, {
    enabled: isEnabled,
    onSuccess, // key and v same because of import
    onError,
    select: (data: { data: IQueryObj[] }) =>
      data.data.map((obj, index) => ({ ...obj, index })),
  });
};

export default useQueryGetHeroes;
