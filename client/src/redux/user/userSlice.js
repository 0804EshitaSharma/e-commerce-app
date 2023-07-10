import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addUserAsync = createAsyncThunk(
  "user/addUserAsync",
  async (newUser) => {
    const response = await axios.post("/user", newUser);
    return response.data;
  }
);

export const updateUserAsync = createAsyncThunk(
  "items/updateUserAsync",
  async (updatedUser) => {
    const response = await axios.patch(`/user/${updatedUser.id}`, updatedUser);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isAdmin: false,
    users: [],
  },
  reducers: {
    loggedInUser: (state, action) => {
      state.user = action.payload;
    },
    loggedOut: (state, action) => {
      state.user = null;
    },
    updateUserInfo: (state, action) => {
      state.user = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    isAdmin: (state) => {
      state.isAdmin = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addUserAsync.fulfilled, (state, action) => {
      state.users.push(action.payload);
    });
  },
});

export const { loggedInUser, loggedOut, updateUserInfo, isAdmin } =
  userSlice.actions;

export default userSlice.reducer;
