import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Button from '../../components/Button';
import Form from '../../components/Form';
import InputField from '../../components/InputField';
import PasswordField from '../../components/PasswordField';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email field is required'),
  password: Yup.string().min(8).required('Password field is required'),
});

const initialValues = {
  email: '',
  password: '',
};

const onSubmit = values => {
  console.log(values);
};

function SignIn() {
  const { values, errors, handleChange, handleSubmit, setFieldTouched, touched } =
    useFormik({
      initialValues,
      onSubmit,
      validationSchema,
    });

  return (
    <div className="signin">
      <Form onSubmit={handleSubmit}>
        <div className="signin__header">
          <h2>Welcome Back!</h2>
          <p>
            Don't have an account?{' '}
            <Link className="signin__link" to="/">
              Sign up
            </Link>
          </p>
        </div>
        <Button classname="btn btn--gmail btn--full">Sign In with Gmail</Button>
        <span className="signin__mail-opt">Or sign In with Gmail</span>
        <InputField
          type="email"
          label="Email"
          value={values.email}
          handleOnChange={handleChange}
          errormessage={errors.email}
          onBlur={() => setFieldTouched('email')}
          visible={touched.email}
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
        <Button type="submit" classname="btn btn--primary btn--full">
          Sign up
        </Button>
      </Form>
    </div>
  );
}

export default SignIn;
