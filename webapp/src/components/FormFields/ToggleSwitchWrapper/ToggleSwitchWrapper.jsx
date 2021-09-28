import React from 'react';
import { useField } from 'formik';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { ToggleSwitch, FormError } from '@components';
import useStyles from './style';

const ToggleWrapper = (props) => {
  const { name, onChange, label, labelPlacement } = props;
  const [field, meta, helpers] = useField(name);
  const { setValue } = helpers;
  const classes = useStyles();

  const onChangeHadler = (event) => {
    if (onChange) onChange(event);
    setValue(event.target.checked);
  };

  return (
    <FormControl>
      <FormControlLabel
        classes={{ root: !label ? classes.label : '' }}
        control={
          <ToggleSwitch
            {...{
              ...field,
              ...props,
              onChange: onChangeHadler,
            }}
            checked={field.value}
          />
        }
        label={label}
        labelPlacement={labelPlacement}
      />
      {meta.touched && (meta.error || meta.initialError) && (
        <FormError>{meta.error || meta.initialError}</FormError>
      )}
    </FormControl>
  );
};

export default ToggleWrapper;
