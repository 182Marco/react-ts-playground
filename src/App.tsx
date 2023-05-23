import { RouterProvider } from "react-router-dom";
import LogInComp from "./components/LogInComp";
import "./global.scss";
import Router from "./Router";

export type AddItem = (item: { name: string; quantity: string }) => void;

function App() {
  return (
    <div className="App">
      <LogInComp />
      <RouterProvider router={Router} />
    </div>
  );
}

export default App; //
