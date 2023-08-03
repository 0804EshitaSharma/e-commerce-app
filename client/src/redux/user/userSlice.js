import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { APIPaths } from "../../utils/APIPaths";

export const addUserAsync = createAsyncThunk(
  "user/addUserAsync",
  async (newUser) => {
    const response = await axios.post(APIPaths.User, newUser);
    return response.data;
  }
);

export const updateUserAsync = createAsyncThunk(
  "items/updateUserAsync",
  async (updatedUser) => {
    const response = await axios.patch(
      `${APIPaths.User}/${updatedUser._id}`,
      updatedUser
    );
    return response.data;
  }
);

export const getUserInfoAsync = createAsyncThunk(
  "items/getUserInfoAsync",
  async (id) => {
    const response = await fetch(`${APIPaths.User}/${id}`);

    if (response.ok) {
      const detail = await response.json();
      return detail;
    }
  }
);
export const sendMailAsync = createAsyncThunk(
  "users/sendMailAsync",
  async (user) => {
    const response = await axios.post(`${APIPaths.User}/mail`, user);
    if (response.ok) {
      return response.data;
    }
  }
);
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      _id: null,
      firstname: null,
      lastname: null,
      useremail: null,
      userpassword: null,
      mobile: null,
      address: null,
    },
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
  },
  extraReducers: (builder) => {
    builder.addCase(addUserAsync.fulfilled, (state, action) => {
      state.users.push(action.payload);
    });
    builder.addCase(getUserInfoAsync.fulfilled, (state, action) => {
      state.user = {
        _id: action.payload._id,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        useremail: action.payload.useremail,
        userpassword: action.payload.userpassword,
        mobile: action.payload.mobile,
        address: action.payload.address,
      };
    });
    builder.addCase(updateUserAsync.fulfilled, (state, action) => {
      state.user = {
        _id: action.payload._id != null ? action.payload._id : state.user._id,
        firstname:
          action.payload.firstname != null
            ? action.payload.firstname
            : state.user.firstname,
        lastname:
          action.payload.lastname != null
            ? action.payload.lastname
            : state.user.lastname,
        useremail:
          action.payload.useremail != null
            ? action.payload.useremail
            : state.user.useremail,
        userpassword:
          action.payload.userpassword != null
            ? action.payload.userpassword
            : state.user.userpassword,
        mobile:
          action.payload.mobile != null
            ? action.payload.mobile
            : state.user.mobile,
        address:
          action.payload.address != null
            ? action.payload.address
            : state.user.address,
      };
    });
  },
});

export const { loggedInUser, loggedOut, updateUserInfo } = userSlice.actions;

export default userSlice.reducer;
