import { Navigate, Outlet } from "react-router-dom";

const RoleRoute = ({ allowedRoles }) => {
  const userRole = localStorage.getItem("userRole"); // Ambil role dari localStorage

  return allowedRoles.includes(userRole) ? (
    <Outlet />
  ) : (
    <Navigate to="/dashboard" />
  );
};

export default RoleRoute;
