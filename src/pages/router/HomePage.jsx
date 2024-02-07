import React from "react";
import styles from "../../styles/router/HomePage.module.css";
import PromoBanner from "../../components/homeComponents/PromoBanner";
import Discount from "../../components/homeComponents/Discount";
import HomeSale from "../../components/homeComponents/HomeSale";
import HomeCategories from "../../components/homeComponents/HomeCategories";

function HomePage() {
  return (
    <div className={styles.home_container}>
      <PromoBanner />
      <div className={styles.home_padding}>
        <HomeCategories />
        <Discount />
        <HomeSale />
      </div>
    </div>
  );
}

export default HomePage;
