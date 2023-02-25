import { useContext, useState } from "react";
import "./global.scss";
import { Item } from "./models/mainModels";
import ShowShopList from "./components/ShowShopList";
import AddItemToShop from "./components/AddItemToShop";
import Modal from "./components/Modal";
import CountComp from "./components/CountComp";
import { initialShopList, users } from "./utils/mockData";
import AuthContext from "./context/auth";
import LogInComp from "./components/LogInComp";
import MemoPlayground from "./components/MemoPlayground";
import ShowUseMemo from "./components/ShowUseMemo";
import useFetch from "./MyHooks/useFetch";
import DemoUseImperative from "./components/DemoUseImperative";
import React18 from "./components/React18";
import SuspenceDemo from "./components/SuspenceDemo";
import ClassComp from "./components/ClassComp";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import rest from "./utils/rest";
import TryUseQuery from "./components/TryUseQuery";

export type AddItem = (item: { name: string; quantity: string }) => void;

function App() {
  const [shoppingList, setShoppingList] = useState<Item[]>(initialShopList);
  const [openModal, setOpenModal] = useState(false);
  const { isLog, setIsLog } = useContext(AuthContext);

  const url = `${process.env.REACT_APP_API}/posts/`;

  const addItem: AddItem = item =>
    setShoppingList([
      ...shoppingList,
      { id: ++shoppingList.length, name: item.name, quantity: item.quantity },
    ]);

  // try use of custum hook
  const myData = {
    id: "My323",
    body: "this is the body of the post",
    title: "My title",
    userId: 123,
  };

  // const obj = useFetch(url);
  // const { loading, data, error } = obj;
  // console.log(obj);

  return (
    <div className="App">
      <LogInComp />
      {isLog && (
        <>         
          <AddItemToShop addItem={addItem} />
          <ShowShopList shopList={shoppingList} />
          <MemoPlayground />
          <ShowUseMemo />
          <React18 />
          <DemoUseImperative />
          <CountComp />
          <SuspenceDemo />
          <button onClick={() => setOpenModal(true)}>Open portal modal</button>
          {openModal && (
            <Modal content={<p>something</p>} setOpenModal={setOpenModal} />
          )}
          <ClassComp users={users} />
          <TryUseQuery />
        </>
      )}
    </div>
  );
}

export default App;
