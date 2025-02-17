// path: src/api/authApi.js
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const authApi = axios.create({
  baseURL: `${API_BASE_URL}/auth`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Logging Request
authApi.interceptors.request.use((request) => {
  console.debug(
    `🔍 [AUTH API] Request: ${request.method.toUpperCase()} ${request.url}`,
    request.data
  );
  return request;
});

// Logging Response
authApi.interceptors.response.use(
  (response) => {
    console.debug(
      `✅ [AUTH API] Response: ${response.config.url}`,
      response.data
    );
    return response;
  },
  (error) => {
    console.error(
      `❌ [AUTH API] Error: ${error.config?.url}`,
      error.response?.data || error.message
    );
    return Promise.reject(error.response?.data || error.message);
  }
);

/**
 * Login User
 * @param {string} email
 * @param {string} password
 * @returns {Promise<Object>} response.data (token, user)
 */
export const login = async (email, password) => {
  try {
    const response = await authApi.post("/login", { email, password });
    console.log(`🔓 User logged in: `, response.data.user);
    return response.data;
  } catch (error) {
    console.error(`⚠️ Login failed:`, error);
    throw error;
  }
};

/**
 * Register User
 * @param {Object} userData
 * @returns {Promise<Object>} response.data
 */
export const register = async (userData) => {
  try {
    const response = await authApi.post("/register", userData);
    console.log(`🆕 User registered: `, response.data.user);
    return response.data;
  } catch (error) {
    console.error(`⚠️ Registration failed:`, error);
    throw error;
  }
};

/**
 * Logout User
 * @returns {Promise<Object>} response.data
 */
export const logout = async () => {
  try {
    const response = await authApi.post("/logout");
    console.log(`🚪 User logged out`);
    return response.data;
  } catch (error) {
    console.error(`⚠️ Logout failed:`, error);
    throw error;
  }
};

/**
 * Refresh Token
 * @returns {Promise<Object>} response.data (new token)
 */
export const refreshToken = async () => {
  try {
    const response = await authApi.get("/refresh-token");
    console.log(`🔄 Token refreshed`);
    return response.data;
  } catch (error) {
    console.error(`⚠️ Token refresh failed:`, error);
    throw error;
  }
};

/**
 * Get User Session
 * @returns {Promise<Object>} response.data (user data, role)
 */
export const getUserSession = async () => {
  try {
    const response = await authApi.get("/session");
    console.log(`👤 User session: `, response.data);
    return response.data;
  } catch (error) {
    console.error(`⚠️ Failed to get user session:`, error);
    throw error;
  }
};
