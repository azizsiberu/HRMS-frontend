// path: src/App.js

import React from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import { MdHome, MdInfo } from "react-icons/md";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      {/* Routing */}
      <Box sx={{ p: 3 }}>
        <AppRoutes />
      </Box>
    </Box>
  );
}

export default App;
