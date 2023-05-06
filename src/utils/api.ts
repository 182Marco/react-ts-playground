import axios from "axios";

export const superHeroEndPoint = (id?: number | string) =>
  `http://localhost:3000/superheroesdata${id !== undefined ? `/${id}` : ""}`;

export const fetchHeroes = (id?: number | string) =>
  axios.get(superHeroEndPoint(id));
