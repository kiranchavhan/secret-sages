import { Box, Grid } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React from 'react';

import { TextFieldWrapper, Button } from '@components';
import { loginFormInitialValues } from '../LoginFormUtils/LoginFormInitialValues';
import { loginFormValidation } from '../LoginFormUtils/LoginFormValidation';
import { loginFormModel } from '../LoginFormUtils/LoginFormModel';

const LoginForm = (props) => {
  const { onSubmit, isLoading } = props;
  const { formFields } = loginFormModel;
  const { username, password } = formFields;

  return (
    <Formik
      initialValues={loginFormInitialValues}
      validationSchema={loginFormValidation}
      onSubmit={onSubmit}
    >
      {(formikData) => {
        const { submitForm } = formikData;

        return (
          <Form id='1'>
            <Grid item xs={12}>
              <Box>
                <TextFieldWrapper type='email' label={username.label} name={username.name} />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box mt={3}>
                <TextFieldWrapper type='password' label={password.label} name={password.name} />
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box mt={3}>
                <Button
                  fullWidth
                  isLoading={isLoading}
                  type='submit'
                  onClick={submitForm}
                  variant='contained'
                >
                  Login Now
                </Button>
              </Box>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
