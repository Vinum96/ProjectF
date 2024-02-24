import React from "react";
import styles from "../../styles/router/HomePage.module.css";
import CategoryCard from "../../ui/productsCard/CategoryCard";
import BlockNameBtn from "../../ui/reused/BlockNameBtn";
import { useGetCategoriesAllQuery } from "../../redux/api/productApi";
import useWindowSize from "../../customFiles/hooks/useWindowSize";
import { NavLink } from "react-router-dom";

let categories = [];

function HomeCategories() {
  const { data } = useGetCategoriesAllQuery();
  if (data) {
    categories = data.slice(0, 4);
  }
  const { width } = useWindowSize();

  return (
    <div className={styles.main_container}>
      <BlockNameBtn pageTitle="Categories" btnTitle="All categories" path={"CategoriesPage"} />
      <CategoryCard
        array={categories}
        classNameCategoriesContainer={styles.categories_container}
        classNameImg={styles.img_categories}
      />
      {width < 480 && (
        <NavLink className={styles.btn_goBack} to="CategoriesPage">
          All categories
        </NavLink>
      )}
    </div>
  );
}

export default HomeCategories;
