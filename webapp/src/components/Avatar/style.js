import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ common }) => {
  const { white, secondaryMain } = common;

  return {
    root: {
      height: '4rem',
      width: '4rem',
      fontSize: '4rem',
      lineHeight: '4rem',
      background: white,
      color: secondaryMain,
      textTransform: 'uppercase',
      '& span': {
        fontSize: '0.4em',
      },
      border: `0.1rem solid ${secondaryMain}`,
    },
  };
});

export default useStyles;
