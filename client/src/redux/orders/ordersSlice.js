import { createSlice } from "@reduxjs/toolkit";
import { getOrdersAsync } from "./orderThunks";

const initial_State = {
  list: [],
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState: initial_State,
  reducers: {
    getOrders: (state, action) => {
      let ordersList = action.payload;
      //console.log(ordersList);
      state.list = ordersList;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOrdersAsync.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const { getOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
