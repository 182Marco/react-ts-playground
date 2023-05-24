import { AxiosResponse } from "axios";
import { IQueryObj } from "../models/mainModels";

export type IgetEndPoint = (endPoint: string, id: string | number) => string;

export type IfetchByIdOrGetAll = (
  id?: number | string
) => Promise<AxiosResponse<any, any>>;

export type IPostHero = (hero: IQueryObj) => Promise<AxiosResponse<any, any>>;

export type IfetchById = (
  id: number | string
) => Promise<AxiosResponse<any, any>>;

export interface Color {
  id: number;
  hex: string;
  name: string;
}
