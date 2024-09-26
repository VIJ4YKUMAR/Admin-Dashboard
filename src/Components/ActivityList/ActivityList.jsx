import React from 'react';
import { Avatar, Typography, Stack } from '@mui/material';

import MaleIcon from "../../assets/static/MaleIcon.webp";
import FemaleIcon from "../../assets/static/FemaleIcon.webp";
import Female05 from "../../assets/static/Female05.webp";
import Male07 from "../../assets/static/Male07.webp";
import Male11 from "../../assets/static/Male11.webp";


const ActivityList = () => {
  const activities = [
    {
      avatar: MaleIcon,
      text: 'You have a bug that needs...',
      timestamp: 'Just now'
    },
    {
      avatar: FemaleIcon,
      text: 'Released a new version',
      timestamp: '59 minutes ago'
    },
    {
      avatar: Female05,
      text: 'Submitted a bug',
      timestamp: '12 hours ago'
    },
    {
      avatar: Male07,
      text: 'Modified A data in Page X',
      timestamp: 'Today, 11:59 AM'
    },
    {
      avatar: Male11,
      text: 'Deleted a page in Project X',
      timestamp: 'Feb 2, 2023'
    }
  ];

  return (
    <Stack gap={2}>
      {
        activities.map((activity) => (
          <Stack key={activity.avatar} direction={'row'} spacing={1}>
            <img src={activity.avatar} width={30} height={30} />
            <Stack spacing={1} sx={{ textAlign: "left" }}>
              <Typography color="text.primary">{activity.text}</Typography>
              <Typography color="text.secondary" className='notification-status' style={{ fontSize: "12px", margin: "0px" }}>{activity.timestamp}</Typography>
            </Stack>
          </Stack>
        ))
      }
    </Stack>
  );
};

export default ActivityList;