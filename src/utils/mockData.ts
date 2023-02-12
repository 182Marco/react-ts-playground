import { Item } from "../models/mainModels";

export const initialShopList: Item[] = [
  { id: 1, name: "Lemon", quantity: "2" },
  { id: 2, name: "Spaghetti", quantity: "4" },
];

export const loginCall = async() => ({
  id: 4,
  userName: "Bob",
  email: "bob@gmail.com"
})