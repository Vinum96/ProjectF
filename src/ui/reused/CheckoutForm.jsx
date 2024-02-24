import React from "react";
import styles from "../../styles/uiStyles/reused/CheckoutForm.module.css";
import { useForm } from "react-hook-form";

function CheckoutForm({
  setSendingOrder,
  setSendingDiscount,
  sendProduct,
  sendDiscount,
  cartProducts,
  classInput,
  classBtn,
  txtBtn,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    sendDiscount && sendDiscount({ ...data });
    sendProduct && sendProduct({ ...data, order: cartProducts });
    setSendingOrder && setSendingOrder(true);
    setSendingDiscount && setSendingDiscount(true);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form_container}>
      <label className={styles.input_container}>
        <input
          {...register("name", {
            required: "Field is required!",
          })}
          className={`${classInput} ${styles.input}`}
          type="text"
          placeholder="Name"
        />
        {errors?.name && <p className={styles.error_message}>{errors.name?.message}</p>}

        <input
          {...register("number", {
            required: "Field is required!",
            minLength: { value: 13, message: "min 13 characters" },
            maxLength: { value: 13, message: "max 13 characters" },
          })}
          className={`${classInput} ${styles.input}`}
          type="number"
          placeholder="Phone number"
        />
        {errors?.number && <p className={styles.error_message}>{errors.number?.message}</p>}

        <input
          {...register("email", {
            required: "Field is required!",
          })}
          className={`${classInput} ${styles.input}`}
          type="email"
          placeholder="Email"
        />
        {errors?.email && <p className={styles.error_message}>{errors.email?.message}</p>}
      </label>
      <button disabled={!isValid} className={`${classBtn} ${styles.btn}`}>
        {txtBtn}
      </button>
    </form>
  );
}

export default CheckoutForm;
