import React, { useState } from "react";
import styles from "../../styles/homeStyles/Discount.module.css";
import gartenProduct from "../../images/gartenProduct.png";
import CheckoutForm from "../../ui/reused/CheckoutForm";
import { useSendRequestCouponMutation } from "../../redux/api/productApi";

function Discount() {
  const [sendDiscount] = useSendRequestCouponMutation();
  const [sendingDiscount, setSendingDiscount] = useState(false);

  return (
    <div className={styles.discount_container}>
      <p className={styles.title}>5% off on the first order</p>
      <div className={styles.imgForm_container}>
        <img className={styles.img} src={gartenProduct} alt="image" />
        {!sendingDiscount ? (
          <CheckoutForm
            setSendingDiscount={setSendingDiscount}
            sendDiscount={sendDiscount}
            classInput={styles.input}
            classBtn={styles.btn}
            txtBtn="Get a discount"
          />
        ) : (
          <div className={styles.send_container}>
            <p className={styles.text_send}>
              Congratulations!!! You have received a discount on all products!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Discount;
