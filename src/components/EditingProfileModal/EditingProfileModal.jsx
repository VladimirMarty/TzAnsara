import React from "react";

import styles from "./EditingProfileModal.module.css";

function EditingProfileModal() {
  return (
    <div className={styles.div}>
      <p> Редактирование профиля</p>
      <div style={{margin: '10px 0'}}>
      <input className={styles.input} style={{marginRight:'5px'}}></input>
      <input className={styles.input}></input>
      </div>
      <div>
        <button className={styles.btn} style={{marginRight:'5px'}}>Сохранить</button>
        <button className={styles.btn}>Выйти</button>
      </div>
    </div>
  );
}

export default EditingProfileModal;
