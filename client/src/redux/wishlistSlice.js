import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistProducts: [
      {
        description: "Lego Orchid",
        price: "59.98",
        rating: "5",
        image: "https://m.media-amazon.com/images/I/71iY-AO2D1L._AC._SR360,460.jpg",
      }
    ]
  },
  reducers: {
    clearWishlist: (state, action) => {
        state.products = [];
    },
    addItem: (state, action) => {
        state.products.push(action.payload);
    },
    removeItem: (state, action) => {
        
    }
  },
});

export const { clearWishlist, addItem, removeItem } = wishlistSlice.actions;

export default wishlistSlice.reducer;