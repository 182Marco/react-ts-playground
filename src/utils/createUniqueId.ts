import { IQueryObj } from "../models/mainModels";
import { genRandom } from "./number";

export const createUniqueId = (ar: IQueryObj[]): number => {
  let res: number | undefined;
  while (ar.find(obj => obj.id === res)) {
    res = genRandom();
  }
  return res || genRandom();
};
