import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ sideDrawerWidth, common }) => {
  const { white, greyText, greyLight } = common;
  return {
    appBarRoot: {
      padding: '0 1rem 0 1.5rem',
      background: white,
    },
    appbar: {
      maxWidth: `calc(100% - ${sideDrawerWidth})`,
      width: '100%',
      boxShadow: 'unset',
      borderBottom: `0.1rem solid ${greyLight}`,
    },
    title: {
      fontSize: '2.4rem',
      lineHeight: '2.8rem',
      color: greyText,
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  };
});

export default useStyles;
