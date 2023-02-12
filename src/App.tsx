import { Suspense, useState, useContext } from "react";
import "./global.scss";
import { Item } from "./models/mainModels";
import ShowShopList from "./components/ShowShopList";
import AddItemToShop from "./components/AddItemToShop.tsx";
import ShowPost from "./components/ShowPost";
import Modal from "./components/Modal";
import CountComp from "./components/CountComp";
import { initialShopList } from "./utils/mockData";
import Display from "./components/Display";
import { genRandom } from "./utils/number";
import FallBackUI from "./components/FallBackUi";
import AuthContext from "./context/auth";
import LogInComp from "./components/ConsumerExample";

export type AddItem = (item: { name: string; quantity: string }) => void;

function App() {
  const [islog, setIslog] = useState(false);
  const [shoppingList, setShoppingList] = useState<Item[]>(initialShopList);

  const url = `${process.env.REACT_APP_API}/photos/`;

  const addItem: AddItem = item =>
    setShoppingList([
      ...shoppingList,
      { id: ++shoppingList.length, name: item.name, quantity: item.quantity },
    ]);

  const [openModal, setOpenModal] = useState(false);
  const [pieceOfstate1, setPieceOfstate1] = useState(0);
  const [pieceOfstate2, setPieceOfstate2] = useState(0);

  const rest = (t: number) => new Promise(res => setTimeout(res, t));

  const doubleUpdater = async () => {
    await rest(500);
    setPieceOfstate1(1);
    setPieceOfstate1(2);
  };

  console.log(
    "pieceOfstate1: ",
    pieceOfstate1,
    "pieceOfstate2: ",
    pieceOfstate2
  );

  return (
    <AuthContext.Provider value={{ islog, setIslog }}>
      <div className="App">
        <LogInComp />
        {islog && (
          <>
            <Suspense fallback={<FallBackUI />}>
              <header>
                {[...Array(3)].map((e, i) => (
                  <Display key={i} url={url + genRandom(1, 40)} />
                ))}
                <ShowPost />
              </header>
            </Suspense>
            <button onClick={() => setOpenModal(true)}>
              Open portal modal
            </button>
            {openModal && (
              <Modal content={<p>something</p>} setOpenModal={setOpenModal} />
            )}
            <CountComp />
            <AddItemToShop addItem={addItem} />
            <ShowShopList shopList={shoppingList} />
            <button onClick={doubleUpdater}>update 2 states in 1 batch</button>
          </>
        )}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
