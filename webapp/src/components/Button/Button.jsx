import React from 'react';
import { Button as MuiButton } from '@material-ui/core';

import { Icon, Loader } from '@components';
import { CommonConstants } from '@constants';
import useStyles from './style';

const Button = (props) => {
  const {
    color,
    isLoading,
    type,
    resProps,
    variant,
    onClick,
    fullWidth,
    disabled,
    children,
    extraClasses,
    startIcon,
    size,
    iconSize,
  } = props;

  const classes = useStyles(props);
  const loaderSize = {
    small: CommonConstants.BUTTON.SMALL_LOADER_SIZE,
    medium: CommonConstants.BUTTON.MEDIUM_LOADER_SIZE,
    large: CommonConstants.BUTTON.LARGE_LOADER_SIZE,
  };

  return (
    <MuiButton
      onClick={onClick}
      color={color}
      className={`${classes.root} ${extraClasses}`}
      disabled={disabled || isLoading}
      fullWidth={fullWidth}
      type={type}
      size={size}
      variant={variant}
      {...resProps}
    >
      {isLoading && <Loader extraClasses={classes.loader} size={loaderSize[size]} />}
      {startIcon && (
        <Icon
          icon={startIcon}
          size={iconSize}
          resProps={{
            className: classes.startIcon,
          }}
        />
      )}
      {children}
    </MuiButton>
  );
};

Button.defaultProps = {
  iconSize: 'sm',
  isLoading: false,
  size: 'medium',
  isIconOnly: false,
  type: 'button',
  color: 'primary',
  variant: 'contained',
  isUpperCase: false,
};

export default Button;
