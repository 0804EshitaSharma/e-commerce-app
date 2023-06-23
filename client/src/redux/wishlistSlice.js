import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistProducts: [
      {
        name: "Lego Orchid Tree",
        description: "Lego Orchid",
        price: "59.98",
        rating: "5",
        image: "https://m.media-amazon.com/images/I/71iY-AO2D1L._AC._SR360,460.jpg",
      },
      {
        name: "Hogwarts Express",
        description: "Lego Harry Potter Hogwarts Express",
        price: "618.98",
        rating: "5",
        image: "https://m.media-amazon.com/images/I/81cuoMC1o6L._AC_UL800_QL65_.jpg"
      }
    ]
  },
  reducers: {
    clearWishlist: (state, action) => {
        state.wishlistProducts = [];
    },
    addItem: (state, action) => {
        state.wishlistProducts.push(action.payload);
    },
    removeItem: (state, action) => {
      const foundIndex = state.wishlistProducts.findIndex(item => item.name === action.payload);
      if (foundIndex !== -1) {
        state.wishlistProducts.splice(foundIndex, 1);
      }
    }
  },
});

export const { clearWishlist, addItem, removeItem } = wishlistSlice.actions;

export default wishlistSlice.reducer;