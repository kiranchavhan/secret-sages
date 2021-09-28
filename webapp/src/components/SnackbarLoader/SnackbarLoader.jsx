import React from 'react';
import { Snackbar, Loader } from '@components';

const SnackbarLoader = (props) => {
  const { open, message } = props;
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={open}
      showCloseIcon={false}
      transitionDirection='top'
      message={
        <>
          <Loader size={30} />
          <div className='ml-5'>{message}</div>
        </>
      }
    />
  );
};

SnackbarLoader.defaultProps = {
  message: 'Please wait...',
};

export default SnackbarLoader;
