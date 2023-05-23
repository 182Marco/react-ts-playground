import axios from "axios";
import {
  Color,
  IfetchById,
  IfetchByIdOrGetAll,
  IgetEndPoint,
} from "./api.models";

export const allSuperHersoEndPoint = `http://localhost:3000/superheroesdata`;
export const HeroStoresEndPoint = `http://localhost:3000/superHeroStores`;
export const SuppliersEndPoint = `http://localhost:3000/Suppliers`;
export const colorsEndPoint = (n = 1, lim = 10) =>
  `http://localhost:3000/colors?_limit=${lim}&_page=${n}`;

export const getEndPoint: IgetEndPoint = (endPoint, id = "") =>
  `${endPoint}/${id}`;

export const fetchHeroes: IfetchByIdOrGetAll = id =>
  axios.get(
    id ? getEndPoint(allSuperHersoEndPoint, id) : allSuperHersoEndPoint
  );

export const fetchStoresById: IfetchById = id =>
  axios.get(getEndPoint(HeroStoresEndPoint, id));

export const fetchSupplierById: IfetchById = id =>
  axios.get(getEndPoint(SuppliersEndPoint, id));

export const fetchColors = (n: number, limit: number) =>
  axios.get(colorsEndPoint(n, limit));
