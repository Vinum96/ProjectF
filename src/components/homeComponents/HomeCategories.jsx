import React from 'react'
import styles from '../../styles/router/HomePage.module.css'
import CategoryCard from '../../ui/productsCard/CategoryCard';
import BlockNameBtn from '../../ui/reused/BlockNameBtn';
import { useGetCategoriesAllQuery } from '../../redux/api/productApi';

let categories = []

function HomeCategories() {
  const { data } = useGetCategoriesAllQuery()
  if (data) {
    categories = data.slice(0, 4)
  }

  return (
    <div className={styles.main_container}>
      <BlockNameBtn
        pageTitle='Categories'
        btnTitle='All categories'
        path={'CategoriesPage'}
        classNameLine={styles.categoriesLine} />
      <CategoryCard
        array={categories}
        classNameCategoriesContainer={styles.categories_container}
        classNameImg={styles.img_categories} />
    </div>
  )
}

export default HomeCategories