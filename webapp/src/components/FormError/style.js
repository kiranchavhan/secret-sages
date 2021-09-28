import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  const { palette } = theme;
  return {
    formError: {
      display: 'block',
      '& span': {
        color: palette.error.main,
      },
    },
  };
});

export default useStyles;
