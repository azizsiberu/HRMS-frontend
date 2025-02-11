// path: src/components/Layout.js

import React from "react";
import { Outlet } from "react-router-dom";
import AppNavigation from "./AppBar"; // AppBar & Bottom Navigation

const Layout = () => {
  return (
    <>
      <AppNavigation /> {/* AppBar di atas atau Bottom Navigation di bawah */}
      <Outlet /> {/* Ini akan menampilkan halaman yang sedang dikunjungi */}
    </>
  );
};

export default Layout;
