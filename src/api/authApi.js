// path: src/api/authApi.js
import axios from "axios";

const API_URL = process.env.REACT_APP_API_BASE_URL + "/auth";

export const loginRequest = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Login gagal";
  }
};

export const logoutRequest = async () => {
  try {
    await axios.post(`${API_URL}/logout`);
    localStorage.removeItem("token");
  } catch (error) {
    console.error("Logout gagal:", error);
  }
};
