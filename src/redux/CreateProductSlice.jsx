import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

const productSlice = createSlice({
  name: "PRODUCT_SLICE",
  initialState,
  reducers: {
    getProduct(state, action) {
      state.product = action.payload;
    },
  },
});

export const { getProduct } = productSlice.actions;
export default productSlice.reducer;
