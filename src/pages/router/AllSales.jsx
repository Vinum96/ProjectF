import React from 'react'
import styles from '../../styles/router/AllProducts.module.css'
import ProductCard from '../../ui/productsCard/ProductCard'
import { useGetAllProductsQuery } from '../../redux/api/productApi'

let products = []

function AllSales() {
  const { data, isLoading } = useGetAllProductsQuery()
  if (data && !isLoading) {
    products = data.filter(product => product.discont_price)
  } else {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.allProducts_container}>
      <h1 className={styles.title_page}>Discounted items</h1>
      <ProductCard products={products} classNameContainer={styles.products_container} />
    </div>
  )
}

export default AllSales