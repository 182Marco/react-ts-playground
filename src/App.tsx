import React, { useState } from "react";
import "./App.css";
import ShowShopList from "./components/ShowShopList";
import AddItemToShop from "./components/AddItemToShop.tsx";
import { Item } from "./models/mainModels";
import ShowPost from "./components/ShowPost";

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
        <ShowShopList shopList={shoppingList} />
        <AddItemToShop addItem={addItem} />
        <ShowPost />
      </header>
    </div>
  );
}

export default App;
