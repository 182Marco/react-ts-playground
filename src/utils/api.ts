import axios from "axios";
import { IfetchById, IfetchByIdOrGetAll, IgetEndPoint } from "./api.models";

export const allSuperHersoEndPoint = `http://localhost:3000/superheroesdata`;
export const HeroStoresEndPoint = `http://localhost:3000/superHeroStores`;
export const SuppliersEndPoint = `http://localhost:3000/Suppliers`;

export const getEndPoint: IgetEndPoint = (endPoint, id = "") =>
  `${endPoint}/${id}`;

export const fetchHeroes: IfetchByIdOrGetAll = id =>
  axios.get(
    id ? getEndPoint(allSuperHersoEndPoint, id) : allSuperHersoEndPoint
  );

export const fetchStoresById: IfetchById = id => {
  return axios.get(getEndPoint(HeroStoresEndPoint, id));
};

export const fetchSupplierById: IfetchById = id => {
  return axios.get(getEndPoint(SuppliersEndPoint, id));
};
