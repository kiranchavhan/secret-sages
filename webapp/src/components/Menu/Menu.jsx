import React from 'react';
import MuiMenu from '@material-ui/core/Menu';
import MuiMenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { Icon } from '@components';
import useStyles from './style';

const Menu = (props) => {
  const {
    anchorEl,
    elevation,
    onClose,
    menuItem,
    extraClasses,
    anchorOrigin,
    transformOrigin,
    restProps,
  } = props;
  const classes = useStyles(props);

  return (
    <MuiMenu
      elevation={elevation}
      classes={{ paper: extraClasses }}
      open={Boolean(anchorEl)}
      onClose={onClose}
      anchorEl={anchorEl}
      getContentAnchorEl={null}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      {...restProps}
    >
      {menuItem.map((item) => (
        <MuiMenuItem key={item.key} onClick={item.onClick}>
          {item.icon && (
            <ListItemIcon
              classes={{
                root: item.title
                  ? `${classes.iconPadding} ${classes.iconWidth}`
                  : classes.iconWidth,
              }}
            >
              <Icon icon={item.icon} {...item.iconProps} />
            </ListItemIcon>
          )}
          {item.title && typeof item.title === 'string' ? (
            <ListItemText>{item.title}</ListItemText>
          ) : (
            item.title
          )}
        </MuiMenuItem>
      ))}
    </MuiMenu>
  );
};
Menu.defaultProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'center',
  },
};

export default Menu;
