import { ReactNode } from "react";

export interface ModalType {
  content: ReactNode;
  setOpenModal: (p: boolean) => void;
}
