import { ReactNode } from "react";

export interface RouteObj {
  name: string;
  to: string;
  isIndex?: boolean;
  pageComp: ReactNode;
  isInNavbar?: undefined | boolean;
}
