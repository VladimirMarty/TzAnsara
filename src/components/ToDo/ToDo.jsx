import React from "react";

import styles from "./ToDo.module.css";

function ToDo() {
  return (
    <div className={styles.Main}>
      <div className={styles.div}>
        <p>Задание</p>
        <span>Время</span>
      </div>
    </div>
  );
}

export default ToDo;
