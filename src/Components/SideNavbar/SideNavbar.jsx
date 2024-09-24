import React from "react";
import { useState, useMemo } from "react";

import Stack from "@mui/material/Stack";

import UserCard from "../User/UserCard";
import ByeWind from "../../assets/static/ByeWind.webp";
import CollapsibleMultiList from "../CollapsibleMultiList/CollapsibleMultiList";
import SingleListMenu from "../SingleListMenu/SingleListMenu";
import { hasChildren } from "../../utils";
import "../SideNavbar/sideNavbar.css";

import { dashboardMenuItems, pagesMenuItems } from "../MenuItems";
import { Typography } from "@mui/material";

const SideBarMenuItem = ({ item }) => {
  const Component = hasChildren(item) ? CollapsibleMultiList : SingleListMenu;
  return <Component item={item} />;
};


const SideNavbar = () => {
  return (
    <Stack className="side-bar" gap={4}>
      <UserCard userImage={ByeWind} userName="ByeWind" />
      <Stack>
        <Stack gap={1}>
          <Stack color="#1C1C1C66" direction="row" gap={2} justifyContent="space-around">
            <Typography>Favorites</Typography>
            <Typography>Recently</Typography>
          </Stack>
          <ul style={{ textAlign: "left", color: "#1C1C1C66", padding: 20, margin: 0 }}>
            <li><Typography fontSize="14px" color="textPrimary">Overview</Typography></li>
            <li><Typography fontSize="14px" color="textPrimary">Projects</Typography></li>
          </ul>
        </Stack>
      </Stack>
      <Stack gap={4}>
        <Stack>
          <Typography textAlign="left" color="#1C1C1C66">
            Dashboards
          </Typography>
          {
            dashboardMenuItems.map((item) => (
              <SideBarMenuItem key={item.title} item={item} />
            ))
          }
        </Stack>
        <Stack>
          <Typography textAlign="left" color="#1C1C1C66">
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