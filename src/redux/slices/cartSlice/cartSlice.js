import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const checkout = createAsyncThunk('cart/checkout', async (order, thunkAPI) => {
  const response = await axios.post('https://my-diploma-f8e4b-default-rtdb.firebaseio.com/orders.json', order);

  return response.data;
});

// function sameInStorage(items) {
//   localStorage.setItem("cartItems", JSON.stringify(items));
// }

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: JSON.parse(localStorage.getItem('cartItems') ?? '{}'),
  },
  reducers: {
    add: (store, action) => {
      if (store.items[action.payload]) {
        store.items[action.payload]++;
      }
      else {
        store.items[action.payload] = 1;
      }
      // sameInStorage(store.items);
    },
    // add2: (store, action) => {
    //   if (store.items[action.payload]) {
    //     store.items[action.payload]++;
    //   }
    //   else {
    //     store.items[action.payload] = 1;
    //   }
    //   // sameInStorage(store.items);
    // },
    remove: (store, action) => {
      delete store.items[action.payload];
      // sameInStorage(store.items);

    },
    increment: (store, action) => {
      store.items[action.payload]++;
      // sameInStorage(store.items);

    },
    decrement: (store, action) => {
      if (store.items[action.payload] > 1) {
        store.items[action.payload]--;
      }
      else {
        delete store.items[action.payload];
      }
      // sameInStorage(store.items);

    },
    // restore: (store, action) => {
    //   store.items = JSON.parse(localStorage.getItem("cartItems") ?? `{}` );
    // },

  },
  extraReducers: {
    [checkout.fulfilled]: (state, action) => {
      console.log(action);
      state.items = {};
    }
  },
});
export const { add, remove, increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;