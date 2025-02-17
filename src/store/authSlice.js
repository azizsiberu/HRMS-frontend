// path: src/store/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, register } from "../api/authApi"; // Mengimpor fungsi API

// State awal
const initialState = {
  user: null,
  token: localStorage.getItem("token") || null, // Menyimpan token dari localStorage
  status: "idle", // status untuk request async (idle, loading, succeeded, failed)
  error: null,
};

// Thunk untuk login
export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await login(credentials.email, credentials.password);
      return response; // return data yang ingin disimpan di state
    } catch (error) {
      return rejectWithValue(error.response.data); // Tangani error
    }
  }
);

// Thunk untuk register
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await register(
        userData.name,
        userData.email,
        userData.password
      );
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data); // Tangani error
    }
  }
);

// Slice untuk autentikasi
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token"); // Hapus token dari localStorage
    },
  },
  extraReducers: (builder) => {
    // Handle status loading, succeeded, failed
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token); // Simpan token di localStorage
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// Export actions dan reducer
export const { logout } = authSlice.actions;
export default authSlice.reducer;
