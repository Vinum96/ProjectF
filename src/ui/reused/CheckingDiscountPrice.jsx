import React from "react";

function CheckingDiscountPrice({ product, classNameContainer, classNamePrice, classNameDiscountPrice, prise, discountPrice }) {
  return (
    <div className={classNameContainer}>
      {product.discont_price ? (
        <>
          <p className={classNamePrice}>{"$" + ((discountPrice && Math.round(discountPrice * 100) / 100) || product.discont_price)}</p>
          <p className={classNameDiscountPrice}>{"$" + ((prise && Math.round(prise * 100) / 100) || product.price)}</p>
        </>
      ) : (
        <p className={classNamePrice}>{"$" + ((prise && Math.round(prise * 100) / 100) || product.price)}</p>
      )}
    </div>
  );
}

export default CheckingDiscountPrice;
