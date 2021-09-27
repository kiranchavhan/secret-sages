import React from 'react';

const TabPanel = (props) => {
  const { children, value, index } = props;

  return value === index ? (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      {children}
    </div>
  ) : null;
};

export default TabPanel;
