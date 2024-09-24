import React from 'react'
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from "@mui/material/styles";
import themeOptions from "../theme/theme";
import './index.css'
import App from './App';


const theme = createTheme(themeOptions);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);