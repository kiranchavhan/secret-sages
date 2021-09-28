import React from 'react';
import { AuthContainer } from '@containers';

const AuthScene = (props) => {
	const { isLoading, handleForm } = props;
	return (
		<div>
			<AuthContainer isLoading={isLoading} handleForm={handleForm} />
		</div>
	);
};

export default AuthScene;
