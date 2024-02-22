import React from "react";
import styles from "../../styles/uiStyles/reused/BlockNameBtn.module.css";
import { NavLink } from "react-router-dom";

function BlockNameBtn({ pageTitle, btnTitle, path, onClick }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{pageTitle}</p>
      <div className={styles.line}></div>
      <NavLink className={styles.btn} onClick={onClick} to={path}>
        {btnTitle}
      </NavLink>
    </div>
  );
}

export default BlockNameBtn;
