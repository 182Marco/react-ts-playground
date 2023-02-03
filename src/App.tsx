import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ShowShopList from "./components/ShowShopList";
import AddItemToShop from "./components/AddItemToShop.tsx";
import { Item } from "./models/mainModels";

export type AddItem = (item : {name: string, quantity: number}) => void


function App() {
  const [shoppingList, setShoppingList] = useState<Item[]>([
    { id: 1, name: "Lemon", quantity: 2 },
    { id: 2, name: "Spaghetti", quantity: 3 },
  ]);

  const addItem : AddItem = item =>
    setShoppingList([
      ...shoppingList,
      { id: ++shoppingList.length, name: item.name, quantity: item.quantity },
    ]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />.
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ShowShopList shopList={shoppingList} />
        <AddItemToShop addItem={addItem} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
