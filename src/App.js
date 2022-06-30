import AppStyle from "./App.module.scss";

//react-router-dom
import { Route, Routes } from "react-router-dom";

//component import
import Signup from "./resources/pages/signup/Signup";
import Login from "./resources/pages/login/Login";

const App = () => {
  return (
    <div className={AppStyle.App}>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
