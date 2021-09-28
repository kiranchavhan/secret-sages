import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiModal from '@material-ui/core/Modal';
import MuiBackdrop from '@material-ui/core/Backdrop';

import useStyles from './style';

const Modal = (props) => {
  const { open, onClose, header, footer, children, extraClasses, isDismissable, restProps } = props;
  const classes = useStyles();

  return (
    <MuiModal
      open={open}
      onClose={isDismissable ? onClose : () => {}}
      BackdropComponent={MuiBackdrop}
      className={`${classes.modal} ${extraClasses}`}
      {...restProps}
    >
      <div className={classes.paper}>
        {header && (
          <div className={classes.header}>
            {typeof header === 'string' ? (
              <Typography variant='body1'>{header}</Typography>
            ) : (
              header
            )}
          </div>
        )}

        {children}
        {footer && <div className={classes.footer}>{footer}</div>}
      </div>
    </MuiModal>
  );
};

Modal.defaultProps = {
  open: false,
  onClose: () => {},
  isDismissable: true,
};

export default Modal;
