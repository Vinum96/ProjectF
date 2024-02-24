import React from "react";
import styles from "../../styles/router/ProductPage.module.css";
import NavigationPath from "../../ui/reused/NavigationPath";
import { BASE_URL } from "../../redux/api/baseUrl";
import CheckingDiscountPrice from "../../ui/reused/CheckingDiscountPrice";
import PercentDiscount from "../../ui/reused/PercentDiscount";
import CounterButtons from "../../ui/reused/CounterButtons";
import useWindowSize from "../../customFiles/hooks/useWindowSize";

function ProductPage768({ product, addProductToCart, paths }) {
  const { width } = useWindowSize();
  return (
    <div className={styles.container}>
      <NavigationPath arr={paths} />
      {product.map((product) => (
        <div key={product.id} className={styles.product_container768}>
          {width < 768 && <p className={styles.title}>{product.title}</p>}
          <div className={styles.img_price_container}>
            <div
              className={styles.img}
              style={{ backgroundImage: `url(${BASE_URL + product.image})` }}
            >
              {width < 768 && (
                <PercentDiscount product={product} classNameDiscount={styles.percent_discount} />
              )}
            </div>

            <div className={styles.data_product}>
              {width > 768 && <p className={styles.title}>{product.title}</p>}

              <div className={styles.main_price_container}>
                <CheckingDiscountPrice
                  product={product}
                  classNameContainer={styles.price_container}
                  classNamePrice={styles.price}
                  classNameDiscountPrice={styles.discount_price}
                />
                {width > 768 && (
                  <PercentDiscount product={product} classNameDiscount={styles.percent_discount} />
                )}
              </div>

              <div className={styles.btn_container}>
                <CounterButtons product={product} />
                <button onClick={() => addProductToCart(product)} className={styles.add_btn}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          <div className={styles.description_container}>
            <h2 className={styles.text_description}>Description</h2>
            <p className={styles.description}>{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductPage768;
