import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import Menu from '@components/Menu';
import Icon from '@components/Icon';
import useStyles from './style';

const Appbar = (props) => {
	const { title, isSidebar } = props;
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const menuItems = [
		{
			key: '1',
			title: 'My Profile',
		},
		{
			key: '2',
			title: 'Logout',
			onClick: () => handleLogout(),
		},
	];

	const handleLogout = () => {
		localStorage.clear();
		window.location.reload();
	};

	return (
		<AppBar
			className={`${classes.appbar} ${!isSidebar ? '' : classes.appBarWidth}`}
			classes={{ root: classes.appBarRoot }}
		>
			<Toolbar variant='regular' className={classes.toolbar}>
				<Typography
					variant='h1'
					color='inherit'
					className={classes.title}
					component='div'
				>
					{title}
				</Typography>
				<div>
					<Button type='button' onClick={(event) => handleClick(event)}>
						<Typography>{localStorage.getItem('name')}</Typography>
						<Icon
							icon={faCaretDown}
							size='sm'
							resProps={{
								className: 'ml-5',
							}}
						/>
					</Button>
				</div>
			</Toolbar>
			<Menu anchorEl={anchorEl} onClose={handleClose} menuItem={menuItems} />
		</AppBar>
	);
};

Appbar.defaultProps = {
	isSidebar: true,
};

export default Appbar;
