import { AxiosResponse } from "axios";

export type IgetEndPoint = (endPoint: string, id: string | number) => string;

export type IfetchByIdOrGetAll = (
  id?: number | string
) => Promise<AxiosResponse<any, any>>;

export type IfetchById = (
  id: number | string
) => Promise<AxiosResponse<any, any>>;
