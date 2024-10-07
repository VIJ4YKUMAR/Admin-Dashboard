import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme, GlobalStyles } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import CssBaseline from '@mui/material/CssBaseline';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { ThemeProvider } from './ThemeContext';
import Layout from './Components/Layout/Layout'
import OrdersPage from './Components/OrdersPage/OrdersPage';

const HomePage = lazy(() => import('./Components/HomePage/HomePage'));

const App = () => {
  const theme = useTheme();

  return (
    <ThemeProvider>
      <CssBaseline />
      <Router>
        <GlobalStyles styles={{
          body: {
            margin: 0,
            display: 'flex',
            placeItems: 'center',
            minWidth: '320px',
            minHeight: '100vh',
          },
        }} />
        <Layout>
          <Suspense fallback={<div><CircularProgress disableShrink /></div>}>
            <Routes>
              <Route path='*' element={<HomePage />} />
              <Route path='/orders' element={<OrdersPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App;
