import { useState } from "react";
import type { AddItem } from "../../App";

export const AddItemToShop = ({
  addItem,
}: {
  addItem: AddItem;
}): JSX.Element => {
  const [name, setName] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');
  const [validationEr, setValidationEr] = useState<string>();

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (name && quantity) {
      addItem({
        name: name,
        quantity: parseFloat(quantity),
      });
      setName("");
      setQuantity("");
      setValidationEr("");
      return;
    }
    setValidationEr(": otherwise you can't sumbmit");
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Each field is required{validationEr}</p>
      <div>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          placeholder="*Name"
        />
      </div>
      <div>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuantity(e.target.value)
          }
          placeholder="*Quantity"
        />
      </div>
      <input type="submit" value="done" />
    </form>
  );
};

export default AddItemToShop;
