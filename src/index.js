//react import
import React from "react";

//react-dom import
import ReactDOM from "react-dom/client";

//component import
import App from "./App";

//react-router-dom
import { BrowserRouter } from "react-router-dom";

//font import
import "./components/font/font.module.scss";
//redux
import { store } from "./storee/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
