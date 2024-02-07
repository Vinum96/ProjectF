import React from "react";
import styles from "../../styles/router/AllProducts.module.css";
import ProductCard from "../../ui/productsCard/ProductCard";
import { useGetAllProductsQuery } from "../../redux/api/productApi";

let products = [];

function AllProducts() {
  const { data, isLoading } = useGetAllProductsQuery();
  if (data && !isLoading) {
    products = data;
  } else {
    return <div>Loading...</div>;
  }
  console.log(products);

  return (
    <div className={styles.allProducts_container}>
      <h1 className={styles.title_page}>All products</h1>
      <ProductCard products={products} classNameContainer={styles.products_container} />
    </div>
  );
}

export default AllProducts;
