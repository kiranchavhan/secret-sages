import { Paper } from '@material-ui/core';
import React from 'react';

import useStyles from './style';

const AdminMap = () => {
  const classes = useStyles();
  return (
    <Paper elevation={1} className={classes.paper}>
      Map
    </Paper>
  );
};

export default AdminMap;
