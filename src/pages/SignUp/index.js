import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Form from '../../components/Form';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import InputField from '../../components/InputField';
import PasswordField from '../../components/PasswordField';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Please enter a username'),
  firstname: Yup.string().required('Please enter your firstname'),
  lastname: Yup.string().required('Please enter your lastname'),
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email address'),
  phone: Yup.number().required('Please enter phone number'),
  password: Yup.string().min(8).required('Password field is required'),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm password'),
});

const initialValues = {
  username: '',
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  password: '',
  confirmpassword: '',
};

const onSubmit = values => {
  console.log('Form Data:', values);
};

function SignUp() {
  const { values, errors, handleChange, handleSubmit, setFieldTouched, touched } =
    useFormik({
      initialValues,
      onSubmit,
      validationSchema,
    });

  return (
    <div className="signup">
      <Form onSubmit={handleSubmit}>
        <div className="signup__header">
          <h2>Create Account</h2>
          <p>
            Already have an account?{' '}
            <Link className="signup__link" to="/">
              Sign In
            </Link>
          </p>
        </div>
        <Button classname="btn btn--gmail btn--full">Sign up with Gmail</Button>
        <span className="signup__mail-opt">Or sign up with email</span>
        <InputField
          type="text"
          label="Username"
          value={values.username}
          handleOnChange={handleChange}
          errormessage={errors.username}
          onBlur={() => setFieldTouched('username')}
          visible={touched.username}
        />
        <InputField
          type="text"
          label="Firstname"
          value={values.firstname}
          handleOnChange={handleChange}
          errormessage={errors.firstname}
          onBlur={() => setFieldTouched('firstname')}
          visible={touched.firstname}
        />
        <InputField
          type="text"
          label="Lastname"
          value={values.lastname}
          handleOnChange={handleChange}
          errormessage={errors.lastname}
          onBlur={() => setFieldTouched('lastname')}
          visible={touched.lastname}
        />
        <InputField
          type="email"
          label="Email"
          value={values.email}
          handleOnChange={handleChange}
          errormessage={errors.email}
          onBlur={() => setFieldTouched('email')}
          visible={touched.email}
        />
        <InputField
          type="number"
          label="Phone"
          value={values.phone}
          handleOnChange={handleChange}
          errormessage={errors.phone}
          onBlur={() => setFieldTouched('phone')}
          visible={touched.phone}
        />
        <PasswordField
          type="password"
          label="Password"
          icon
          value={values.password}
          handleOnChange={handleChange}
          errormessage={errors.password}
          onBlur={() => setFieldTouched('password')}
          visible={touched.password}
        />
        <PasswordField
          type="password"
          label="Confirm Password"
          icon
          value={values.confirmpassword}
          handleOnChange={handleChange}
          errormessage={errors.confirmpassword}
          onBlur={() => setFieldTouched('confirmpassword')}
          visible={touched.confirmpassword}
        />
        <Checkbox handleOnChange={handleChange} />
        <Button type="submit" classname="btn btn--primary btn--full">
          Sign up
        </Button>
      </Form>
    </div>
  );
}

export default SignUp;
