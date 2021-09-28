import React from 'react';
import { Employee } from '../../containers';
import Layout from '../../layout/Layout';

const EmployeeScene = () => {
	return (
		<Layout isSidebar={false} title='Employee Dashboard'>
			<Employee />
		</Layout>
	);
};

export default EmployeeScene;
