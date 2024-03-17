import React from "react";

import styles from "./EditingCompletedTaskModal.module.css";

function EditingCompletedTaskModal() {
  return (
    <div className={styles.div}>
      <p>Редактирование задачи</p>
      <input className={styles.input}></input>
      <div style={{margin: '10px 0'}}>
        <input className={styles.inputSmall}></input>
        <span>-</span>
        <input className={styles.inputSmall}></input>
      </div>
      <button className={styles.btn}>Сохранить</button>
      <button className={styles.btn}>Удалить</button>
    </div>
  );
}

export default EditingCompletedTaskModal;
