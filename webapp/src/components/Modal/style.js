import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((common) => {
  const { greyLight, white } = common;

  return {
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10,
    },
    header: {
      padding: '1.6rem',
      borderBottom: `0.1rem solid ${greyLight}`,
    },
    footer: {
      padding: '1.6rem',
      borderTop: `0.1rem solid ${greyLight}`,
    },
    paper: {
      background: white,
      borderRadius: '0.4rem',
    },
  };
});

export default useStyles;
