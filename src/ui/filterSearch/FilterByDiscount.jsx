import React from "react";
import styles from "../../styles/uiStyles/filters/FilterByDiscount.module.css";

function FilterByDiscount({ className, ...props }) {
  return (
    <label>
      <input {...props} type="checkbox" className={styles.real_checkbox} />
      Discounted items
      <span className={styles.fake_checkbox}></span>
    </label>
  );
}

export default FilterByDiscount;
