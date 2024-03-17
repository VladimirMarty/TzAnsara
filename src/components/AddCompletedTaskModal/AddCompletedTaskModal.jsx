import React, { useState } from "react";

import styles from "./AddCompletedModal.module.css";

import useToken from "../LogIn/useToken";

async function addTask(task, token, started) {
  return fetch("http://ansaratracker.ru/api/createTask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task, started, token }),
  }).then((data) => data.json());
}

export default function AddCompletedTaskModal() {
  const { token } = useToken();

  const [task, setTask] = useState("");

  return (
    <div className={styles.div}>
      <p> Добавление выполненной задачи</p>
      <input
        className={styles.input}
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <div style={{margin: '10px 0'}}>
        <input className={styles.inputSmall} />
        <span>-</span>
        <input className={styles.inputSmall} />
      </div>
      <button onClick={() => addTask(task, token, true)} className={styles.btn}>
        Сохранить
      </button>
    </div>
  );
}
