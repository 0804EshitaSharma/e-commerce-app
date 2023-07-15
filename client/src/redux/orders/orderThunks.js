import { createAsyncThunk } from "@reduxjs/toolkit";
import { actions } from "./orderActions";
import OrderService from "./ordersService";

export const getOrdersAsync = createAsyncThunk(
  actions.GET_ORDERS,
  async (userID) => {
    let results = await OrderService.getOrders(userID);
    return results;
  }
);
