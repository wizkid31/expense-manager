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
    data: {},
    error: {},
    loginUserData: {},
    loggedInStatus: false,
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
      const accessTokenObj = localStorage.getItem("token");
      if (accessTokenObj === "") {
        state.loggedInStatus = false;
      } else {
        state.loggedInStatus = true;
        state.loginUserData = action.payload;
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
      state.data = action.payload;
    },
    [loginUser.fulfilled]: (state, action) => {
      console.log(action);
      localStorage.setItem("token", action.payload.token);
      state.loginUserData = action.payload;
      state.loggedInStatus = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      console.log(action);
      localStorage.setItem("token", action.payload.token);
      state.loggedInStatus = true;
    },
    [getUserProfile.fulfilled]: (state, action) => {
      state.userCredentials = action.payload;
      console.log(state.userCredentials);
    },
  },
});

export const selectUser = (state) => state.user.data;
export const { logout, checkLogin } = userSlice.actions;
export const selectUserCredentials = (state) => state.user.userCredentials;
export const loggedInStatus = (state) => state.user.loggedInStatus;

export default userSlice.reducer;
