import React from 'react';
import ListItem from '@mui/material/ListItem';
import { ListItemIcon, Stack, useTheme } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const SingleListMenu = ({ item }) => {
  const theme = useTheme();
  return (
    <ListItem sx={{ padding: "5px 5px 5px 0px" }} button={true}>
      <ChevronRightIcon style={{ color: theme.palette.text.secondary, paddingRight: "10px" }} />
      <Stack direction="row" gap={2}>
        {item.icon}
        <ListItemText style={{ color: theme.palette.text.primary }} primary={item.title} />
      </Stack>
    </ListItem>
  );
};

export default SingleListMenu;