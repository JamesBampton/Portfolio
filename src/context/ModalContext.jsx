import React, { createContext, useContext, useState } from "react";
import { modalItems } from "../data/modalData";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [modalId, setModalId] = useState(null);

  const openModal = (id) => setModalId(id);
  const closeModal = () => setModalId(null);

  const modalData = modalItems.find((item) => item.id === modalId);

  return (
    <ModalContext.Provider value={{ openModal, closeModal, modalData }}>
      {children}
    </ModalContext.Provider>
  );
};
