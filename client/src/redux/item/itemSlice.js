import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addNewItemAsync = createAsyncThunk(
  "items/addNewItemAsync",
  async (newItem) => {
    const response = await axios.post("/new", newItem);
    return response.data;
  }
);
export const getProdListAsync = createAsyncThunk(
  "items/getProdListAsync",
  async () => {
    const response = await axios.get("/products");
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
export const getItemInfoAsync = createAsyncThunk(
  "items/getItemInfoAsync",
  async (id) => {
    const response = await axios.get(`/${id}`);
    return response.data;
  }
);
export const updateItemAsync = createAsyncThunk(
  "items/updateItemAsync",
  async (updatedItem) => {
    const response = await axios.patch(`/${updatedItem.id}`, updatedItem.data);
    return response.data;
  }
);
export const itemSlice = createSlice({
  name: "item",
  initialState: {
    items: [],
    selectedItem: null,
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
    builder.addCase(getProdListAsync.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(getItemInfoAsync.fulfilled, (state, action) => {
      state.selectedItem = action.payload;
    });
    builder.addCase(deleteItemAsync.fulfilled, (state, action) => {
      const id = action.payload;
      const index = state.items.findIndex((item) => item._id == id);
      if (index > -1) {
        state.items.splice(index, 1);
      }
    });
    builder.addCase(updateItemAsync.fulfilled, (state, action) => {
      const updatedItem = action.payload;
      const index = state.items.findIndex(
        (item) => item._id === updatedItem._id
      );
      if (index !== -1) {
        state.items[index] = updatedItem;
      }
    });
  },
});
export const { addNewItem } = itemSlice.actions;
export const products = (state) => state.item.items;
export default itemSlice.reducer;
