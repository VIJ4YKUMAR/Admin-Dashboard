import React, { lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Layout from './Components/Layout/Layout'
import OrdersPage from './Components/OrdersPage/OrdersPage';

const HomePage = lazy(() => import('./Components/HomePage/HomePage'));

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='*' element={<HomePage />} />
          <Route path='/orders' element={<OrdersPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App;
