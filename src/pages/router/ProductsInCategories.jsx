import React from "react";
import styles from "../../styles/router/AllProducts.module.css";
import ProductCard from "../../ui/productsCard/ProductCard";
import { useGetProductsInCategoriesQuery } from "../../redux/api/productApi";
import { useLocation } from "react-router-dom";
import NavigationPath from "../../ui/reused/NavigationPath";
import FilterByPrice from "../../ui/filterSearch/FilterByPrice";
import FilterByDiscount from "../../ui/filterSearch/FilterByDiscount";
import FilterBySorted from "../../ui/filterSearch/FilterBySorted";
import { useFilterByDiscount } from "../../customFiles/hooks/useFilterByDiscount";
import { useFilterByPrice } from "../../customFiles/hooks/useFilterByPrice";
import { useFilterBySorted } from "../../customFiles/hooks/useFilterBySorted";
import BackToTopButton from "../../ui/reused/BackToTopButton";

const paths = ["Main page", "Categories", "Tools and equipment"];

function ProductsInCategories() {
  const location = useLocation();
  const { state } = location;

  const { currentData: allProducts } = useGetProductsInCategoriesQuery(state.id);

  const {
    filterValue,
    filteredList: filteredListByDiscount,
    onFilter,
  } = useFilterByDiscount(allProducts && allProducts.data, "discont_price");
  const { filterByMax, filterByMin, filteredList, priceFrom, priceTo } =
    useFilterByPrice(filteredListByDiscount);
  const { onSort, sortedList, sortMode } = useFilterBySorted(filteredList, "price");

  return (
    <div className={styles.allProducts_container}>
      <NavigationPath arr={paths} />
      <h1 className={styles.title_page}>{state.title}</h1>
      <div className={styles.filter_container}>
        <FilterByPrice
          priceFrom={priceFrom}
          priceTo={priceTo}
          filterByMin={filterByMin}
          filterByMax={filterByMax}
        />
        <FilterByDiscount checked={filterValue} onChange={onFilter} />
        <FilterBySorted sortProducts={onSort} sortMode={sortMode} />
      </div>
      <ProductCard products={sortedList} classNameContainer={styles.products_container} />
      <BackToTopButton />
    </div>
  );
}

export default ProductsInCategories;
