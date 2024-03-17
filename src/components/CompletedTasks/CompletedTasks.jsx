import React, { useState } from "react";
import { Modal } from "../Modal/Modal";
import styles from "./CompletedTasks.module.css";
import EditingCompletedTaskModal from "../EditingCompletedTaskModal/EditingCompletedTaskModal";

import AddCompletedTaskModal from "../AddCompletedTaskModal/AddCompletedTaskModal";

function CompletedTasks() {
  const [modalAddIsOpen, setModalAddOpen] = useState(false);
  const [modalEditIsOpen, setModalEditOpen] = useState(false);
  return (
    <div className={styles.Main}>
      <div style={{display: 'flex', borderBottom: '1px solid grey'
    }}>
        <p>Сегодня</p>
        <button
          className="modal-show-button"
          onClick={() => setModalAddOpen(true)}
        >
          +
        </button>
      </div>

      <button
          className={styles.btn}
        onClick={() => setModalEditOpen(true)}
      >
        <div className={styles.divTask}>
    <p className={styles.p}>Задание</p>
<p>Время</p>
</div>
      </button>

      <Modal isOpen={modalAddIsOpen} onClose={() => setModalAddOpen(false)}>
        <AddCompletedTaskModal></AddCompletedTaskModal>
      </Modal>

      <Modal isOpen={modalEditIsOpen} onClose={() => setModalEditOpen(false)}>
        <EditingCompletedTaskModal></EditingCompletedTaskModal>
      </Modal>
    </div>
  );
}

export default CompletedTasks;
