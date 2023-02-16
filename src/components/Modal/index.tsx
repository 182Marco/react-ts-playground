import DOM from "react-dom";
import "./style.scss";
import { ModalType } from "./types";

export const Modal = ({ content, setOpenModal }: ModalType) => (
  <>
    {DOM.createPortal(
        <div className="modal">
          {content}
          <button onClick={() => setOpenModal(false)}>close</button>
        </div>,
      document.getElementById("overlay-root") as HTMLElement
    )}
  </>
);

export default Modal;
