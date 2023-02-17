import { Item, User } from "../models/mainModels";

export const initialShopList: Item[] = [
  { id: 1, name: "Lemon", quantity: "2" },
  { id: 2, name: "Spaghetti", quantity: "4" },
];

export const loginCall = async() => ({
  id: 4,
  userName: "Bob",
  email: "bob@gmail.com"
})

export const users: User[] = [
  { id: 1, nick: "Jo42", isSubscriber: false},
  { id: 2, nick: "BenTheBoss", isSubscriber: true},
  { id: 3, nick: "Adam_7_", isSubscriber: false},
  { id: 4, nick: "AlanTopDog", isSubscriber: true},
];