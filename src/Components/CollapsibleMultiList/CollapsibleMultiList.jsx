import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SingleListMenu from '../SingleListMenu/SingleListMenu';

import "../CollapsibleMultiList/collapsibleList.css"
import { Stack, useTheme } from '@mui/material';

const CollapsibleMultiList = ({ item }) => {
  const theme = useTheme();

  const { items: children } = item;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <ListItem sx={{ padding: "5px 5px 5px 0px" }} button={true} onClick={handleClick}>
        {!open ?
          <ChevronRightIcon style={{ color: theme.palette.text.secondary }} className="menu-icons" />
          :
          <ExpandMore style={{ color: theme.palette.text.primary }} className="menu-icons" />
        }
        <Stack direction="row" gap={2}>
          {item.icon}
          <ListItemText style={{ color: theme.palette.text.primary }} primary={item.title} />
        </Stack>
      </ListItem>
      <Collapse in={open} timeout="auto">
        <List component="div" disablePadding>
          {children.map((child) => (
            <div key={child.title} className={open ? "submenu-list" : ""}>
              <SingleListMenu isOpen={open} key={child.title} item={child} />
            </div>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default CollapsibleMultiList;