import axios from "axios";

export const superHeroEndPoint = "http://localhost:3000/superheroesdata";

export const fetchHeroes = () => axios.get(superHeroEndPoint);
