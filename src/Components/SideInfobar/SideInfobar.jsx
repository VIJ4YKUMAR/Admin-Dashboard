import React from "react";
import { Stack, Typography } from "@mui/material";

import ActivityList from "../ActivityList/ActivityList";
import NotificationList from "../Notification/NotificationList";
import UserCard from "../User/UserCard";
import ContactsList from "../ContactsList/ContactsList";

const SideInfobar = () => {
  return (
    <Stack gap={2} padding={2} justifyContent="center">
      <Stack textAlign="left" gap={2}>
        <Typography color="text.primary">Notifications</Typography>
        <NotificationList />
      </Stack>
      <Stack textAlign="left" gap={2}>
        <Typography color="text.primary">Activities</Typography>
        <ActivityList />
      </Stack>
      <Stack textAlign="left" gap={2}>
        <Typography color="text.primary">Contacts</Typography>
        <ContactsList />
      </Stack>
    </Stack>
  )
};

export default SideInfobar;