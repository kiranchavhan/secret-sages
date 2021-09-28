import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ sideDrawerWidth, common }) => {
	const { white, greyText, greyLight } = common;
	return {
		appBarRoot: {
			padding: '0 1rem 0 1.5rem',
			background: white,
		},
		appbar: {
			width: '100%',
			boxShadow: 'unset',
			borderBottom: `0.1rem solid ${greyLight}`,
		},
		appBarWidth: {
			maxWidth: `calc(100% - ${sideDrawerWidth})`,
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
