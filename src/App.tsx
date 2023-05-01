import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./global.scss";
import { useState } from "react";
import { Item } from "./models/mainModels";
import { initialShopList } from "./utils/mockData";
import LogInComp from "./components/LogInComp";
import Navbar from "./components/Navbar";
import Router from "./Router";

export type AddItem = (item: { name: string; quantity: string }) => void;

function App() {
  const [shoppingList, setShoppingList] = useState<Item[]>(initialShopList);

  return (
    <div className="App">
      <RouterProvider router={Router} />
      <LogInComp />
    </div>
  );
}

export default App;
