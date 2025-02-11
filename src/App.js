// path: src/App.js

import React from "react";
import { Box } from "@mui/material";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      {/* Routing */}
      <Box>
        <AppRoutes />
      </Box>
    </Box>
  );
}

export default App;
