import AppStyle from "./App.module.scss";

//react-router-dom
import { Route, Routes } from "react-router-dom";

//component import
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Landing from "./pages/landing/Landing";

const App = () => {
  return (
    <div className={AppStyle.App}>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Landing/>} />
      </Routes>
    </div>
  );
};

export default App;
