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
    icon: <PieChartOutlineOutlinedIcon sx={{ color: "text.primary" }} />,
    title: "Default",
  },
  {
    icon: <LocalMallOutlinedIcon sx={{ color: "text.primary" }} />,
    title: "eCommerce",
  },
  {
    icon: <FolderOpenOutlinedIcon sx={{ color: "text.primary" }} />,
    title: "Projects",
  },
  {
    icon: <ImportContactsOutlinedIcon sx={{ color: "text.primary" }} />,
    title: "Online Courses",
  },
];

export const pagesMenuItems = [
  {
    icon: <PortraitOutlinedIcon sx={{ color: "text.primary" }} />,
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
    icon: <ContactEmergencyOutlinedIcon sx={{ color: "text.primary" }} />,
    title: "Account",
  },
  {
    icon: <GroupsOutlinedIcon sx={{ color: "text.primary" }} />,
    title: "Corporate",
  },
  {
    icon: <ArticleOutlinedIcon sx={{ color: "text.primary" }} />,
    title: "Blog",
  },
  {
    icon: <ChatBubbleOutlineRoundedIcon sx={{ color: "text.primary" }} />,
    title: "Social",
  },
];
