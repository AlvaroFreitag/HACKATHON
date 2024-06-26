import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProductDetail from "./pages/ProductDetail.jsx";
import Login from "./pages/Login.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>}></Route>
        <Route exact path="/detail" element={<ProductDetail/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
