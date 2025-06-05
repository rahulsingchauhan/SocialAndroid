import * as Yup from 'yup';


export const SignupValidationSchema = Yup.object().shape({
  fullName: Yup.string().min(3, 'Enter full name').required('Full name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'At least 6 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm your password'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Enter valid 10-digit phone number')
    .required('Phone number is required'),
});
