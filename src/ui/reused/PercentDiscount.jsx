import React from "react";

function PercentDiscount({ product, classNameDiscount }) {
  return (
    <>
      {product.discont_price ? (
        <p className={classNameDiscount}>{`- ${Math.ceil(100 - product.discont_price / (product.price / 100))} %`}</p>
      ) : (
        ""
      )}
    </>
  );
}

export default PercentDiscount;
