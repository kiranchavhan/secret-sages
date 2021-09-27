import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ common }) => {
  const { primaryBlue, boxShadow } = common;
  return {
    root: {
      boxShadow,
      borderRadius: '0.5rem',
      overflow: 'hidden',
    },
    paper: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '80rem',
      width: '100%',
      height: '49.6rem',
      display: 'flex',
    },
    left: {
      width: '100%',
      background: primaryBlue,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& img': {
        maxWidth: '22rem',
      },
    },
    right: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };
});

export default useStyles;
