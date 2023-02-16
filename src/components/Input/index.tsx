import InpCompProps from "./types";
import { forwardRef } from "react";

export const Input = (p: InpCompProps, ref: any) => (
  <div className="InputComponent">
    {!!p.label && <label htmlFor={p.id}>{p.label}</label>}
    <input
      ref={ref}
      id={p.id}
      type={p.type}
      value={p.value}
      onBlur={p.onBlur}
      onChange={p.onChange}
      placeholder={p.placeholder}
      className={p.className ? p.className : ""}
    />
  </div>
);

export default forwardRef(Input);
