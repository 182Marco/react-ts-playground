import { imperModalPros } from "./types";
import "./style.scss";
import { forwardRef, useImperativeHandle, useRef } from "react";

export const ImperModal = (p: imperModalPros, ref: any) => {

  const confirmRef = useRef<HTMLButtonElement>(null);
  const denyRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useImperativeHandle(ref, () => {
    return {
      focusConfirmBtn: () => confirmRef.current?.focus(),
      focusDenyBtn: () => denyRef.current?.focus(),
      focusCloseBtn: () => closeRef.current?.focus(),
    };
  }, []);

  return (
    <div className="ImperModal" ref={ref}>
      <p>
        Would you be a lamb? <br /> Subscribe to the most overpriced and useless
        service in the world, please!
      </p>
      <button ref={confirmRef}>yes</button>
      <button ref={denyRef}>no</button>
      <button ref={closeRef} onClick={() => p.setOpen(false)}>
        close
      </button>
    </div>
  );
};

export default forwardRef(ImperModal);
