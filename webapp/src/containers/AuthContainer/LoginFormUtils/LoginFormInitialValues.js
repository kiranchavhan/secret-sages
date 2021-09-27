import { loginFormModel } from './LoginFormModel';

const { formFields } = loginFormModel;
const { username, password } = formFields;

const loginFormInitialValues = {
  [username.name]: '',
  [password.name]: '',
};

export { loginFormInitialValues };
