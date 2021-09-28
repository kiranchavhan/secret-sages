import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ common }) => {
  const { white, secondaryMain } = common;

  return {
    root: {
      display: "flex",
    },
  };
});

export default useStyles;
