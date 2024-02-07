import React from "react";
import styles from "../../styles/uiStyles/productsCard/ProductCard.module.css";
import { BASE_URL } from "../../redux/api/baseUrl";
import { NavLink } from "react-router-dom";
import CheckingDiscountPrice from "../reused/CheckingDiscountPrice";
import PercentDiscount from "../reused/PercentDiscount";
import { useDispatch } from "react-redux";
import { addOrIncrementProduct } from "../../redux/slices/CartSlice";

function ProductCard({ products, classNameContainer }) {
  const dispatch = useDispatch();

  const addProductToCart = (product) => {
    dispatch(addOrIncrementProduct(product));
  };

  return (
    <div className={classNameContainer}>
      {products.map((product) => (
        <div className={styles.product_container} key={product.id}>
          <div className={styles.img_container}>
            <NavLink to={"/ProductPage"} state={{ id: product.id, title: product.title }}>
              <div className={styles.img_products} style={{ backgroundImage: `url(${BASE_URL + product.image})` }}></div>
            </NavLink>
            <button onClick={() => addProductToCart(product)} className={styles.btnAdd}>
              Add to cart
            </button>
            <PercentDiscount product={product} classNameDiscount={styles.discount} />
          </div>

          <div className={styles.description_container}>
            <p className={styles.title}>{product.title}</p>
            <CheckingDiscountPrice
              product={product}
              classNameContainer={styles.price_container}
              classNamePrice={styles.price}
              classNameDiscountPrice={styles.discount_price}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
