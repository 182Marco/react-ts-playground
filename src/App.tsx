import { RouterProvider } from "react-router-dom";
import "./global.scss";
import LogInComp from "./components/LogInComp";
import Router from "./Router";

export type AddItem = (item: { name: string; quantity: string }) => void;

function App() {
  return (
    <div className="App">
      <RouterProvider router={Router} />
      <LogInComp />
    </div>
  );
}

export default App;
