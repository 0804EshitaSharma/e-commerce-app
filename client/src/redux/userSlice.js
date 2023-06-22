import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    loggedInUser: (state, action) => {
      state.user = action.payload;
    },
    loggedOut: (state, action) => {
      state.user = null;
    },
  },
});

export const { loggedInUser, loggedOut } = userSlice.actions;

export default userSlice.reducer;
