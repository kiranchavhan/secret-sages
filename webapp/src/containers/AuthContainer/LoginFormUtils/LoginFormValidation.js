import * as Yup from 'yup';
import { loginFormModel } from './LoginFormModel';

const { formFields } = loginFormModel;
const { username, password } = formFields;

const loginFormValidation = Yup.object().shape({
  [username.name]: Yup.string().required('This field is required'),
  [password.name]: Yup.string().required('This field is required'),
});

export { loginFormValidation };
