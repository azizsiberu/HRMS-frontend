// path: src/routes/AppRoutes.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

import {
  Login,
  Register,
  ForgotPassword,
  ResetPassword,
} from "../modules/Auth";

import AdminDashboard from "../modules/Dashboard/AdminDashboard";
import EmployeeDashboard from "../modules/Dashboard/EmployeeDashboard";

import Layout from "../components/Layout"; // Import Layout.js

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* Halaman sebelum login (Tanpa AppBar) */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Halaman 404 Not Found */}

        <Route path="*" element={<NotFound />} />

        {/* Halaman setelah login (Dengan AppBar & Bottom Navigation) */}
        <Route element={<Layout />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/employee" element={<EmployeeDashboard />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default AppRoutes;
