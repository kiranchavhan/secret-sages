import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ common }) => {
  const { greyLight, white, secondaryMain, primaryBlue } = common;
  return {
    box: {
      minHeight: '8rem',
      padding: '1.5rem',
      borderRadius: '0.5rem',
      position: 'relative',
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: '2rem',
      background: white,
      boxShadow: `0 0.1rem 1rem 0 ${greyLight}`,
    },
    wrapper: {
      position: 'relative',
    },
    icon: {
      position: 'absolute',
      height: '7rem',
      width: '7rem',
      background: secondaryMain,
      left: '2rem',
      top: '-2rem',
      borderRadius: '0.5rem',
      color: white,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      flexDirection: 'column',
    },
    count: {
      fontSize: '2.2rem',
      lineHeight: '2.4rem',
      fontFamily: 'bold',
      color: primaryBlue,
    },
  };
});

export default useStyles;
