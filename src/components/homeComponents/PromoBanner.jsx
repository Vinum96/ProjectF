import React from "react";
import styles from "../../styles/homeStyles/PromoBanner.module.css";

function PromoBanner() {
  const scrollUp = () => {
    window.scrollBy({
      top: 1800,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.banner_container}>
      <p className={styles.banner_txt}>
        Amazing Discounts
        <br />
        on Garden Products!
      </p>
      <button className={styles.banner_btn} onClick={scrollUp}>
        Check out
      </button>
    </div>
  );
}

export default PromoBanner;
