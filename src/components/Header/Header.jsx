import React from "react";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.div}>
      <input className={styles.search}></input>
      <button className={styles.submit}></button>
      <button className={styles.btn}></button>
    </div>
  );
}

export default Header;
