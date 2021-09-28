import React from 'react';

import { Appbar, SideDrawer } from '@components';
import useStyles from './style';

const Layout = (props) => {
	const { children, isSidebar, title } = props;
	const classes = useStyles();

	return (
		<div className={classes.wrapper}>
			{isSidebar && <SideDrawer />}
			<div className={classes.main}>
				<Appbar isSidebar={isSidebar} title={title} />
				{children}
			</div>
		</div>
	);
};
Layout.defaultProps = {
	isSidebar: true,
	title: 'Admin Dashboard',
};

export default Layout;
