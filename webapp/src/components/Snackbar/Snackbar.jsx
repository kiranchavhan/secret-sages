import React from 'react';
import MuiSnackbar from '@material-ui/core/Snackbar';
import MuiSlide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Icon } from '@components';
import { CommonConstants } from '@constants/index';
import useStyles from './style';

const { SNACKBAR_HIDE_DURATION } = CommonConstants;

const Transition = (props) => <MuiSlide {...props} />;

const Snackbar = (props) => {
  const {
    message,
    children,
    anchorOrigin,
    open,
    onClose,
    autoHide,
    autoHideDuration,
    transitionDirection,
    actionComponent,
    showCloseIcon,
    transitionProps,
    restProps,
  } = props;
  const classes = useStyles();

  return (
    <MuiSnackbar
      classes={{ root: classes.root }}
      anchorOrigin={anchorOrigin}
      open={open}
      onClose={onClose}
      direction='right'
      TransitionComponent={Transition}
      TransitionProps={{ direction: transitionDirection, ...transitionProps }}
      autoHideDuration={autoHide ? autoHideDuration : null}
      message={message}
      action={
        actionComponent ||
        (showCloseIcon && (
          <IconButton onClick={onClose} className={classes.icon}>
            <Icon icon={faTimes} />
          </IconButton>
        ))
      }
      {...restProps}
    >
      {children}
    </MuiSnackbar>
  );
};

Snackbar.defaultProps = {
  autoHide: false,
  showCloseIcon: true,
  autoHideDuration: SNACKBAR_HIDE_DURATION,
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
  transitionDirection: 'left',
};

export default Snackbar;
