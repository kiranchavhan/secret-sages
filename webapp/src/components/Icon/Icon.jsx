import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = (props) => {
  const { icon, size, color, resProps, extraClasses } = props;

  return icon ? (
    <FontAwesomeIcon className={extraClasses} icon={icon} size={size} color={color} {...resProps} />
  ) : null;
};

Icon.defaultProps = {
  size: 'lg',
};

export default Icon;
