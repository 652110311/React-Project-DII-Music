import { configureStore } from "@reduxjs/toolkit";
import productReducers from "../features/Admin/products/reducers";

export default configureStore({
  reducer: {
    products: productReducers,
  },
});
