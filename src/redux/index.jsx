import { configureStore } from "@reduxjs/toolkit";
import createProductSlice from "./CreateProductSlice";

export const store = configureStore({
  reducer: {
    mainReducer: createProductSlice,
  },
});
