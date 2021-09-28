import React from "react";
import { Avatar as MuiAvatar } from "@material-ui/core";

import useStyles from "./style";

const Avatar = (props) => {
  const { name, src, color, children, extraClasses, component, ...resProps } =
    props;
  const classes = useStyles(props);

  const getInitials = (title) => {
    let newInitName;
    if (title) {
      const newName = title && title?.split(" ").map((n) => n);
      newInitName = newName[0][0];
      if (newName.length > 1 && newName[newName.length - 1][0]) {
        newInitName = newName[0][0] + newName[newName.length - 1][0];
      }
    }

    return newInitName;
  };

  return (
    <MuiAvatar
      alt={name}
      src={src}
      color={color}
      component={component}
      classes={{ root: classes.root }}
      className={extraClasses}
      {...resProps}
    >
      {children || (name && <span>{getInitials(name)}</span>)}
    </MuiAvatar>
  );
};

Avatar.defaultProps = {
  component: "div",
  color: "primary",
};

export default Avatar;
