import AppStyle from "./App.module.scss";

//react-router-dom
import { Route, Routes } from "react-router-dom";

//component import
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Landing from "./pages/landing/Landing";
import Budget from "./pages/budget/Budget";
import History from "./pages/history/History";

const App = () => {
  return (
    <div className={AppStyle.App}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/budget" element={<Budget />} /> 
        <Route path="/history" element={<History />} /> 
      </Routes>
    </div>
  );
};

export default App;
