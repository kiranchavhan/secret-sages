import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ common }) => {
  const { white, primaryBlueLight } = common;

  return {
    icon: {
      color: primaryBlueLight,
    },
    root: {
      background: white,
    },
  };
});

export default useStyles;
