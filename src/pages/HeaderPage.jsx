import React from "react";
import styles from "../styles/HeaderPage.module.css";
import Logo from "../images/logo.png";
import Cart from "../images/cart.png";
import CustomLink from "../customFiles/customLink/CustomLink";
import { NavLink } from "react-router-dom";

function HeaderPage() {
  return (
    <header className={styles.header}>
      <NavLink to="">
        <img className={styles.icon_logo} src={Logo} alt="icon logo" />
      </NavLink>

      <nav className={styles.links_container}>
        <CustomLink defaultClass={styles.link} to="">
          Main Page
        </CustomLink>
        <CustomLink defaultClass={styles.link} to="CategoriesPage">
          Categories
        </CustomLink>
        <CustomLink defaultClass={styles.link} to="AllProducts">
          All products
        </CustomLink>
        <CustomLink defaultClass={styles.link} to="AllSales">
          All sales
        </CustomLink>
      </nav>

      <CustomLink to="CartPage">
        <img className={styles.icon_cart} src={Cart} alt="icon cart" />
      </CustomLink>
    </header>
  );
}

export default HeaderPage;
