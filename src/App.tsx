import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ShowShopList from "./components/ShowShopList";
import AddItemToShop from "./components/AddItemToShop.tsx";
import { Item } from "./models/mainModels";
import Modal from "./components/Modal";

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

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => setOpenModal(true)}>Open modal</button>
        {openModal && <Modal content={<p>something</p>} setOpenModal={setOpenModal} />}
        <ShowShopList shopList={shoppingList} />
        <AddItemToShop addItem={addItem} />
      </header>
    </div>
  );
}

export default App;
