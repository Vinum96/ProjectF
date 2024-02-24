import React, { useMemo } from "react";
import styles from "../../styles/homeStyles/HomeSale.module.css";
import BlockNameBtn from "../../ui/reused/BlockNameBtn";
import ProductCard from "../../ui/productsCard/ProductCard";
import { useSelector } from "react-redux";
import { productsSelector } from "../../redux/slices/ProductSlice";

let products = [];

function HomeSale() {
  const { products: allProducts } = useSelector(productsSelector);
  products = useMemo(() => allProducts && allProducts.filter((product) => product.discont_price).slice(0, 4), []);

  return (
    <div className={styles.homeSale_container}>
      <BlockNameBtn pageTitle="Sale" btnTitle="All sales" path={"AllSales"} />

      <ProductCard products={products} classNameContainer={styles.products_container} />
    </div>
  );
}

export default HomeSale;
