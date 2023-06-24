import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
/*Learned from https://redux-toolkit.js.org/tutorials/quick-start */
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
export default store;
