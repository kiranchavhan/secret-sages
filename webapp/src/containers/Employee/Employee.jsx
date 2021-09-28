import { Paper, Grid, Box, Typography, Chip } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Tab, TabPanel, TextField, Button, ToggleSwitch } from '@components';
import axios from 'axios';
import { format } from 'date-format-parse';

const tabs = [
	{ key: '1', label: 'Apply Leave' },
	{ key: '2', label: 'Leave History' },
];

const Employee = () => {
	const [tabValue, setTabValue] = useState(0);
	const [leave, setLeave] = useState({
		message: '',
		startDate: '',
		endDate: '',
	});
	const [leaveData, setLeaveData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [location, setLocation] = useState({
		isLoggedin: false,
		latitude: null,
		longitide: null,
	});
	const [isLoggedin, setIsLoggedin] = useState(false);

	const handleChange = (_, value) => {
		setTabValue(value);
	};
	const handleLeaveMessage = () => {
		setIsLoading(true);
		axios
			.post('http://localhost:8001/api/employeeLeaves', {
				emp_id: '1',
				emp_leave_startDate: leave.startDate,
				emp_leave_endDate: leave.endDate,
				emp_leave_reason: leave.message,
			})
			.then((result) => {
				console.log(result);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setIsLoading(false);
			});
	};

	useEffect(() => {
		axios.get('http://localhost:8001/api/employeeLeaves/1').then((result) => {
			console.log(result.data.result);
			setLeaveData(result.data.result);
		});
	}, []);

	useEffect(() => {}, []);

	const handleToggle = (e) => {
		setIsLoggedin(!isLoggedin);
		const empId = localStorage.getItem('empId');
		const locations = window.navigator && window.navigator.geolocation;
		locations.getCurrentPosition((position) => {
			setLocation({
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
			});
			axios
				.post('http://localhost:8001/api/employeeLocation', {
					emp_id: empId,
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
					is_loggedin: !isLoggedin,
				})
				.then((result) => console.log(result))
				.catch((err) => console.log(err));
		});
	};

	return (
		<Box p={3}>
			<Grid container spacing={5}>
				<Grid item xs={12} sm={6}>
					<Paper style={{ minHeight: '40rem' }}>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								padding: '1.5rem',
								borderBottom: '0.1rem solid #d6d6d6',
							}}
						>
							<Typography component='h2'>Employee</Typography>
							<div>
								<Chip
									color={isLoggedin ? 'primary' : 'secondary'}
									label={isLoggedin ? 'Active' : 'Inactive'}
								/>
								<ToggleSwitch
									color={isLoggedin ? 'primary' : 'secondary'}
									checked={isLoggedin}
									onChange={handleToggle}
								/>
							</div>
						</div>
						<div style={{ padding: '4rem' }}>
							{isLoggedin ? (
								<Typography>
									Hello, you are active now at
									{`${location.latitude}, ${location.latitude}`}.
								</Typography>
							) : (
								<Typography>Hello, you havn't started you day.</Typography>
							)}
						</div>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Paper style={{ minHeight: '40rem' }}>
						<Tab
							onChange={handleChange}
							fullWidth
							value={tabValue}
							tabs={tabs}
						/>
						<TabPanel index={0} value={tabValue}>
							<Box m={10} style={{ maxWidth: '35rem' }}>
								<Grid container spacing={4} direction='column'>
									<Grid>
										<TextField
											fullWidth
											type='text'
											label='Leave Message'
											value={leave.message}
											onChange={(e) =>
												setLeave({ ...leave, message: e.target.value })
											}
										/>
									</Grid>
									<Grid>
										<Box mt={4}>
											<TextField
												fullWidth
												type='date'
												label='Start Date'
												value={leave.startDate}
												onChange={(e) =>
													setLeave({ ...leave, startDate: e.target.value })
												}
											/>
										</Box>
									</Grid>
									<Grid>
										<Box mt={4}>
											<TextField
												fullWidth
												type='date'
												label='End Date'
												value={leave.endDate}
												onChange={(e) =>
													setLeave({ ...leave, endDate: e.target.value })
												}
											/>
										</Box>
									</Grid>
									<Grid>
										<Box mt={4}>
											<Button
												fullWidth
												type='button'
												isLoading={isLoading}
												onClick={handleLeaveMessage}
											>
												Apply for Leave
											</Button>
										</Box>
									</Grid>
								</Grid>
							</Box>
						</TabPanel>
						<TabPanel index={1} value={tabValue}>
							{leaveData &&
								leaveData.map((item) => (
									<Box m={3}>
										<Paper
											style={{
												padding: '1rem',
												display: 'flex',
												justifyContent: 'space-between',
											}}
										>
											<Typography>{item.emp_leave_reason}</Typography>
											{item.emp_leave_startDate && (
												<Typography>
													{`${format(
														item.emp_leave_startDate,
														'DD, MMM YYYY',
													)} - ${format(
														item.emp_leave_endDate,
														'DD, MMM YYYY',
													)}`}
												</Typography>
											)}

											{item.is_approved ? (
												<Chip label='Approved' color='primary' />
											) : (
												<Chip label='Pending' color='secondary' />
											)}
										</Paper>
									</Box>
								))}
						</TabPanel>
					</Paper>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Employee;
