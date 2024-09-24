import React from 'react';
import ResponsiveAppBar from '../ApplicationBar/ApplicationBar';
import SideNavbar from '../SideNavbar/SideNavbar';
import SideInfobar from '../SideInfobar/SideInfobar';
import { Box, Stack } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        sx={{
          width: 190,
          padding: "30px 0 0 20px",
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          backgroundColor: 'background.paper',
          zIndex: 2,
          borderRight: "1px solid rgb(208, 207, 207)"
        }}
      >
        <SideNavbar />
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ position: 'fixed', width: '100%', zIndex: 1 }}>
          <ResponsiveAppBar />
        </Box>
        <Box sx={{ padding: '10px 60px 30px 0', marginTop: '30px' }}>
          {children}
        </Box>
      </Box>
      <Box
        sx={{
          width: 300,
          padding: "30px 0 0 20px",
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100vh',
          backgroundColor: 'background.paper',
          zIndex: 2,
          borderLeft: "1px solid rgb(208, 207, 207)"
        }}
      >
        <SideInfobar />
      </Box>
    </Box >
  );
}

export default Layout;