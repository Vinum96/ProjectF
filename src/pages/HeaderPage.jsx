import React from "react";
import styles from "../styles/headerStyles/HeaderPage.module.css";
import Logo from "../images/logo.png";
import Cart from "../images/cart.png";
import CustomLink from "../customFiles/customLink/CustomLink";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartSelector } from "../redux/slices/CartSlice";
import Burger from "../components/headerComponent/Burger";
import Nav from "../components/headerComponent/Nav";
import useWindowSize from "../customFiles/hooks/useWindowSize";

function HeaderPage() {
  const { width } = useWindowSize();
  const { cart: cartProducts } = useSelector(cartSelector);

  return (
    <header className={styles.header}>
      <NavLink to="">
        <img className={styles.icon_logo} src={Logo} alt="icon logo" />
      </NavLink>

      <Nav />

      <div className={styles.cartBurger_container}>
        <CustomLink to="CartPage">
          <p className={styles.count}>{cartProducts.length}</p>
          <img className={styles.icon_cart} src={Cart} alt="icon cart" />
        </CustomLink>
        {width < 768 && <Burger />}
      </div>
    </header>
  );
}

export default HeaderPage;
