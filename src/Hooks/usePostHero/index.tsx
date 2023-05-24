import { useMutation } from "@tanstack/react-query";
import { postHero } from "../../utils/api";

export const usePostHero = () => {
  return useMutation(postHero);
};

export default usePostHero;
