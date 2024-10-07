import React from 'react';
import ResponsiveAppBar from '../ApplicationBar/ApplicationBar';
import SideNavbar from '../SideNavbar/SideNavbar';
import SideInfobar from '../SideInfobar/SideInfobar';
import { Box, Grid, Stack, useTheme } from '@mui/material';

import useWindowSize from "../../hooks/useWindowSize";

const Layout = ({ children }) => {
  const theme = useTheme();

  const size = useWindowSize();

  return (
    <Grid container sx={{ display: 'flex' }}>
      <Grid item lg={1}>
        {size.width > 1200 &&
          <Box
            sx={{
              width: '16.66%',
              padding: "30px 0 0 20px",
              position: 'fixed',
              top: 0,
              left: 0,
              height: '100vh',
              backgroundColor: 'background.paper',
              zIndex: 3,
              borderRight: "1px solid rgb(208, 207, 207)"
            }}
          >
            <SideNavbar />
          </Box>
        }
      </Grid>

      <Grid item>
        <Box sx={{ position: "fixed", zIndex: 1 }}>
          <ResponsiveAppBar />
        </Box>
        <Box padding={1} marginTop={3} bgcolor={theme.palette.background.default}>
          {children}
        </Box>
      </Grid>

      <Grid item lg={2}>
        {size.width > 1200 &&
          <Box
            sx={{
              width: '16.66%',
              padding: "30px 0 0 10px",
              position: 'fixed',
              top: 0,
              right: 0,
              height: '100vh',
              backgroundColor: 'background.paper',
              zIndex: 3,
              borderLeft: "1px solid rgb(208, 207, 207)"
            }}
          >
            <SideInfobar />
          </Box>
        }
      </Grid>
    </Grid>
  );
}

export default Layout;