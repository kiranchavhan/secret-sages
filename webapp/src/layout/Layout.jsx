import React from 'react';

import { Appbar, SideDrawer } from '@components';
import useStyles from './style';

const Layout = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <SideDrawer />
      <div className={classes.main}>
        <Appbar title='Admin Dashboard' />
        {children}
      </div>
    </div>
  );
};

export default Layout;
