import { configureStore } from "@reduxjs/toolkit";
import cart from "./cart-slice";

const store = configureStore({
  reducer: {
    cart: cart
  }
});

export default store;