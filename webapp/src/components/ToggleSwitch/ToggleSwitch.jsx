import React, { useState } from 'react';
import MuiSwitch from '@material-ui/core/Switch';

const ToggleSwitch = (props) => {
  const { checked, onChange, color, size, disabled, name, extraClasses, restProps } = props;
  const [toggled, setToggled] = useState(checked);

  const onChangeHadler = (event) => {
    setToggled(event.target.checked);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <MuiSwitch
      checked={toggled}
      onChange={onChangeHadler}
      name={name}
      color={color}
      size={size}
      disabled={disabled}
      className={extraClasses}
      {...restProps}
    />
  );
};

ToggleSwitch.defaultProps = {
  color: 'primary',
  size: 'medium',
  disabled: false,
  checked: false,
};

export default ToggleSwitch;
