import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./LogIn.module.css";

async function loginUser(credentials) {
  return fetch("http://ansaratracker.ru/api/authorize", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      name: username,
      password,
    });
    setToken(token);
  };

  return (
    <div className={styles.Log}>
    <div className={styles.div} >
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
        
          <input
            className={styles.input}
            placeholder="Username"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
         
          <input
            className={styles.input}
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button className={styles.btn} type="submit">
            Войти
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
