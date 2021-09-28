import React from "react";
import {
  faCampground,
  faQuestion,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import MuiDrawer from "@material-ui/core/Drawer";
import { List } from "@material-ui/core";

import Logo from "@assets/images/xethon_logo.svg";
import useStyles from "./style";
import { ListItem } from "./SubComponents";

const SideDrawer = () => {
  const classes = useStyles();

  const listItem = [
    {
      label: "Dashboard",
      icon: faCampground,
      path: "/",
    },
    {
      label: "Employees",
      icon: faUser,
      path: "/employee",
    },
    {
      label: "Requests",
      icon: faQuestion,
      path: "/requests",
    },
  ];

  return (
    <MuiDrawer
      variant="permanent"
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
      anchor="left"
    >
      <div>
        <a href="/" className={classes.logo}>
          <img src={Logo} alt="Xethon" />
        </a>
        <List className={classes.listBg}>
          {listItem &&
            listItem.map((item) => <ListItem key={item.path} item={item} />)}
        </List>
      </div>
    </MuiDrawer>
  );
};

export default SideDrawer;
