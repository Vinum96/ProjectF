import React from "react";
import styles from "../../styles/uiStyles/filters/FilterByPrice.module.css";

function FilterByPrice({ filterByMin, filterByMax, priceFrom, priceTo }) {
  return (
    <label className={styles.price_container}>
      <p className={styles.price}>Price</p>
      <input className={styles.input} placeholder="from" type="number" value={priceFrom} onChange={filterByMin} />

      <input className={styles.input} placeholder="to" type="number" value={priceTo} onChange={filterByMax} />
    </label>
  );
}

export default FilterByPrice;
