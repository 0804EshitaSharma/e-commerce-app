import { createSlice, current } from "@reduxjs/toolkit";

const initial_State = {
  itemsList: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initial_State,
  reducers: {
    addProductToCart: (state, action) => {
      let newItem = action.payload;
      state.itemsList.push(newItem);
    },
    removeAllInCart: (state, action) => {
      state.itemsList = [];
    },
    removeProductFromCart: (state, action) => {
      let currentState = current(state.itemsList);
      let itemToBeRemoved = currentState.findIndex((item) => {
        return item === action.payload;
      });
      let newState = currentState.toSpliced(itemToBeRemoved, 1);
      state.itemsList = newState;
    },
  },
});

export const { addProductToCart, removeAllInCart, removeProductFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
