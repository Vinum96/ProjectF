import React from "react";
import styles from "../../styles/router/ProductPage.module.css";
import { useLocation } from "react-router-dom";
import CounterButtons from "../../ui/reused/CounterButtons";
import CheckingDiscountPrice from "../../ui/reused/CheckingDiscountPrice";
import PercentDiscount from "../../ui/reused/PercentDiscount";
import { useGetProductQuery } from "../../redux/api/productApi";
import { BASE_URL } from "../../redux/api/baseUrl";
import { useDispatch } from "react-redux";
import { addOrIncrementProduct } from "../../redux/slices/CartSlice";

let product = [];

function ProductPage() {
  const location = useLocation();
  const { state } = location;
  const dispatch = useDispatch();

  const { data, isLoading } = useGetProductQuery(state.id);
  if (data && !isLoading) {
    product = data;
  } else {
    return <div>Loading...</div>;
  }

  const addProductToCart = (productAdd) => {
    dispatch(addOrIncrementProduct(productAdd));
  };

  return (
    <>
      {product.map((product) => (
        <div key={product.id} className={styles.product_container}>
          <div className={styles.img} style={{ backgroundImage: `url(${BASE_URL + product.image})` }}></div>

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
    </>
  );
}

export default ProductPage;
