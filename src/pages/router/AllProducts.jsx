import React from "react";
import styles from "../../styles/router/AllProducts.module.css";
import ProductCard from "../../ui/productsCard/ProductCard";
import NavigationPath from "../../ui/reused/NavigationPath";
import FilterByDiscount from "../../ui/filterSearch/FilterByDiscount";
import FilterByPrice from "../../ui/filterSearch/FilterByPrice";
import FilterBySorted from "../../ui/filterSearch/FilterBySorted";
import { useFilterByDiscount } from "../../customFiles/hooks/useFilterByDiscount";
import { useFilterByPrice } from "../../customFiles/hooks/useFilterByPrice";
import { useSelector } from "react-redux";
import { productsSelector } from "../../redux/slices/ProductSlice";
import { useFilterBySorted } from "../../customFiles/hooks/useFilterBySorted";
import BackToTopButton from "../../ui/reused/BackToTopButton";

const paths = ["Main page", "All products"];

function AllProducts() {
  const { products: allProducts } = useSelector(productsSelector);

  const {
    filterValue,
    filteredList: filteredListByDiscount,
    onFilter,
  } = useFilterByDiscount(allProducts, "discont_price");
  const { filterByMax, filterByMin, filteredList, priceFrom, priceTo } =
    useFilterByPrice(filteredListByDiscount);
  const { onSort, sortedList, sortMode } = useFilterBySorted(filteredList, "price");

  return (
    <div className={styles.allProducts_container}>
      <NavigationPath arr={paths} />
      <h1 className={styles.title_page}>All products</h1>
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

export default AllProducts;
