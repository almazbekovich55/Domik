import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

export const createProductSlice = createSlice({
  name: "PRODUCT_SLICE",
  initialState,
  reducers: {
    getProduct(state, action) {
      state.product = action.payload;
    },
    setFavorite(state, action) {
      const res = state.product.find((el) => el._id === action.payload._id);
      if (res) {
        res.isFavorite = !res.isFavorite;
        localStorage.setItem("favorites", JSON.stringify(state.product));
      } else {
        console.error("Product not found");
      }
    },
  },
});

export const { getProduct, setFavorite } = createProductSlice.actions;
export default createProductSlice.reducer;
