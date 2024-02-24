import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryProducts: [],
};

const categoryProductsSlice = createSlice({
  name: "categoryProducts",
  initialState: initialState,
  reducers: {
    setCategoryProducts: (state, action) => {
      state.categoryProducts = action.payload;
    },
  },
});

export const categoryProductsSelector = (state) => state.categoryProducts;

export const { setCategoryProducts } = categoryProductsSlice.actions;

export default categoryProductsSlice.reducer;
