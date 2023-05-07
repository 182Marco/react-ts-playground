import axios from "axios";

export const allSuperHersoEndPoint = `http://localhost:3000/superheroesdata`;

export const superHerosByIdEndPoint = (id: number | string) =>
  `${allSuperHersoEndPoint}/${id}`;

export const fetchHeroes = (id?: number | string) =>
  axios.get(id ? superHerosByIdEndPoint(id) : allSuperHersoEndPoint);
