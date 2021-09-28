import React from 'react';
import { Typography } from '@material-ui/core';
import { Icon } from '@components';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import useStyles from './style';

const CountComponent = (props) => {
  const { count, label } = props;
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.box}>
        <div className={classes.icon}>
          <Icon icon={faUser} size='2x' />
        </div>
        <div className={classes.text}>
          <Typography className={classes.count}>{count}</Typography>
          <Typography variant='body1'>{label}</Typography>
        </div>
      </div>
    </div>
  );
};

export default CountComponent;
