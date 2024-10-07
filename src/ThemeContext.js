import React, { createContext, useState, useMemo, useCallback } from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleMode = useCallback(() => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }, []);

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
        ...(mode === "light"
          ? {
              text: {
                primary: "#1C1C1C",
                secondary: "#1C1C1C66",
              },
              background: {
                default: "#ffffff",
                secondary: "#F7F9FB",
              },
            }
          : {
              text: {
                primary: "#ffffff",
              },
              background: {
                default: "#121212",
                secondary: "#404040",
              },
            }),
      },
    });
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
