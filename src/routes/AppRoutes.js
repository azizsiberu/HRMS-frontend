// path: src/routes/AppRoutes.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

import Login from "../modules/Auth/Login";
import Register from "../modules/Auth/Register";

import Dashboard from "../modules/Dashboard/Home";
const AppRoutes = () => {
  return (
    <Routes>
      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />

      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
