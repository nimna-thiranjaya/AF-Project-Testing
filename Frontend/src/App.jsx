import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/layouts/Login";
import AdminHome from "./components/user/admin/AdminHome";
import CustomerHome from "./components/user/customer/CustomerHome";
import UserRegister from "./components/user/UserRegister";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/ahome" element={<AdminHome />} />
        <Route path="/chome" element={<CustomerHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
