import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [1],
};

const cartSlice = createSlice({
  name: "cartProducts",
  initialState: initialState,
  reducers: {
    addOrIncrementProduct: (state, action) => {
      const isUnique = state.cart.every((el) => action.payload.id !== el.id);
      if (isUnique) {
        state.cart.push({
          ...action.payload,
          count: 1,
          total_price: action.payload.price,
          discount_total_price: action.payload.discont_price,
        });
      } else {
        state.cart = state.cart.map((el) => {
          if (action.payload.id === el.id) {
            return {
              ...el,
              count: ++el.count,
              total_price: el.price * el.count,
              discount_total_price: el.discont_price * el.count,
            };
          }
          return el;
        });
      }
    },

    removeProduct: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    decrementProduct: (state, action) => {
      state.cart = state.cart.map((el) => {
        if (action.payload.id === el.id && el.count > 1) {
          return {
            ...el,
            count: el.count - 1,
            total_price: el.total_price - el.price,
            discount_total_price: el.discount_total_price - el.discont_price,
          };
        }
        return el;
      });
    },
  },
});

export const cartSelector = (state) => state.cartProducts;
export const { addOrIncrementProduct, removeProduct, decrementProduct } = cartSlice.actions;
export default cartSlice.reducer;
