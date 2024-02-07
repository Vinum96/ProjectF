import React from "react";
import styles from "../../styles/uiStyles/reused/NavigationPath.module.css";

function NavigationPath({ arr }) {
  return (
    <div className={styles.path_container}>
      {arr.map((item, i) => (
        // <>
        //   if (arr.at(-1) != arr.length - 1 ?) {
        <>
          <div className={styles.path} key={i}>
            {item}
          </div>
          <div className={styles.line}></div>
        </>
        //   }
        //   <div className={styles.path} key={i}>{item}</div>
        // </>
      ))}
    </div>
  );
}

export default NavigationPath;
