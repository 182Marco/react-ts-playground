export interface Item {
  id: number;
  name: string;
  quantity: string;
}
export interface User {
  id: number;
  nick: string;
  isSubscriber: boolean;
}

export const enum Verbs {
  CONNECT = "CONNECT",
  DELETE = "DELETE",
  GET = "GET",
  HEAD = "HEAD",
  OPTIONS = "OPTIONS",
  PATCH = "PATCH",
  POST = "POST",
  PUT = "PUT",
  TRACE = "TRACE",
}

export type Heroes = {
  id: number;
  name: string;
  alterEgo: string;
  merchandiseStoreId: number;
}[];

export interface IQueryObj {
  name: string;
  id: number;
  alterEgo: string;
  index: number;
}
