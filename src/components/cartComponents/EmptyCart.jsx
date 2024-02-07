import React from "react";
import styles from "../../styles/cartStyles/EmptyCart.module.css";
import { NavLink } from "react-router-dom";

function EmptyCart() {
  return (
    <div className={styles.empty_cart}>
      <p className={styles.txt}>Looks like you have no items in your basket currently.</p>
      <NavLink to="/AllProducts" className={styles.link}>
        Continue Shopping
      </NavLink>
    </div>
  );
}

export default EmptyCart;
