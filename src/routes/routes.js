// path: src/routes/routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import RoleRoutes from "./RoleRoutes";
import Login from "../modules/Auth/Login";
import Register from "../modules/Auth/Register";
import Dashboard from "../modules/Dashboard";
import AdminPage from "../modules/Admin";
import EmployeePage from "../modules/Employee";
import Unauthorized from "../modules/Auth/Unauthorized";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* Protected Routes */}
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Role-based Routes */}
        <Route element={<RoleRoutes allowedRoles={["admin", "manager"]} />}>
          <Route path="/admin" element={<AdminPage />} />
        </Route>

        <Route element={<RoleRoutes allowedRoles={["employee"]} />}>
          <Route path="/employee" element={<EmployeePage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
