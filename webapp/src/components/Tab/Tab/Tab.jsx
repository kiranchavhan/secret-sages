import React from 'react';
import MuiTabs from '@material-ui/core/Tabs';
import MuiTab from '@material-ui/core/Tab';

import useStyles from './style';

const Tab = (props) => {
  const { value, onChange, tabs, color, variant, extraClasses, restProps, restTabProps } = props;
  const classes = useStyles();

  return (
    <MuiTabs
      value={value}
      onChange={onChange}
      indicatorColor={color}
      textColor={color}
      variant={variant}
      className={extraClasses}
      {...restProps}
    >
      {tabs &&
        tabs.map((tab) => {
          const { key, label, disabled } = tab;
          return (
            <MuiTab
              key={key}
              label={label}
              disabled={disabled}
              className={classes.tab}
              {...restTabProps}
            />
          );
        })}
    </MuiTabs>
  );
};

Tab.defaultProps = {
  color: 'primary',
  variant: 'standard',
};

export default Tab;
