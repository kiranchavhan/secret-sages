import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  loader: {
    color: 'inherit',
    marginRight: '1rem',
  },
  root: ({ isUpperCase }) => ({
    textTransform: isUpperCase ? 'uppercase' : 'none',
  }),
  startIcon: ({ isIconOnly, startIcon }) => ({
    marginRight: !isIconOnly && startIcon ? '1rem' : '0',
  }),
  endIcon: ({ isIconOnly, endIcon }) => ({
    marginLeft: !isIconOnly && endIcon ? '1rem' : '0',
  }),
}));

export default useStyles;
