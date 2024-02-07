import React from "react";
import styles from "../../styles/router/CategoriesPage.module.css";
import CategoryCard from "../../ui/productsCard/CategoryCard";
import NavigationPath from "../../ui/reused/NavigationPath";
import { useGetCategoriesAllQuery } from "../../redux/api/productApi";

let categories = [];
const paths = ["Main page", "Categories"];

function CategoriesPage() {
  const { data, isLoading } = useGetCategoriesAllQuery();
  if (data && !isLoading) {
    categories = data;
  } else {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.categoriesPage_container}>
      <NavigationPath arr={paths} />
      <p className={styles.title}>Categories</p>
      <CategoryCard
        array={categories}
        classNameCategoriesContainer={styles.categories}
        classNameImg={styles.img}
      />
    </div>
  );
}

export default CategoriesPage;
