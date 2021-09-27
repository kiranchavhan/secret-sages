import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ sideDrawerWidth, common }) => {
  const { primaryBlue, primaryBlueLight } = common;
  return {
    drawer: {
      position: 'relative',
      width: sideDrawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      background: primaryBlue,
      width: sideDrawerWidth,
    },
    listBg: {
      margin: '0 0.5rem',
      background: primaryBlueLight,
      borderRadius: '0.5rem',
    },
    logo: {
      width: '100%',
      minHeight: '6.4rem',
      padding: '1.5rem 1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      '& img': {
        width: '80%',
      },
    },
  };
});

export default useStyles;
