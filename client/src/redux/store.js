import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart/cartSlice";
import { userSlice } from "./userSlice";
import { wishlistSlice } from "./wishlistSlice";
/*Learned from https://redux-toolkit.js.org/tutorials/quick-start */
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    cart: cartSlice.reducer,
    wishlist: wishlistSlice.reducer,
  },
  devTools: true,
});
export default store;
