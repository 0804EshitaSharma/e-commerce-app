import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistProducts: []
  },
  reducers: {
    clearWishlist: (state, action) => {
        state.wishlistProducts = [];
    },
    addItem: (state, action) => {
        state.wishlistProducts.push(action.payload);
    },
    removeItem: (state, action) => {
      const foundIndex = state.wishlistProducts.findIndex((item) => item.Name === action.payload);
      if (foundIndex !== -1) {
        state.wishlistProducts.splice(foundIndex, 1);
      }
    }
  },
});

export const { clearWishlist, addItem, removeItem } = wishlistSlice.actions;

export default wishlistSlice.reducer;