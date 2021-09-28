import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  formControl: ({ fullWidth }) => ({
    minWidth: '12rem',
    width: fullWidth ? '100%' : 'auto',
  }),
}));

export default useStyles;
