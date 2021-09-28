import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import {
	AuthScene,
	EmployeeScene,
	Employees,
	AdminDashboardScene,
} from '@scenes';
import axios from 'axios';
// import SampleScene from "@scenes/SampleScene";

const Routes = () => {
	const [isAuth, setIsAuth] = useState(false);
	const [type, setType] = useState('emp');
	const [isLoading, setIsLoading] = useState(false);

	const handleForm = (values, actions) => {
		setIsLoading(true);
		axios
			.post('http://localhost:8001/api/login', { email: values.username })
			.then((result) => {
				localStorage.setItem('empId', result.data.result.emp_id);
				localStorage.setItem('isAdmin', result.data.result.is_admin);
				localStorage.setItem('name', result.data.result.first_name);
				localStorage.setItem('email', result.data.result.emp_email);
				setIsLoading(false);
				setIsAuth(true);
				if (result.data.result.is_admin) {
					setType('admin');
				} else {
					setType('emp');
				}
			});
	};

	useEffect(() => {
		const isAdmin = localStorage.getItem('isAdmin');
		const email = localStorage.getItem('email');
		if (isAdmin === 'true') {
			setType('admin');
		} else {
			setType('emp');
		}

		if (email) {
			setIsAuth(true);
		} else {
			setIsAuth(false);
		}
	}, []);

	if (isAuth && type === 'admin') {
		return (
			<BrowserRouter>
				<Switch>
					<Route path='/' exact component={AdminDashboardScene} />
					<Route path='/employee' exact component={EmployeeScene} />
				</Switch>
			</BrowserRouter>
		);
	}

	if (isAuth && type === 'emp') {
		return (
			<BrowserRouter>
				<Switch>
					<Route path='/' exact component={Employees} />
				</Switch>
			</BrowserRouter>
		);
	}
	return <AuthScene handleForm={handleForm} isLoading={isLoading} />;
};

export default Routes;
