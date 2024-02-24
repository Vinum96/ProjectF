import React from "react";
import styles from "../../styles/headerStyles/HeaderPage.module.css";
import CustomLink from "../../customFiles/customLink/CustomLink";

function Nav({ open, navClassName }) {
  return (
    <nav>
      <ul className={open ? `${navClassName}` : `${styles.links_container}`}>
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
      </ul>
    </nav>
  );
}

export default Nav;
