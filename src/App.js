import AppStyle from "./App.module.scss";

//react-router-dom
import { Route, Routes } from "react-router-dom";

//redux
import { useDispatch } from "react-redux";
import { checkLogin } from "./storee/features/auth/userSlice"

//component import
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Landing from "./pages/landing/Landing";
import Budget from "./pages/budget/Budget";
import History from "./pages/history/History";
import EditProfile from "./pages/editprofile/EditProfile";

const App = () => {
  const dispatch = useDispatch();
  dispatch(checkLogin());
  return (
    <div className={AppStyle.App}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/history" element={<History />} />
        <Route path="/myProfile" element={<EditProfile />} />
      </Routes>
    </div>
  );
};

export default App;
