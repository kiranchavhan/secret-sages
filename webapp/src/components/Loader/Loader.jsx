import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { CommonConstants } from '@constants/index';

const Loader = (props) => {
  const { size, thickness, disableShrink, extraClasses, ...resProps } = props;

  return (
    <CircularProgress
      className={extraClasses}
      size={size}
      thickness={thickness}
      disableShrink={disableShrink}
      {...resProps}
    />
  );
};

Loader.defaultProps = {
  size: CommonConstants.DEFAULT_SIZE,
  thickness: CommonConstants.DEFAULT_THICKNESS,
  disableShrink: false,
};

export default Loader;
