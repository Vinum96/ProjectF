import React, { useMemo } from "react";
import styles from "../../styles/router/AllProducts.module.css";
import ProductCard from "../../ui/productsCard/ProductCard";
import NavigationPath from "../../ui/reused/NavigationPath";
import FilterByPrice from "../../ui/filterSearch/FilterByPrice";
import FilterBySorted from "../../ui/filterSearch/FilterBySorted";
import { useFilterByPrice } from "../../customFiles/hooks/useFilterByPrice";
import { useFilterBySorted } from "../../customFiles/hooks/useFilterBySorted";
import { useSelector } from "react-redux";
import { productsSelector } from "../../redux/slices/ProductSlice";
import BackToTopButton from "../../ui/reused/BackToTopButton";

let products = [];
const paths = ["Main page", "All sales"];

function AllSales() {
  const { products: allProducts } = useSelector(productsSelector);
  products = useMemo(() => allProducts.filter((product) => product.discont_price), []);

  const { filterByMax, filterByMin, filteredList, priceFrom, priceTo } = useFilterByPrice(products);
  const { onSort, sortedList, sortMode } = useFilterBySorted(filteredList, "price");

  return (
    <div className={styles.allProducts_container}>
      <NavigationPath arr={paths} />
      <h1 className={styles.title_page}>Discounted items</h1>
      <div className={styles.filter_container}>
        <FilterByPrice
          priceFrom={priceFrom}
          priceTo={priceTo}
          filterByMin={filterByMin}
          filterByMax={filterByMax}
        />
        <FilterBySorted sortProducts={onSort} sortMode={sortMode} />
      </div>
      <ProductCard products={sortedList} classNameContainer={styles.products_container} />
      <BackToTopButton />
    </div>
  );
}

export default AllSales;
