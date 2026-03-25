'use client';

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import React, { createContext, useContext } from "react";

// Dark theme only - no localStorage
const darkTheme = createTheme({
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
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
          textTransform: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
        },
      },
    },
  },
});

type ThemeContextType = {
  mode: "dark";
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={{ mode: "dark" }}>
      <MuiThemeProvider theme={darkTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};