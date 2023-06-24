import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { wishlistSlice } from "./wishlistSlice";
/*Learned from https://redux-toolkit.js.org/tutorials/quick-start */

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    wishlist: wishlistSlice.reducer,
  },
  devTools: true,
});
export default store;
