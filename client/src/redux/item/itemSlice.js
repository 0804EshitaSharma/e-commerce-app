import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addNewItemAsync = createAsyncThunk(
  "items/addNewItemAsync",
  async (newItem) => {
    const response = await axios.post("/new", newItem);
    return response.data;
  }
);

export const deleteItemAsync = createAsyncThunk(
  "items/deleteItemAsync",
  async (id) => {
    const response = await axios.delete(`/item/${id}`);
    return id;
  }
);

export const itemSlice = createSlice({
  name: "item",
  initialState: {
    items: [],
  },
  reducers: {
    addNewItem: (state, action) => {
      state.items.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.items = state.items.splice(action.payload, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addNewItemAsync.fulfilled, (state, action) => {
      state.items.push(action.payload);
    });
    builder.addCase(deleteItemAsync.fulfilled, (state, action) => {
      const id = action.payload;
      const index = state.items.findIndex((item) => item._id == id);
      if (index > -1) {
        state.items.splice(index, 1);
      }
    });
  },
});
export const { addNewItem } = itemSlice.actions;

export default itemSlice.reducer;
