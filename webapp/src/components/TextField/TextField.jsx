import React from 'react';
import MuiTextField from '@material-ui/core/TextField';

import { Icon } from '@components';
import useStyles from './style';

const TextField = (props) => {
  const {
    error,
    type,
    value,
    label,
    variant,
    required,
    placeholder,
    size,
    minRows,
    maxRows,
    rows,
    fullWidth,
    multiline,
    color,
    disabled,
    onChange,
    extraClasses,
    endAdornmentIcon,
    endAdornmentIconProps,
    startAdornmentIcon,
    startAdornmentIconProps,
    shrink,
    InputProps,
    restProps,
  } = props;

  const classes = useStyles();

  return (
    <MuiTextField
      error={error}
      className={extraClasses}
      type={type}
      label={label}
      variant={variant}
      size={size}
      rows={rows}
      minRows={minRows}
      maxRows={maxRows}
      fullWidth={fullWidth}
      multiline={multiline}
      color={color}
      value={value}
      required={required}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      InputLabelProps={{ shrink }}
      InputProps={{
        endAdornment: endAdornmentIcon && (
          <div className={classes.startIconPadding}>
            <Icon icon={endAdornmentIcon} {...endAdornmentIconProps} />
          </div>
        ),
        startAdornment: startAdornmentIcon && (
          <div className={classes.endIconPadding}>
            <Icon icon={startAdornmentIcon} {...startAdornmentIconProps} />
          </div>
        ),
        ...InputProps,
      }}
      {...restProps}
    />
  );
};

TextField.defaultProps = {
  variant: 'outlined',
  size: 'small',
  shrink: true,
  required: false,
  error: false,
  onChange: () => {},
};

export default TextField;
