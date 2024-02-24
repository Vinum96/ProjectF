import React from "react";
import styles from "../../styles/router/CartPage.module.css";
import BlockNameBtn from "../../ui/reused/BlockNameBtn";
import { NavLink, useNavigate } from "react-router-dom";
import BasketCard from "../../ui/productsCard/BasketCard";
import CheckoutForm from "../../ui/reused/CheckoutForm";
import Order from "../../components/cartComponents/Order";
import { useSelector } from "react-redux";
import { cartSelector } from "../../redux/slices/CartSlice";
import EmptyCart from "../../components/cartComponents/EmptyCart";
import { useState } from "react";
import ModalWindow from "../../components/cartComponents/ModalWindow";
import { useSendOrderMutation } from "../../redux/api/productApi";
import useWindowSize from "../../customFiles/hooks/useWindowSize";
import BackToTopButton from "../../ui/reused/BackToTopButton";

function CartPage() {
  const [sendProduct] = useSendOrderMutation();
  const [sendingOrder, setSendingOrder] = useState(false);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const { width } = useWindowSize();

  const { cart: cartProducts } = useSelector(cartSelector);

  return (
    <div className={styles.cartPage_container}>
      <BlockNameBtn pageTitle="Shopping cart" btnTitle="Back to the store" onClick={goBack} />
      {cartProducts.length == 0 ? (
        <EmptyCart />
      ) : (
        <div className={styles.cart_container}>
          <BasketCard arr={cartProducts} />

          <div className={styles.form_container}>
            <Order />
            <CheckoutForm
              sendProduct={sendProduct}
              setSendingOrder={setSendingOrder}
              cartProducts={cartProducts}
              classInput={styles.input}
              classBtn={styles.btn}
              txtBtn="Order"
            />
          </div>
          {width < 480 && (
            <NavLink className={styles.btn_goBack} onClick={goBack}>
              Back to the store
            </NavLink>
          )}
          <ModalWindow sendingOrder={sendingOrder} setSendingOrder={setSendingOrder} />
        </div>
      )}
      <BackToTopButton />
    </div>
  );
}

export default CartPage;
