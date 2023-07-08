import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addNewItemAsync = createAsyncThunk(
  "items/addNewItemAsync",
  async (newItem) => {
    const response = await axios.post("/new", newItem);
    return response.data;
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
  },
  extraReducers: (builder) => {
    builder.addCase(addNewItemAsync.fulfilled, (state, action) => {
      state.items.push(action.payload);
    });
  },
});
export const { addNewItem } = itemSlice.actions;

export default itemSlice.reducer;
