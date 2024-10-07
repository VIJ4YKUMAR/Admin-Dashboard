import React from "react";

import Stack from "@mui/material/Stack";

import UserCard from "../User/UserCard";
import ByeWind from "../../assets/static/ByeWind.webp";
import CollapsibleMultiList from "../CollapsibleMultiList/CollapsibleMultiList";
import SingleListMenu from "../SingleListMenu/SingleListMenu";
import { hasChildren } from "../../utils";
import "../SideNavbar/sideNavbar.css";

import { dashboardMenuItems, pagesMenuItems } from "../menuItems.js";
import { Typography, useTheme } from "@mui/material";

const SideBarMenuItem = ({ item }) => {
  const Component = hasChildren(item) ? CollapsibleMultiList : SingleListMenu;
  return <Component item={item} />;
};


const SideNavbar = () => {
  const theme = useTheme();

  return (
    <Stack className="side-bar" gap={4} padding={2}>
      <UserCard userImage={ByeWind} userName="ByeWind" />
      <Stack>
        <Stack gap={1}>
          <Stack direction="row" gap={2} justifyContent="space-around">
            <Typography color="text.primary">Favorites</Typography>
            <Typography color="text.primary">Recently</Typography>
          </Stack>
          <ul style={{ textAlign: "left", color: theme.palette.text.primary, padding: 20, margin: 0 }}>
            <li><Typography fontSize="14px" color="text.primary">Overview</Typography></li>
            <li><Typography fontSize="14px" color="text.primary">Projects</Typography></li>
          </ul>
        </Stack>
      </Stack>
      <Stack gap={4}>
        <Stack>
          <Typography color="text.primary" textAlign="left">
            Dashboards
          </Typography>
          {
            dashboardMenuItems.map((item) => (
              <SideBarMenuItem key={item.title} item={item} />
            ))
          }
        </Stack>
        <Stack>
          <Typography color="text.primary" textAlign="left">
            Pages
          </Typography>
          {
            pagesMenuItems.map((item) => (
              <SideBarMenuItem key={item.title} item={item} />
            ))
          }
        </Stack>
      </Stack>
    </Stack>
  )
};

export default SideNavbar;