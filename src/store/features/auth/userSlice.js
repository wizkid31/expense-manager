import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userAuthService from "../../../services/auth";

export const signUpUser = createAsyncThunk("user/signUpUser", async (data) => {
  const response = await userAuthService.register(data);
  return response;
});

export const checkLoginStatus = createAsyncThunk(
  "user/checkLoginStatus",
  async () => {
    const response = await userAuthService.profile(
      localStorage.getItem("token")
    );
    return response;
  }
);

export const loginUser = createAsyncThunk("user/User", async (data) => {
  const response = await userAuthService.login(data);
  return response;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    data: {},
    error: {},
  },
  reducer: {},
  extraReducers: {
    [signUpUser.rejected]: (state, action) => {
      console.log(action);
      state.error = action.error;
    },
    [signUpUser.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.adminData = action.payload;
      console.log(state.adminData)
    },
    [checkLoginStatus.fulfilled]: (state, action) => {
      // if (action.payload.statusCode === 200) {
        localStorage.setItem("token", action.payload.token);
        state.isLoggedIn = true;
        state.adminData = action.payload.data;
        // state.status = "fulfilled";
      // } else {
      //   localStorage.setItem("token", "");
      //   state.isLoggedIn = false;
      //   state.adminData = {};
      //   state.status = "error";
      // }
    },
    [loginUser.fulfilled]: (state, action) => {
      // if (action.payload.statusCode === 200) {
      localStorage.setItem("token", action.payload.token);
      // state.status = "fulfilled";
      state.adminData = action.payload;
      // } else {
      //   state.status = "error";
      //   localStorage.setItem("token", "");
      //   state.isLoggedIn = false;
      //   state.adminData = {};
      // }
    },
  },
});

export const selectAdmin = (state) => state.user.data;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;

export default userSlice.reducer;
