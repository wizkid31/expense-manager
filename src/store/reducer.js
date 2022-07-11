import { combineReducers } from "redux";
import userReducer from "./features/auth/userSlice";

export default combineReducers({
  user: userReducer,
});
