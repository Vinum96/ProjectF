import React from "react";
import styles from "../../styles/uiStyles/reused/CounterButtons.module.css";
import plus from "../../images/plus.png";
import minus from "../../images/minus.png";
import { useDispatch, useSelector } from "react-redux";
import { addOrIncrementProduct, cartSelector, decrementProduct } from "../../redux/slices/CartSlice";

function CounterButtons({ product }) {
  const dispatch = useDispatch();

  const { cart: cartProducts } = useSelector(cartSelector);
  let current = cartProducts.filter((el) => el.id == product.id);
  let [currentProduct] = current;

  const increment = (param) => {
    dispatch(addOrIncrementProduct(param));
  };

  const decrement = (param) => {
    dispatch(decrementProduct(param));
  };

  return (
    <div className={styles.count_btns}>
      <button onClick={() => decrement(product)} className={styles.decrement}>
        <img className={styles.img_count_btns} src={minus} alt="minus" />
      </button>
      <div className={styles.count}>{currentProduct ? currentProduct.count : 0}</div>
      <button onClick={() => increment(product)} className={styles.increment}>
        <img className={styles.img_count_btns} src={plus} alt="plus" />
      </button>
    </div>
  );
}

export default CounterButtons;
