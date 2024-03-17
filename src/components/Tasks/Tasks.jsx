import React, { useState } from "react";
import { Modal } from "../Modal/Modal";
import styles from "./Tasks.module.css";
import EditingTaskModal from "../EditingTaskModal/EditingTask";

function Tasks() {
  const [modalIsOpen, setModalOpen] = useState(false);
  return (
    <div className={styles.Main}>
      <button  className={styles.btn} onClick={() => setModalOpen(true)}>
      <div className={styles.divTask}>
        <p className={styles.p}>Задание</p>
 <p>Время</p>
 </div>
      </button>

      <Modal isOpen={modalIsOpen} onClose={() => setModalOpen(false)}>
        <EditingTaskModal></EditingTaskModal>
      </Modal>
    </div>
  );
}

export default Tasks;
