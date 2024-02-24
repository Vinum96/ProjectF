import React from "react";
import styles from "../../styles/router/ProductPage.module.css";
import NavigationPath from "../../ui/reused/NavigationPath";
import { BASE_URL } from "../../redux/api/baseUrl";
import CheckingDiscountPrice from "../../ui/reused/CheckingDiscountPrice";
import PercentDiscount from "../../ui/reused/PercentDiscount";
import CounterButtons from "../../ui/reused/CounterButtons";

function ProductPage1440({ product, addProductToCart, paths }) {
  return (
    <div className={styles.container}>
      <NavigationPath arr={paths} />
      {product.map((product) => (
        <div key={product.id} className={styles.product_container}>
          <div
            className={styles.img}
            style={{ backgroundImage: `url(${BASE_URL + product.image})` }}
          ></div>

          <div className={styles.data_product}>
            <p className={styles.title}>{product.title}</p>

            <div className={styles.main_price_container}>
              <CheckingDiscountPrice
                product={product}
                classNameContainer={styles.price_container}
                classNamePrice={styles.price}
                classNameDiscountPrice={styles.discount_price}
              />
              <PercentDiscount product={product} classNameDiscount={styles.percent_discount} />
            </div>

            <div className={styles.btn_container}>
              <CounterButtons product={product} />
              <button onClick={() => addProductToCart(product)} className={styles.add_btn}>
                Add to cart
              </button>
            </div>

            <div className={styles.description_container}>
              <h2 className={styles.text_description}>Description</h2>
              <p className={styles.description}>{product.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductPage1440;
