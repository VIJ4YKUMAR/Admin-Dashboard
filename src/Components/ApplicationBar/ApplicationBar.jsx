import * as React from 'react';
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
import SearchBar from '../SearchBar/SearchBar';

import "../ApplicationBar/applicationbar.css";

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  return (
    <AppBar sx={{ boxShadow: "none" }} className="appbar-container">
      <Container maxWidth="xl">
        <Toolbar className="appbar" disableGutters>
          <Stack direction="row" gap={3} paddingLeft={2}>
            <Link>
              <ViewSidebarOutlinedIcon />
            </Link>
            <Link>
              <StarBorderOutlinedIcon />
            </Link>
            <Breadcrumbs>
              <Link underline="none" href="/">
                Dashboards
              </Link>
              <Typography color="textPrimary">Defaults</Typography>
            </Breadcrumbs>
          </Stack>
          <Stack direction="row" gap={3} paddingRight={18}>
            <SearchBar inNavbar />
            <Link>
              <LightModeIcon />
            </Link>
            <Link>
              <HistoryIcon />
            </Link>
            <Link>
              <NotificationsNoneOutlinedIcon />
            </Link>
            <Link>
              <ViewSidebarOutlinedIcon />
            </Link>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;