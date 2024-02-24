import React from "react";
import styles from "../../styles/uiStyles/reused/NavigationPath.module.css";

function NavigationPath({ arr }) {
  return (
    <div className={styles.path_container}>
      {arr.map((item, i) => (
        <div className={styles.path_txt} key={item}>
          <div className={i == 0 ? `${styles.firs_line} ` : `${styles.line}`}></div>
          <div className={i == arr.length - 1 ? `${styles.last_path} ${styles.path} ` : `${styles.path}`}>{item}</div>
        </div>
      ))}
    </div>
  );
}

export default NavigationPath;
