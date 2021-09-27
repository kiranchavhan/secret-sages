import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Logo from '@assets/images/xethon_logo.svg';

import { SnackbarLoader } from '@components';
import useStyles from './style';
import LoginForm from './LoginForm/LoginForm';

const AuthContainer = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);

  const handleForm = (values, actions) => {
    setIsLoading(true);
    actions.setTouched({});
    console.log(values);
  };

  return (
    <>
      <Paper classes={{ root: classes.root }} className={classes.paper}>
        <div className={classes.left}>
          <img src={Logo} alt='Xethon' />
        </div>
        <div className={classes.right}>
          <LoginForm onSubmit={handleForm} isLoading={isLoading} />
        </div>
      </Paper>
      <SnackbarLoader open={isLoading} />
    </>
  );
};

export default AuthContainer;
