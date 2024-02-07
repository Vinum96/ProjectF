import React from 'react'
import styles from '../../styles/homeStyles/Discount.module.css'
import gartenProduct from '../../images/gartenProduct.png'
import CheckoutForm from '../../ui/reused/CheckoutForm'

function Discount() {
  return (
    <div className={styles.discount_container}>
      <p className={styles.title}>5% off on the first order</p>
      <div className={styles.imgForm_container}>
        <img className={styles.img} src={gartenProduct} alt="image" />
        <CheckoutForm
          classInput={styles.input}
          classBtn={styles.btn}
          txtBtn='Get a discount' />
      </div>
    </div>
  )
}

export default Discount