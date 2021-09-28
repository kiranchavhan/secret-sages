import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ common }) => {
  const { white, greyTransparent16, greyTransparent20 } = common;
  return {
    item: {
      margin: '0 0.5rem',
      width: 'auto',
      borderRadius: '0.5rem',
      padding: '0.9rem 1.5rem',
      color: white,
      '&:hover': {
        background: greyTransparent20,
      },
    },
    navItem: {
      margin: '1rem 0',
    },
    subItem: {
      margin: '0.5rem 1.5rem',
      '&:hover': {
        background: greyTransparent16,
      },
    },
    root: {
      color: white,
      fontSize: '1.4rem',
      lineHeight: '1.6rem',
      fontWeight: 600,
      textTransform: 'capitalize',
    },
    iconRoot: {
      marginRight: '1.5rem',
      minWidth: '2.4rem',
      minHeight: '3.2rem',
      display: 'flex',
      alignItems: 'center',
      color: white,
      fontSize: '2.2rem',
    },
    activeTab: {
      background: greyTransparent20,
    },
  };
});

export default useStyles;
