import { createContext, ReactNode, useContext, useState } from "react";
import {
  DEFAULT_FAVOURITE_SUPER_HERO,
  DEFAULT_IS_LOGGED,
  DEFAULT_NAME,
} from "./context.data";
import { IContext } from "./context.model";

export const AuthContext = createContext<IContext>({
  name: DEFAULT_NAME,
  isLog: DEFAULT_IS_LOGGED,
  favourriteSuperHero: DEFAULT_FAVOURITE_SUPER_HERO,
  setName: str => null,
  setIsLog: bool => null,
  setFavourriteSuperHero: str => null,
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLog, setIsLog] = useState(DEFAULT_IS_LOGGED);
  const [name, setName] = useState(DEFAULT_NAME);
  const [favourriteSuperHero, setFavourriteSuperHero] = useState(
    DEFAULT_FAVOURITE_SUPER_HERO
  );

  const contextObj = {
    isLog,
    name,
    favourriteSuperHero,
    setIsLog,
    setName,
    setFavourriteSuperHero,
  };

  return (
    <AuthContext.Provider value={contextObj}>{children}</AuthContext.Provider>
  );
};

export const useAppContext = () => useContext(AuthContext);
export default AuthContext;
