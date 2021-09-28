import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper, Box } from '@material-ui/core';
import axios from 'axios';

import CountComponent from './CountComponent/CountComponent';
import useStyles from './style';
import Charts from '../../../components/Charts';

const AdminDashboard = () => {
	const classes = useStyles();
	const [counts, setCounts] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:8001/api/getTotalCount')
			.then((result) => setCounts(result.data.result));
	});

	return (
		<Paper elevation={1} className={classes.paper}>
			<Grid container>
				{counts &&
					counts.map((data) => (
						<Grid item sm={3} xs={12}>
							<Box mx={2}>
								<CountComponent count={data.count} label={data.label} />
							</Box>
						</Grid>
					))}
			</Grid>
		</Paper>
	);
};

export default AdminDashboard;
