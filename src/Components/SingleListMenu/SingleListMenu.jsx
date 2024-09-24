import React, { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import { ListItemIcon, Stack } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const SingleListMenu = ({ item }) => {
  return (
    <ListItem sx={{ padding: "5px 5px 5px 0px" }} button>
      <ChevronRightIcon style={{ color: "#1C1C1C66", paddingRight: "10px" }} />
      <Stack direction="row" gap={2}>
        {item.icon}
        <ListItemText primary={item.title} />
      </Stack>
    </ListItem>
  );
};

export default SingleListMenu;