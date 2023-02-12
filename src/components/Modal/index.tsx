import DOM from "react-dom";
import "./style.scss";
import { ModalType } from "./types";

const overlayRoot = document.getElementById("overlay-root") as HTMLElement;

export const Modal = ({ content, setOpenModal }: ModalType) => (
  <>
    {DOM.createPortal(
      <>
        <div className="modal">
          {content}
          <button onClick={() => setOpenModal(false)}>close</button>
        </div>
      </>,
      overlayRoot
    )}
  </>
);

export default Modal;
