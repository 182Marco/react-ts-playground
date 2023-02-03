import "./App.css";
import { useState } from "react";
import { Item } from "./models/mainModels";
import ShowShopList from "./components/ShowShopList";
import AddItemToShop from "./components/AddItemToShop.tsx";
import CountComp from "./components/CountComp";

export type AddItem = (item : {name: string, quantity: string}) => void


function App() {
  const [shoppingList, setShoppingList] = useState<Item[]>([
    { id: 1, name: "Lemon", quantity: '2' },
    { id: 2, name: "Spaghetti", quantity: '4' },
  ]);

  const addItem : AddItem = item =>
    setShoppingList([
      ...shoppingList,
      { id: ++shoppingList.length, name: item.name, quantity: item.quantity },
    ]);


  return (
    <div className="App">
      <header className="App-header">
        <CountComp />
        <ShowShopList shopList={shoppingList} />
        <AddItemToShop addItem={addItem} />
      </header>
    </div>
  );
}

export default App;
