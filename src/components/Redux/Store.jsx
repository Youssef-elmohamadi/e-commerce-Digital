import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cartSlice/CartSlice";
import CompareReducer from "./compareSlice/CompareSlice";

const Store = configureStore({
  reducer: {
    cart: CartReducer,
    compare: CompareReducer,
  },
});

export default Store;
