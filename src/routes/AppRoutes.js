// path: src/routes/AppRoutes.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

import Login from "../modules/Auth/Login";
import Register from "../modules/Auth/Register";

import Dashboard from "../modules/Dashboard/Home";
import AdminDashboard from "../modules/Dashboard/AdminDashboard";
import EmployeeDashboard from "../modules/Dashboard/EmployeeDashboard";
const AppRoutes = () => {
  return (
    <Routes>
      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/employee" element={<EmployeeDashboard />} />
    </Routes>
  );
};

export default AppRoutes;
