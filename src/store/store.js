// path: src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; // Mengimpor reducer autentikasi

const store = configureStore({
  reducer: {
    auth: authReducer, // Menambahkan reducer auth ke dalam store
  },
});

export default store;
