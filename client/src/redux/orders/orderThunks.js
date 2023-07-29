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

export const createOrderAsync = createAsyncThunk(
  actions.CREATE_ORDERS,
  async (orderData) => {
    let results = await OrderService.createOrder(orderData);
    return results;
  }
);

export const returnOrderAsync = createAsyncThunk(
  actions.RETURN_ORDER,
  async (orderID) => {
    await OrderService.returnOrder(orderID);
    return orderID;
  }
);
