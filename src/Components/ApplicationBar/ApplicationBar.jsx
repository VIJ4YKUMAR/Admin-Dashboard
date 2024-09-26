import React, { useImperativeHandle, forwardRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ViewSidebarOutlinedIcon from '@mui/icons-material/ViewSidebarOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import HistoryIcon from '@mui/icons-material/History';
import Stack from '@mui/material/Stack';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useTheme } from '@mui/material';
import SearchBar from '../SearchBar/SearchBar';

import "../ApplicationBar/applicationbar.css";

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = ({ themeRef }) => {
  const theme = useTheme();

  const [mode, setMode] = useState("dark");

  const toggleMode = useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);

  useImperativeHandle(themeRef, () => ({
    mode,
  }), [mode]);

  return (
    <AppBar sx={{ background: theme.palette.background.default }} sx={{ boxShadow: "none" }} className="appbar-container">
      <Container maxWidth="xl">
        <Toolbar sx={{ background: theme.palette.background.default }} className="appbar" disableGutters>
          <Stack direction="row" gap={3} paddingLeft={2}>
            <Link>
              <ViewSidebarOutlinedIcon style={{ color: theme.palette.text.primary }} />
            </Link>
            <Link>
              <StarBorderOutlinedIcon style={{ color: theme.palette.text.primary }} />
            </Link>
            <Breadcrumbs>
              <Link style={{ color: theme.palette.text.primary }} underline="none" href="/">
                Dashboards
              </Link>
              <Typography color="textPrimary">Defaults</Typography>
            </Breadcrumbs>
          </Stack>
          <Stack direction="row" gap={3} paddingRight={18}>
            <SearchBar inNavbar />
            <Link>
              <LightModeIcon style={{ color: theme.palette.text.primary }} onClick={toggleMode} />
            </Link>
            <Link>
              <HistoryIcon style={{ color: theme.palette.text.primary }} />
            </Link>
            <Link>
              <NotificationsNoneOutlinedIcon style={{ color: theme.palette.text.primary }} />
            </Link>
            <Link>
              <ViewSidebarOutlinedIcon style={{ color: theme.palette.text.primary }} />
            </Link>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;