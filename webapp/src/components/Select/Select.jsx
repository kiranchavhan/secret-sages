import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { FormHelperText, Select as MuiSelect } from '@material-ui/core';

import useStyles from './style';

const Select = (props) => {
  const {
    label,
    labelId,
    selectId,
    helpText,
    data,
    disabled,
    value,
    onChange,
    error,
    inputProps,
    required,
    size,
    resProps,
    multiple,
    variant,
    color,
  } = props;
  const classes = useStyles(props);

  return (
    <FormControl
      variant={variant}
      className={classes.formControl}
      required={required}
      disabled={disabled}
      error={error}
      size={size}
    >
      <InputLabel color={color} id={labelId}>
        {label}
      </InputLabel>
      <MuiSelect
        label={label}
        labelId={labelId}
        id={selectId}
        multiple={multiple}
        value={value}
        onChange={onChange}
        inputProps={inputProps}
        color={color}
        {...resProps}
      >
        {data &&
          data.map((item) => (
            <MenuItem key={item.label} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
      </MuiSelect>
      {helpText && <FormHelperText>{helpText}</FormHelperText>}
    </FormControl>
  );
};

Select.defaultProps = {
  helpText: '',
  disabled: false,
  error: false,
  fullWidth: false,
  variant: 'outlined',
};

export default Select;
