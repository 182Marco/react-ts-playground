import { useState, useRef } from "react";
import type { AddItem } from "../../App";
import { Item } from "../../models/mainModels";
import './index.scss'

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
    setState(s => ({
      ...s,
      [field]: e.target.value,
    }));

  const [validationEr, setValidationEr] = useState<string>();

  const nameRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
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
    <div className="AddItemToShop">
      <h4>Form to add Item shoppingList </h4>
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
    </div>
  );
};

export default AddItemToShop;
