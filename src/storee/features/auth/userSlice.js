import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userAuthService from "../../../services/auth";

export const signUpUser = createAsyncThunk("user/signUpUser", async (data) => {
  const response = await userAuthService.register(data);
  return response;
});

export const getUserProfile = createAsyncThunk(
  "user/getUserProfile",
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
    loggedInStatus: false,
    data: {},
    error: {},
    loginUserData: {},
    userCredentials: {},
  },
  reducers: {
    logout: (state, action) => {
      localStorage.setItem("token", "");
      state.loggedInStatus = false;
      state.loginUserData = {};
      state.userCredentials = {};
    },
    checkLogin: (state, action) => {
      const accesObjToken = localStorage.getItem("token");
      if (accesObjToken === "") {
        state.loggedInStatus = false;
      } else {
        state.loggedInStatus = true;
      }
    },
  },
  extraReducers: {
    [signUpUser.rejected]: (state, action) => {
      console.log(action);
      state.error = action.error;
    },
    [signUpUser.fulfilled]: (state, action) => {
      console.log(action.payload);
      localStorage.setItem("token", action.payload.token);
      state.data = action.payload;
      console.log(state.data);
    },
    [loginUser.fulfilled]: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.isLoggedIn = true;
      state.loginUserData = action.payload;
    },
    [getUserProfile.fulfilled]: (state, action) => {
      state.selectUserCredentials = action.payload;
    },
  },
});

export const loggedInStatus = (state) => state.user.loggedInStatus;
export const selectUserCredentials = (state) => state.user.userCredentials;
export const { logout, checkLogin } = userSlice.actions;

export default userSlice.reducer;
