export interface IContext {
  isLog: boolean;
  setIsLog: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  favourriteSuperHero: string;
  setFavourriteSuperHero: React.Dispatch<React.SetStateAction<string>>;
}
