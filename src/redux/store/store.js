import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slices/cartSlice/cartSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
  }
});


store.subscribe(() => {
  localStorage.setItem('cartItems', JSON.stringify(
    store.getState().cart.items
  ));
});

export default store;