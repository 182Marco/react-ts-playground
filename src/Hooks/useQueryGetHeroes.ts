import { useQuery } from "@tanstack/react-query";
import { IQueryObj } from "../models/mainModels";
import { fetchHeroes } from "../utils/api";

export const useQueryGetHeroes = (
  onSuccess: () => void,
  onError: () => void,
  isEnabled = true
) => {
  return useQuery(["superHeores", 1], () => fetchHeroes(), {
    enabled: isEnabled,
    onSuccess, // key and v same because of import
    onError,
    select: ({ data }: { data: IQueryObj[] }) => {
      console.log(
        `Here you can do something with the data like changeing format or log them ${data}`
      );
      return data;
    },
  });
};

export const useGetHeroById = (id: number | string) => {
  return useQuery(["superHeores", id], () => fetchHeroes(id), {
    select: ({ data }): IQueryObj => data,
  });
};
