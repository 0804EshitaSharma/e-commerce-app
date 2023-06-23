import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user/userSlice";
import { cartSlice } from "./cart/cartSlice";
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    cart: cartSlice.reducer,
  },
});
export default store;
