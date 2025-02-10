// path: src/routes/AppRoutes.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../modules/Auth/Login";
import Register from "../modules/Auth/Register";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
