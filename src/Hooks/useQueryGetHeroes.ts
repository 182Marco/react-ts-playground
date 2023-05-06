import { useQuery } from "@tanstack/react-query";
import { IQueryObj } from "../models/mainModels";
import { fetchHeroes } from "../utils/api";

export const useQueryGetHeroes = (
  onSuccess: () => void,
  onError: () => void,
  isEnabled = true,
  id?: number | string
) => {
  return useQuery(["superHeores"], () => fetchHeroes(id), {
    enabled: isEnabled,
    onSuccess, // key and v same because of import
    onError,
    select: (data: { data: IQueryObj[] | IQueryObj }) => {
      console.log(
        `Here you can do something with the data like changeing format or log them ${data}`
      );
      return data;
    },
  });
};

export default useQueryGetHeroes;
