import React from 'react';
import { Typography } from '@material-ui/core';

import useStyles from './style';

const FormError = (props) => {
  const { children } = props;
  const classes = useStyles();

  return children ? (
    <span className={classes.formError}>
      <Typography variant='caption'>{children}</Typography>
    </span>
  ) : (
    <></>
  );
};

export default FormError;
