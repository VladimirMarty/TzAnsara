import React, { useState } from "react";
import EditingProfileModal from "../EditingProfileModal/EditingProfileModal";
import { Modal } from "../Modal/Modal";
import styles from "./Footer.module.css";

function Footer(props) {
  const [modalIsOpen, setModalOpen] = useState(false);
  return (
    <div className={styles.div} style={{ display: "flex" }}>
      <div style={{ display: "flex" }}>
        <p>Загрузить ещё</p>
        <input type="button" className={styles.btn1}></input>
      </div>

      <div style={{ display: "flex" }}>
     
        <p>userName</p>
        <button
          className="modal-show-button"
          onClick={() => setModalOpen(true)}
        >
          Редактировать профиль
        </button>
      </div>

      <Modal isOpen={modalIsOpen} onClose={() => setModalOpen(false)}>
        <EditingProfileModal></EditingProfileModal>
      </Modal>
    </div>
  );
}

export default Footer;
