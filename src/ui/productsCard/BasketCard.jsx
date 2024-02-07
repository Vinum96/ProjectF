import React from "react";
import styles from "../../styles/uiStyles/productsCard/BasketCard.module.css";
import deleteImg from "../../images/delete.png";
import CounterButtons from "../reused/CounterButtons";
import { BASE_URL } from "../../redux/api/baseUrl";
import CheckingDiscountPrice from "../reused/CheckingDiscountPrice";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../redux/slices/CartSlice";

function BasketCard({ arr }) {
  const dispatch = useDispatch();

  const remove = (param) => dispatch(removeProduct(param));

  return (
    <div className={styles.products_container}>
      {arr
        ? arr.map((product) => (
            <div key={product.id} className={styles.product_container}>
              <img className={styles.img} src={BASE_URL + product.image} alt="img" />

              <div className={styles.description_container}>
                <div className={styles.title_btn}>
                  <p className={styles.title}>{product.title}</p>
                  <img onClick={() => remove(product)} className={styles.btn_delete} src={deleteImg} alt="img" />
                </div>
                <div className={styles.btns_prices}>
                  <CounterButtons product={product} />
                  <CheckingDiscountPrice
                    product={product}
                    classNameContainer={styles.price_container}
                    classNamePrice={styles.price}
                    classNameDiscountPrice={styles.discount_price}
                    prise={product.total_price}
                    discountPrice={product.discount_total_price}
                  />
                </div>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
}

export default BasketCard;
