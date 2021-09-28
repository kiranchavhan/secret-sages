import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-format-parse';
import { Paper, TableContainer, Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { SnackbarLoader, Modal, Tab, TabPanel, Loader } from '@components';
import { BASE_URL } from '@constants';
import useStyles from './style';
import AllEmployee from './AllEmployees/AllEmployee';
import ApplyFilters from './AllEmployees/ApplyFilters';

const AdminEmployee = () => {
	const [employee, setEmployee] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [tabValue, setTabValue] = useState(0);
	const [isViewModal, setIsViewModal] = useState(false);
	const [isModalLoading, setIsModalLoading] = useState(false);
	const [empData, setEmpData] = useState(null);
	const [filterData, setFilterData] = useState({
		state: null,
		city: null,
		dept: null,
	});

	const classes = useStyles();

	const tabData = [
		{ key: '1', label: 'User Detail' },
		{ key: '2', label: 'Address' },
		{ key: '3', label: 'Map' },
	];

	const fetchData = async () => {
		axios
			.post(`${BASE_URL}employeeFilters`, {
				emp_department: filterData.dept,
				address_state: filterData.state,
				address_city: filterData.city,
			})
			.then((result) => {
				result.data.result?.map((data) =>
					setEmployee((prevState) => [...prevState, data]),
				);
				setIsLoading(false);
			});
	};

	const fetchEmployeeData = (empId) => {
		axios.get(`${BASE_URL}employee/${empId}`).then((result) => {
			setEmpData(result.data.result[0]);
			setIsModalLoading(false);
		});
	};

	useEffect(() => {
		setIsLoading(true);
		fetchData();
	}, []);

	const handleTabChange = (e, newValue) => {
		console.log(e);
		setTabValue(newValue);
	};

	const handleView = (data) => {
		setIsViewModal(true);
		setIsModalLoading(true);
		fetchEmployeeData(data.emp_id);
	};

	const handleCloseModal = () => setIsViewModal(false);

	const handleApplyFilter = () => {
		console.log(filterData);
		setIsLoading(true);
		setEmployee([]);
		fetchData();
	};

	return (
		<>
			<Paper style={{ width: '100%', margin: '3rem 0' }}>
				<div className={classes.header}>
					<Typography component='h2'>Apply Filters</Typography>
				</div>
				<ApplyFilters
					filterData={filterData}
					setFilterData={setFilterData}
					onClick={handleApplyFilter}
				/>
			</Paper>

			{isLoading ? (
				<div className={classes.loader}>
					<Loader />
				</div>
			) : (
				<Paper elevation={1}>
					<div className={classes.header}>
						<Typography component='h2'>Employee</Typography>
					</div>
					<div className={classes.table}>
						<AllEmployee employee={employee} onViewClick={handleView} />
					</div>
				</Paper>
			)}
			<Modal open={isViewModal} onClose={handleCloseModal}>
				<Paper className={classes.modal}>
					<Tab
						fullWidth
						color='primary'
						tabs={tabData}
						onChange={handleTabChange}
						value={tabValue}
					/>
					{isModalLoading && (
						<div className={classes.loader}>
							<Loader />
						</div>
					)}
					<TabPanel index={0} value={tabValue}>
						<div className={classes.tabList}>
							{empData && (
								<TableContainer component={Paper}>
									<Table aria-label='simple table'>
										<TableBody>
											<TableRow>
												<TableCell align='left'>First Name</TableCell>
												<TableCell align='left'>{empData.first_name}</TableCell>
											</TableRow>
											{empData.last_name && (
												<TableRow>
													<TableCell align='left'>Last Name</TableCell>
													<TableCell align='left'>
														{empData.last_name}
													</TableCell>
												</TableRow>
											)}
											<TableRow>
												<TableCell align='left'>User Since</TableCell>
												<TableCell align='left'>
													{format(empData.createdAt, 'DD MMM, YYYY')}
												</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								</TableContainer>
							)}
						</div>
					</TabPanel>
					<TabPanel index={1} value={tabValue}>
						<div className={classes.tabList}>
							{empData && (
								<TableContainer component={Paper}>
									<Table aria-label='simple table'>
										<TableBody>
											{empData.address_state && (
												<TableRow>
													<TableCell align='left'>State</TableCell>
													<TableCell align='left'>
														{empData.address_state}
													</TableCell>
												</TableRow>
											)}
											<TableRow>
												<TableCell align='left'>City</TableCell>
												<TableCell align='left'>
													{empData.address_city}
												</TableCell>
											</TableRow>
											{empData.address_pincode && (
												<TableRow>
													<TableCell align='left'>House No.</TableCell>
													<TableCell align='left'>
														{empData.address_pincode}
													</TableCell>
												</TableRow>
											)}
										</TableBody>
									</Table>
								</TableContainer>
							)}
						</div>
					</TabPanel>
					<TabPanel index={2} value={tabValue}>
						<div className={classes.tabList}>
							{empData && (
								<iframe
									title='Map'
									width='100%'
									height='300'
									frameBorder='0'
									scrolling='no'
									marginHeight='0'
									marginWidth='0'
									src='https://maps.google.com/maps?q=31.253790,75.701049&z=15&output=embed'
								/>
							)}
						</div>
					</TabPanel>
				</Paper>
			</Modal>
			<SnackbarLoader open={isLoading} message='Fetching employee data...' />
		</>
	);
};

export default AdminEmployee;
