import { Grid, Paper } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Charts from '../../../components/Charts';

import useStyles from './style';

const AdminMap = () => {
	const classes = useStyles();
	const [location, setLocation] = useState([]);
	const [state, setState] = useState([]);
	const [dept, setDept] = useState([]);
	const [gender, setGender] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:8001/api/getfav').then((result) => {
			setLocation(result.data);
		});
		axios.get('http://localhost:8001/api/getfavstate').then((result) => {
			setState(result.data);
		});
		axios.get('http://localhost:8001/api/getfavdep').then((result) => {
			setDept(result.data);
		});
		axios.get('http://localhost:8001/api/getgen').then((result) => {
			setGender(result.data);
		});
	}, []);
	return (
		<Paper elevation={1} className={classes.paper}>
			<Grid container spacing={3} wrap='wrap'>
				<Grid item xs={12} sm={6}>
					<Charts
						dataKey='count'
						data={location}
						color='#fe5907'
						label='Favourite Location'
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					.
					<Charts
						dataKey='count'
						data={state}
						color='#fe5877'
						label='Favourite State'
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Charts
						dataKey='count'
						data={dept}
						color='#fe5937'
						label='Departments'
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Charts
						dataKey='count'
						data={gender}
						color='#fe1907'
						label='Gender Ratio'
					/>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default AdminMap;
