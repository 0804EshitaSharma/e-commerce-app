import { createSlice } from "@reduxjs/toolkit";
import { getOrdersAsync } from "./orderThunks";
import { returnOrderAsync } from "./orderThunks";
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
    builder.addCase(returnOrderAsync.fulfilled, (state, action) => {
      const id = action.payload;
      const index = state.list.findIndex((item) => item._id == id);
      if (index > -1) {
        state.list.splice(index, 1);
      }
    });
  },
});

export const { getOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
