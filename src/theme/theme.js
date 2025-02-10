// path: src/theme/theme.js

import { createTheme } from "@mui/material/styles";

// Definisi tema berbasis Material Design (hanya mode light)
const theme = createTheme({
  palette: {
    primary: {
      main: "#006D5A", // P-40 (Primary)
      light: "#A1F2DB", // P-90 (Primary Container) (Juga digunakan untuk On Primary Container)
    },
    secondary: {
      main: "#4B635C", // S-40 (Secondary)
      light: "#CDE9DE", // S-90 (Secondary Container)
    },
    tertiary: {
      main: "#426277", // T-40 (Tertiary)
      light: "#C6E7FF", // T-90 (Tertiary Container)
    },
    error: {
      main: "#BA1A1A", // E-40 (Error)
      light: "#FFDAD6", // E-90 (Error Container)
    },
    background: {
      default: "#F5FBF7", // N-98 (Surface)
      paper: "#D5DBD8", // N-87 (Surface Dim)
    },
    neutral: {
      main: "#2B322F", // N-20 (Inverse Surface)
    },
    inversePrimary: {
      main: "#86D6BF", // P-80 (Inverse Primary)
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      color: "neutral",
    },
    button: {
      textTransform: "none", // Hindari uppercase default pada button
    },
  },
  shape: {
    borderRadius: 8, // Sudut elemen membulat (default: 4px)
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          textTransform: "none",
          fontWeight: "bold",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "16px",
          boxShadow: "0px 3px 6px rgba(0,0,0,0.1)",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },
});

export default theme;
