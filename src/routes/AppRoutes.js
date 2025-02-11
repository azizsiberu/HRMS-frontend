// path: src/routes/AppRoutes.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

import Login from "../modules/Auth/Login";
import Register from "../modules/Auth/Register";

import AdminDashboard from "../modules/Dashboard/AdminDashboard";
import EmployeeDashboard from "../modules/Dashboard/EmployeeDashboard";

import Layout from "../components/Layout"; // Import Layout.js

const AppRoutes = () => {
  return (
    <Routes>
      {/* Halaman sebelum login (Tanpa AppBar) */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />

      {/* Halaman setelah login (Dengan AppBar & Bottom Navigation) */}
      <Route element={<Layout />}>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/employee" element={<EmployeeDashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
