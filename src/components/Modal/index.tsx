import { ReactNode } from "react";
import DOM from "react-dom";
import "./index.scss";

const overlayRoot = document.getElementById("overlay-root") as HTMLElement;

export const Modal = ({
  content,
  setOpenModal,
}: {
  content: ReactNode;
  setOpenModal: (p: boolean) => void;
}) => (
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
