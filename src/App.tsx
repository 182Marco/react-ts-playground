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

  const shopData = useQuery(["initialShopList"], () =>
    rest(3000).then(() => [...initialShopList])
  );

  const queryClient = useQueryClient()

  const newShopItemMutation = useMutation({
    mutationFn: () =>
      rest(1000).then(() =>
        initialShopList.push({ id: 3, name: "Pasta", quantity: "6" })
      ),
      onSuccess: () => queryClient.invalidateQueries(["initialShopList"])
  });

  console.log("shopData.isError: ", shopData.isError);
  console.log("shopData.data: ", shopData.data);

  return (
    <div className="App">
      <LogInComp />
      {shopData.isLoading && "LOADING..."}
      {shopData.isError && <p>{JSON.stringify(shopData.error)}</p>}
      <div>{JSON.stringify(shopData.data)}</div>
      <button onClick={() => newShopItemMutation.mutate()}>add pasta</button>
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
        </>
      )}
    </div>
  );
}

export default App;
