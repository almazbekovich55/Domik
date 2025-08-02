import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./CreateProductSlice";
import userReducer from "./CreateUserSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
  },
});
