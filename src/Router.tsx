import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import SuperHeroes from "./Pages/SuperHeroes";
import Home from "./Pages/Home";
import RqSuperHeroes from "./Pages/RqSuperHeroes";
import MainPageHeoroes from "./Pages/MainPageHeoroes";
import { RouteObj } from "./utils/routerModels";
import RqSuperHeroesOnRequest from "./Pages/RqSuperHeroesOnRequest";
import SuperHeroDetails from "./Pages/SuperHeroDetails/SuperHeroDetails";
import DinamicParallelQueries from "./Pages/DinamicParallelQueries";

export const routes: RouteObj[] = [
  { name: "Home", to: "/", isIndex: true, pageComp: <Home /> },
  {
    name: "Main Page Heros",
    to: "/main-pageheroes",
    pageComp: <MainPageHeoroes />,
  },
  { name: "Super Heroes", to: "/super-heroes", pageComp: <SuperHeroes /> },
  {
    name: "Rq super Heroes",
    to: "/rq-super-heroes",
    pageComp: <RqSuperHeroes />,
  },
  {
    name: "super heros on click",
    to: "/super-heros-on-click",
    pageComp: <RqSuperHeroesOnRequest />,
  },
  {
    name: "super hero detail",
    to: "/super-heros-details/:id",
    pageComp: <SuperHeroDetails />,
    isInNavbar: false,
  },
  {
    name: "dinamic parallel queries",
    to: "/dinamic-parallel-queries",
    pageComp: <DinamicParallelQueries ids={[1, 3]} />,
  },
];

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      {routes.map(e => (
        <Route index={e.isIndex} key={e.to} path={e.to} element={e.pageComp} />
      ))}
    </Route>
  )
);

export default Router;
