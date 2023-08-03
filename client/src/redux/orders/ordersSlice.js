import { createSlice } from "@reduxjs/toolkit";
import {
  getOrdersAsync,
  returnOrderAsync,
  createOrderAsync,
} from "./orderThunks";
const initial_State = {
  list: [],
  order: {},
  loading: false,
  error: null,
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
    createOrder: (state, action) => {
      state.order = action.payload;
    },
    resetOrder: (state) => {
      state.order = null;
      state.loading = false;
      state.error = null;
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
    builder
      .addCase(createOrderAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrderAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
      })
      .addCase(createOrderAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { getOrders, createOrder, resetOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
