import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart/cartSlice";
import { userSlice } from "./user/userSlice";
import { wishlistSlice } from "./wishlistSlice";
import { itemSlice } from "./item/itemSlice";
/*Learned from https://redux-toolkit.js.org/tutorials/quick-start */
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    cart: cartSlice.reducer,
    wishlist: wishlistSlice.reducer,
    item: itemSlice.reducer,
  },
  devTools: true,
});
export default store;
