import React from 'react'
import styles from '../../styles/homeStyles/HomeSale.module.css'
import BlockNameBtn from '../../ui/reused/BlockNameBtn';
import ProductCard from '../../ui/productsCard/ProductCard';
import { useGetAllProductsQuery } from '../../redux/api/productApi'

let products = []

function HomeSale() {
  const { data, isLoading } = useGetAllProductsQuery()
  if (data && !isLoading) {
    products = data.filter(product => product.discont_price).slice(0, 4)
  } else {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.homeSale_container}>
      <BlockNameBtn
        pageTitle='Sale'
        btnTitle='All sales'
        path={'AllSales'}
        classNameLine={styles.saleLine} />

      <ProductCard products={products} classNameContainer={styles.products_container} />
    </div >
  )
}

export default HomeSale