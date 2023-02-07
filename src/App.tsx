import { useState } from "react";
import "./App.scss";
import { Item } from "./models/mainModels";
import ShowShopList from "./components/ShowShopList";
import AddItemToShop from "./components/AddItemToShop.tsx";
import ShowPost from "./components/ShowPost";
import Modal from "./components/Modal";
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

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <ShowPost />
        <button onClick={() => setOpenModal(true)}>Open modal</button>
        {openModal && <Modal content={<p>something</p>} setOpenModal={setOpenModal} />}
        <CountComp />
        <ShowShopList shopList={shoppingList} />
        <AddItemToShop addItem={addItem} />
      </header>
    </div>
  );
}

export default App;
