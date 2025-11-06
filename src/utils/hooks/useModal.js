import { useContext } from "react";
import ModalContext from "../context/Modal";

export const useModal = () => {
  return useContext(ModalContext);
};
