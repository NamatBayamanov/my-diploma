import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slices/cartSlice/cartSlice";

import authSlice from "../slices/authSlice/authSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    auth: authSlice,
  }
});


store.subscribe(() => {
  localStorage.setItem('cartItems', JSON.stringify(
    store.getState().cart.items
  ));

  // console.log(store.getState().auth);
  const auth = store.getState().auth;
  if(auth.localId !== null) {
    localStorage.setItem("auth", JSON.stringify(auth));
  }
});



export default store;