import React from "react";
import styles from "../../styles/uiStyles/filters/FilterBySorted.module.css";

function FilterBySorted({ sortProducts, sortMode }) {
  return (
    <div className={styles.sort_container}>
      <span className={styles.text}>Sorted</span>

      <select onChange={sortProducts} value={sortMode} className={styles.sort_select}>
        <option className={styles.sort_option} value="default">
          By default
        </option>
        <option className={styles.sort_option} value="newest">
          newest
        </option>
        <option className={styles.sort_option} value="higher">
          price: high-low
        </option>
        <option className={styles.sort_option} value="lower">
          price: low-high
        </option>
        <option className={styles.sort_option} value="A_Z">
          alphabet: A-Z
        </option>
        <option className={styles.sort_option} value="Z_A">
          alphabet: Z-A
        </option>
      </select>
    </div>
  );
}

export default FilterBySorted;
