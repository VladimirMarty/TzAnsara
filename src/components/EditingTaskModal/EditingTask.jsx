import React from "react";

import styles from "./EditingTask.module.css";

function EditingTaskModal() {
  return (
    <div className={styles.div}>
      <p>Редактирование задачи</p>
      <input className={styles.input} style={{margin: '10px 0'}}></input>
      <div>
        <button className={styles.btn} style={{marginRight: '5px'}}>Сохранить</button>
        <button className={styles.btn}>Удалить</button>
      </div>
    </div>
  );
}

export default EditingTaskModal;
