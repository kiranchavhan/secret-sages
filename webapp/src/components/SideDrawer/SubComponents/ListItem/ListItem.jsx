import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ListItemText, ListItem as MuiListItem, ListItemIcon } from '@material-ui/core';

import { Icon } from '@components';
import useStyles from './style';

const ListItem = (props) => {
  const { item } = props;
  const classes = useStyles();
  const { pathname } = useLocation();

  return (
    <div className={classes.navItem}>
      <Link to={item.path}>
        <MuiListItem
          button
          className={`${classes.item} ${pathname === item.path ? classes.activeTab : ''}`}
        >
          {item.icon && (
            <ListItemIcon classes={{ root: classes.iconRoot }}>
              <Icon icon={item.icon} size='sm' />
            </ListItemIcon>
          )}
          <ListItemText classes={{ primary: classes.root }} primary={item.label} />
        </MuiListItem>
      </Link>
    </div>
  );
};

export default ListItem;
