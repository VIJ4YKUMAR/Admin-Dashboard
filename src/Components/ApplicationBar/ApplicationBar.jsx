import React, { useImperativeHandle, forwardRef, useState, useCallback, useContext } from 'react';
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
import { Grid, useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import SearchBar from '../SearchBar/SearchBar';
import SideNavbar from '../SideNavbar/SideNavbar';
import SideInfobar from '../SideInfobar/SideInfobar';
import useWindowSize from '../../hooks/useWindowSize';
import { ThemeContext } from "../../ThemeContext";

import "../ApplicationBar/applicationbar.css";

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const theme = useTheme();
  const size = useWindowSize();

  const { toggleMode } = useContext(ThemeContext);

  const [navOpen, setNavOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);

  const toggleNavDrawer = (newOpen) => () => {
    if (size.width <= 1200) {
      setNavOpen(newOpen);
    }
  };

  const toggleInfoDrawer = (newOpen) => () => {
    if (size.width <= 1200) {
      setInfoOpen(newOpen);
    }
  };

  const handleLinkClick = (event) => {
    if (size.width > 1200) {
      event.preventDefault();
    }
  };

  return (
    <Grid container>
      <Grid item lg={8}>
        <AppBar sx={{ background: theme.palette.background.default, boxShadow: "none", padding: 1 }} className="appbar-container">
          <Toolbar sx={{ background: theme.palette.background.default }} className="appbar" disableGutters>
            <Stack direction="row" sx={{
              gap: {
                xs: 6,
                sm: 10,
                md: 28,
                lg: 14,
                xl: 36
              }
            }}>
              <Stack direction="row" gap={2}>
                <Link onClick={(event) => { handleLinkClick(event); toggleNavDrawer(true)(); }}>
                  <ViewSidebarOutlinedIcon style={{ color: theme.palette.text.primary }} />
                </Link>
                <Drawer anchor="left" open={navOpen} onClose={toggleNavDrawer(false)}>
                  <SideNavbar />
                </Drawer>
                <Link>
                  <StarBorderOutlinedIcon style={{ color: theme.palette.text.primary }} />
                </Link>
                <Breadcrumbs>
                  <Link className="breadcrumb" style={{
                    color: theme.palette.text.primary, fontSize: {
                      xs: "10px",
                    }
                  }} underline="none" href="/">
                    Dashboards
                  </Link>
                  <Typography sx={{
                    fontSize: {
                      xs: "10px",
                    }
                  }} color="textPrimary">Defaults</Typography>
                </Breadcrumbs>
              </Stack>
              <Stack direction="row" gap={2} >
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
                <Link onClick={(event) => { handleLinkClick(event); toggleInfoDrawer(true)(); }}>
                  <ViewSidebarOutlinedIcon style={{ color: theme.palette.text.primary }} />
                </Link>
                <Drawer anchor="right" open={infoOpen} onClose={toggleInfoDrawer(false)}>
                  <SideInfobar />
                </Drawer>
              </Stack>
            </Stack>
          </Toolbar>
        </AppBar >
      </Grid>
    </Grid>
  );
};

export default ResponsiveAppBar;