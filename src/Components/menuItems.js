import React from "react";

import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import PortraitOutlinedIcon from "@mui/icons-material/PortraitOutlined";
import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";

export const dashboardMenuItems = [
  {
    icon: <PieChartOutlineOutlinedIcon />,
    title: "Default",
  },
  {
    icon: <LocalMallOutlinedIcon />,
    title: "eCommerce",
  },
  {
    icon: <FolderOpenOutlinedIcon />,
    title: "Projects",
  },
  {
    icon: <ImportContactsOutlinedIcon />,
    title: "Online Courses",
  },
];

export const pagesMenuItems = [
  {
    icon: <PortraitOutlinedIcon />,
    title: "User Profile",
    items: [
      {
        title: "Overview",
      },
      {
        title: "Projects",
      },
      {
        title: "Campaigns",
      },
      {
        title: "Documents",
      },
      {
        title: "Followers",
      },
    ],
  },
  {
    icon: <ContactEmergencyOutlinedIcon />,
    title: "Account",
  },
  {
    icon: <GroupsOutlinedIcon />,
    title: "Corporate",
  },
  {
    icon: <ArticleOutlinedIcon />,
    title: "Blog",
  },
  {
    icon: <ChatBubbleOutlineRoundedIcon />,
    title: "Social",
  },
];
