import AppStyle from "./App.module.scss";

//react-router-dom
import { Route, Routes } from "react-router-dom";

//component import
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Landing from "./pages/landing/Landing";
import Budget from "./pages/budget/Budget";

const App = () => {
  return (
    <div className={AppStyle.App}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/budget" element={<Budget />} /> 
      </Routes>
    </div>
  );
};

export default App;
