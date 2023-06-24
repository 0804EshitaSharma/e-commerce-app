import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistProducts: [
      {
        Name: "LEGO Bonsai Tree Building",
        Description: "Features a LEGO bonsai tree model with a rectangular pot and slatted wood-effect stand",
        Category: "Home",
        Price: "64.98",
        Rating: "2.5",
        Images: ["https://m.media-amazon.com/images/I/71pVP0qS4wL._AC_UL800_FMwebp_QL65_.jpg"]
      },
      {
        Name: "LEGO Harry Potter Hogwarts Express",
        Description: "Enter the Wizarding World with this LEGO replica model of the Hogwarts Express train",
        Category: "Home",
        Price: "618.98",
        Rating: "5",
        Images: ["https://m.media-amazon.com/images/I/81cuoMC1o6L._AC_UL800_QL65_.jpg"]
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
      const foundIndex = state.wishlistProducts.findIndex((item) => item.Name === action.payload);
      if (foundIndex !== -1) {
        state.wishlistProducts.splice(foundIndex, 1);
      }
    }
  },
});

export const { clearWishlist, addItem, removeItem } = wishlistSlice.actions;

export default wishlistSlice.reducer;