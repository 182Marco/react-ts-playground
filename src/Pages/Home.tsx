import { useContext, useState } from "react";
import { AddItem } from "../App";
import AddItemToShop from "../components/AddItemToShop";
import ClassComp from "../components/ClassComp";
import CountComp from "../components/CountComp";
import DemoUseImperative from "../components/DemoUseImperative";
import DummyReactForm from "../components/DummyReactForm";
import MemoPlayground from "../components/MemoPlayground";
import Modal from "../components/Modal";
import React18 from "../components/React18";
import ShowShopList from "../components/ShowShopList";
import ShowUseMemo from "../components/ShowUseMemo";
import StyledCompExamples from "../components/StyledCompExamples";
import SuspenceDemo from "../components/SuspenceDemo";
import TryUseQuery from "../components/TryUseQuery";
import AuthContext from "../context/auth";
import { Item } from "../models/mainModels";
import { initialShopList, users } from "../utils/mockData";

export const HomePgae = () => {
  const [shoppingList, setShoppingList] = useState<Item[]>(initialShopList);
  const [openModal, setOpenModal] = useState(false);
  const { isLog } = useContext(AuthContext);

  const addItem: AddItem = item =>
    setShoppingList([
      ...shoppingList,
      { id: ++shoppingList.length, name: item.name, quantity: item.quantity },
    ]);

  const url = `${process.env.REACT_APP_API}/posts/`;

  // const obj = useFetch(url);
  // const { loading, data, error } = obj;
  // console.log(obj);

  return (
    <>
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
          <StyledCompExamples />
          <DummyReactForm />
        </>
      )}
    </>
  );
};

export default HomePgae;
