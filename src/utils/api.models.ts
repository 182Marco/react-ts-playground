import { AxiosResponse } from "axios";
import { string } from "yup";

export type IgetEndPoint = (endPoint: string, id: string | number) => string;

export type IfetchByIdOrGetAll = (
  id?: number | string
) => Promise<AxiosResponse<any, any>>;

export type IfetchById = (
  id: number | string
) => Promise<AxiosResponse<any, any>>;

export interface Color {
  id: number;
  hex: string;
  name: string;
}
