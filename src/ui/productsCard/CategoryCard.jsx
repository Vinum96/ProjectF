import React from "react";
import styles from "../../styles/uiStyles/productsCard/CategoryCard.module.css";
import { BASE_URL } from "../../redux/api/baseUrl";
import { NavLink } from "react-router-dom";

function CategoryCard({ classNameImg, classNameCategoriesContainer, array }) {
  return (
    <div className={classNameCategoriesContainer}>
      {array &&
        array.map((category) => (
          <NavLink
            to={"/ProductsInCategories"}
            state={{ id: category.id, title: category.title }}
            className={styles.category_container}
            key={category.id}
          >
            <div
              className={classNameImg}
              style={{ backgroundImage: `url(${BASE_URL + category.image})` }}
            ></div>
            <p className={styles.description_categories}>{category.title}</p>
          </NavLink>
        ))}
    </div>
  );
}

export default CategoryCard;
