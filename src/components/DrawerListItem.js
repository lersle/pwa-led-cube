import React from "react";

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function DrawerListItem(props) {
    return(
        <ListItem key={props.text} disablePadding>
            <ListItemButton href={props.href}>
              <ListItemIcon>
                {props.icon}
              </ListItemIcon>
              <ListItemText primary={props.text} />
            </ListItemButton>
          </ListItem>
    );
}