import React from 'react';
import { useField } from 'formik';

import { FormError, TextField } from '@components';

const TextFieldWrapper = (props) => {
  const { name, restrictSpaces, uppercase, onChange } = props;
  const [field, meta, helpers] = useField(name);
  const { setValue } = helpers;

  const handleChange = (event) => {
    let { value } = event.target;
    value = restrictSpaces ? value?.trim() : value;
    value = uppercase ? value?.toUpperCase() : value;

    onChange?.(event);

    setValue(value);
  };

  return (
    <>
      <TextField
        {...props}
        InputProps={{ ...field }}
        onChange={handleChange}
        error={meta.touched && (!!meta.error || !!meta.initialError)}
      />
      {meta.touched && (meta.error || meta.initialError) && (
        <FormError>{meta.error || meta.initialError}</FormError>
      )}
    </>
  );
};

export default TextFieldWrapper;
