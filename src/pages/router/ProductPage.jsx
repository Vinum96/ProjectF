import React from "react";
import { useLocation } from "react-router-dom";
import { useGetProductQuery } from "../../redux/api/productApi";
import { useDispatch } from "react-redux";
import { addOrIncrementProduct } from "../../redux/slices/CartSlice";
import useWindowSize from "../../customFiles/hooks/useWindowSize";
import ProductPage1440 from "../../components/productComponents/ProductPage1440";
import ProductPage768 from "../../components/productComponents/ProductPage768";
import BackToTopButton from "../../ui/reused/BackToTopButton";

let product = [];
const paths = ["Main page", "Categories", "Tools and equipment", "Secateurs"];

function ProductPage() {
  const location = useLocation();
  const { state } = location;
  const dispatch = useDispatch();
  const { width } = useWindowSize();

  const { data, isLoading } = useGetProductQuery(state.id);
  if (data && !isLoading) {
    product = data;
  } else {
    return <div>Loading...</div>;
  }

  const addProductToCart = (productAdd) => {
    dispatch(addOrIncrementProduct(productAdd));
  };

  return (
    <>
      {width > 1000 ? (
        <ProductPage1440 product={product} addProductToCart={addProductToCart} paths={paths} />
      ) : (
        <ProductPage768 product={product} addProductToCart={addProductToCart} paths={paths} />
      )}
      <BackToTopButton />
    </>
  );
}

export default ProductPage;
