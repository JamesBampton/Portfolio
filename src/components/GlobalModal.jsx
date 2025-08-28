import React from "react";
import { useModal } from "../context/ModalContext";
import "./modal.css";

const GlobalModal = () => {
  const { modalData, closeModal } = useModal();

  if (!modalData) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{modalData.title}</h2>
        {modalData.image && <img src={modalData.image} alt={modalData.title} />}
        <div dangerouslySetInnerHTML={{ __html: modalData.content }} />
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default GlobalModal;
