import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createOrderAsync = createAsyncThunk(
  "order/createOrderAsync",
  async (orderData) => {
    console.log("Sending order data to server:", orderData);
    const response = await axios.post("/order", orderData);
    console.log("Server response:", response.data);
    return response.data;
  }
);

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: null,
    loading: false,
    error: null,
  },
  reducers: {
    resetOrder: (state) => {
      state.order = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrderAsync.pending, (state) => {
        console.log("createOrderAsync.pending");
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrderAsync.fulfilled, (state, action) => {
        console.log("createOrderAsync.fulfilled", action.payload);
        state.loading = false;
        state.order = action.payload;
      })
      .addCase(createOrderAsync.rejected, (state, action) => {
        console.log("createOrderAsync.rejected", action.error.message);
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetOrder } = orderSlice.actions;

export default orderSlice.reducer;