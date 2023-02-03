import { useState, useEffect, useRef } from "react";
import type { AddItem } from "../../App";
import { Item } from "../../models/mainModels";

export const AddItemToShop = ({
  addItem,
}: {
  addItem: AddItem;
}): JSX.Element => {
  interface CompState {
    name: string;
    quantity: string;
  }

  const initialState: CompState = {
    name: "",
    quantity: "",
  };

  const [state, setState] = useState(initialState);

  const handleState = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof Item
  ) =>
    setState({
      ...state,
      [field]: e.target.value,
    });

  const [validationEr, setValidationEr] = useState<string>();

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (Object.keys(state).find(k => !state[k as keyof CompState])) {
      setValidationEr(": otherwise you can't sumbmit");
      return;
    }
    addItem(state);
    setState(initialState);
    setValidationEr("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Each field is required{validationEr}</p>
      <div>
        <input
          type="text"
          id="name"
          value={state.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleState(e, "name")
          }
          placeholder="*Name"
        />
      </div>
      <div>
        <input
          type="number"
          id="quantity"
          value={state.quantity}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleState(e, "quantity")
          }
          placeholder="*Quantity"
        />
      </div>
      <input type="submit" value="done" />
    </form>
  );
};

export default AddItemToShop;
