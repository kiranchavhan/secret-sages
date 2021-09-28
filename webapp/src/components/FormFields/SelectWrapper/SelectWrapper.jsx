import React from 'react';
import { useField } from 'formik';

import { Select, FormError } from '@components';

const SelectField = (props) => {
  const { name, onChange } = props;
  const [field, meta, helpers] = useField(name);
  const { setValue } = helpers;

  const onChangeHadler = (event) => {
    if (onChange) onChange(event);
    setValue(event.target.value);
  };

  return (
    <>
      <Select
        {...{
          ...field,
          ...props,
          onChange: onChangeHadler,
        }}
        error={meta.touched && (!!meta.error || !!meta.initialError)}
      />
      {meta.touched && (meta.error || meta.initialError) && (
        <FormError>{meta.error || meta.initialError}</FormError>
      )}
    </>
  );
};

export default SelectField;
