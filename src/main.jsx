import React, { useState, useCallback, useMemo, useRef } from 'react'
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from "@mui/material/styles";
import { GlobalStyles } from '@mui/material';
import themeOptions from "../theme/theme";
import './index.css'
import App from './App';


const Root = () => {

  const themeRef = useRef(null);

  const getTheme = (mode) => {
    return createTheme({
      palette: {
        mode: mode,
        ...(mode === "light"
          ? {
            text: {
              primary: "#1C1C1C",
              secondary: "#1C1C1C66",
            },
            background: {
              default: "#ffffff",
              secondary: "#F7F9FB"
            },
          }
          : {
            text: {
              primary: "#ffffff",
            },
            background: {
              default: "#121212",
              secondary: "#404040"
            },
          }),
      },
    });
  };

  const themeMode = themeRef.current?.mode || "light";

  const theme = useMemo(() => getTheme(themeMode), [themeMode]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{
        body: {
          margin: 0,
          display: 'flex',
          placeItems: 'center',
          minWidth: '320px',
          minHeight: '100vh',
          background: theme.palette.mode === 'dark' ? '#121212' : 'white',
        },
      }} />
      <App themeRef={themeRef} />
    </ThemeProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);