import React from "react";
import styles from "../../styles/uiStyles/reused/BlockNameBtn.module.css";
import { NavLink } from "react-router-dom";

function BlockNameBtn({ pageTitle, btnTitle, path, classNameLine, onClick }) {
  return (
    <div className={styles.title_container}>
      <p className={styles.title}>{pageTitle}</p>

      <div className={styles.line_btn}>
        <div className={`${styles.line} ${classNameLine}`}></div>
        <NavLink to={path}>
          <button className={styles.btn} onClick={onClick}>
            {btnTitle}
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default BlockNameBtn;
