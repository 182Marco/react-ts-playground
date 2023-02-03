import React, { useRef } from "react";
import type { AddItem } from "../../App";

export const AddItemToShop = ({
  addItem,
}: {
  addItem: AddItem;
}): JSX.Element => {

  const nameRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addItem({
      name: nameRef.current!.value,
      quantity: parseFloat(quantityRef.current!.value),
    });
    nameRef.current!.value = "";
    quantityRef.current!.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" id="name" ref={nameRef} placeholder="Name" />
      </div>
      <div>
        <input type="number" id="quantity" ref={quantityRef} placeholder="Quantity" />
      </div>
      <input type="submit" value="done" />
    </form>
  );
};

export default AddItemToShop;
