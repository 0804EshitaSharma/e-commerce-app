import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addToWishList = createAsyncThunk(
  "wishlist/addToWishList",
  async (newItem) => {
    const response = await axios.post("")
  }
)

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
      const foundIndex = state.wishlistProducts.findIndex((item) => item.name === action.payload);
      if (foundIndex !== -1) {
        state.wishlistProducts.splice(foundIndex, 1);
      }
    }
  },
});

export const { clearWishlist, addItem, removeItem } = wishlistSlice.actions;

export default wishlistSlice.reducer;