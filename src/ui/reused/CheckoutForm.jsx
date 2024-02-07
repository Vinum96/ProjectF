import React from 'react'
import styles from '../../styles/uiStyles/reused/CheckoutForm.module.css'

function CheckoutForm({ classInput, classBtn, txtBtn, onClick }) {
  return (
    <div className={styles.form_container}>
      <div className={styles.input_container}>
        <input className={`${classInput} ${styles.input}`} type="text" placeholder='Name' />
        <input className={`${classInput} ${styles.input}`} type="number" placeholder='Phone number' />
        <input className={`${classInput} ${styles.input}`} type="text" placeholder='Email' />
      </div>
      <button className={`${classBtn} ${styles.btn}`} onClick={onClick}>{txtBtn}</button>
    </div>
  )
}

export default CheckoutForm