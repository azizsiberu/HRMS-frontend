// path: src/contexts/AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import { getUserSession, login, logout, register } from "../api/authApi";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      if (token) {
        try {
          const data = await getUserSession();
          setUser(data.user);
        } catch (error) {
          setUser(null);
          setToken(null);
          localStorage.removeItem("token");
        }
      }
      setLoading(false);
    };
    checkSession();
  }, [token]);

  const handleLogin = async (email, password) => {
    try {
      const data = await login(email, password);
      setUser(data.user);
      setToken(data.token);
      localStorage.setItem("token", data.token);
      return data;
    } catch (error) {
      throw error;
    }
  };

  const handleRegister = async (userData) => {
    try {
      const data = await register(userData);
      setUser(data.user);
      setToken(data.token);
      localStorage.setItem("token", data.token);
      return data;
    } catch (error) {
      throw error;
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      setToken(null);
      localStorage.removeItem("token");
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        handleLogin,
        handleRegister,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
