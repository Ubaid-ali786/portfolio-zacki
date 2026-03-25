import { createTheme, ThemeOptions } from "@mui/material/styles";

export const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#667eea",
      light: "#764ba2",
      dark: "#5a67d8",
    },
    secondary: {
      main: "#f093fb",
      light: "#f6d5f7",
      dark: "#e07ef0",
    },
    background: {
      default: "#f7fafc",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "3.5rem",
      fontWeight: 700,
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
      marginBottom: "1rem",
    },
    h3: {
      fontSize: "1.8rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
          textTransform: "none",
          padding: "10px 24px",
          fontSize: "1rem",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
          transition: "all 0.3s ease-in-out",
        },
      },
    },
  },
};

export const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#8b9dff",
      light: "#a0b0ff",
      dark: "#5a6fd8",
    },
    secondary: {
      main: "#f6a8ff",
      light: "#ffb8ff",
      dark: "#e07ef0",
    },
    background: {
      default: "#0a0a2a",
      paper: "#1a1a3a",
    },
  },
  typography: lightTheme.typography,
  components: lightTheme.components,
};

export const getTheme = (mode: "light" | "dark") =>
  createTheme(mode === "light" ? lightTheme : darkTheme);
