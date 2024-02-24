import React from "react";
import styles from "../../styles/cartStyles/ModalWindow.module.css";
import cross from "../../images/cross.svg";

function ModalWindow({ sendingOrder, setSendingOrder }) {
  const closeWindow = () => setSendingOrder(false);
  return (
    <div className={sendingOrder ? `${styles.modal_container}` : `${styles.modal_close}`}>
      <div className={styles.modal_window}>
        <div className={styles.txt_container}>
          <h1 className={styles.title}>Congratulations!</h1>
          <img onClick={() => closeWindow()} className={styles.button_close} src={cross} />
        </div>
        <p className={styles.modal_text}>
          Your order has been successfully placed on the website.
          <br />
          <br />A manager will contact you shortly to confirm your order.
        </p>
      </div>
    </div>
  );
}

export default ModalWindow;
