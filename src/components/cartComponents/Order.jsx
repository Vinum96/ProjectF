import React from "react";
import styles from "../../styles/cartStyles/Order.module.css";
import { useSelector } from "react-redux";
import { cartSelector } from "../../redux/slices/CartSlice";

function Order() {
  const { cart: cartProducts } = useSelector(cartSelector);

  const allPrice = cartProducts.map((product) => {
    if (product.discount_total_price) {
      return product.discount_total_price;
    }
    return product.total_price;
  });

  let totalAmount = allPrice.reduce((total, value) => total + value, 0).toFixed(2);

  return (
    <div className={styles.order_container}>
      <p className={styles.txt_black}>Order details</p>
      <p className={styles.txt_grey}>{`${cartProducts.length} items`}</p>
      <div className={styles.total_container}>
        <p className={styles.txt_grey}>Total</p>
        <p className={styles.total_price}>{`$${totalAmount}`}</p>
      </div>
    </div>
  );
}

export default Order;
