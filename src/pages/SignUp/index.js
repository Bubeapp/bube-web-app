import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Form from '../../components/Form';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import InputField from '../../components/InputField';
import PasswordField from '../../components/PasswordField';

import { AuthContext } from '../../contexts/auth/authContext';

function SignUp() {
  const { signUp } = useContext(AuthContext);

  ////////////////////////////////////////////
  // Sign up form validationSchema
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Please enter a username'),
    firstname: Yup.string().required('Please enter your firstname'),
    lastname: Yup.string().required('Please enter your lastname'),
    email: Yup.string()
      .email('Invalid email')
      .required('Please enter your email address'),
    phone: Yup.number().required('Please enter phone number'),
    password: Yup.string().min(8).required('Password field is required'),
    // confirmpassword: Yup.string()
    //   .oneOf([Yup.ref('password'), null], 'Passwords must match')
    //   .required('Please confirm password'),
  });

  ////////////////////////////////////////////
  // initial form Values
  const initialValues = {
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
  };

  const onSubmit = async (values, onSubmitProps) => {
    await signUp({ ...values });
    onSubmitProps.setSubmitting(false);
  };

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    setFieldTouched,
    touched,
    isValid,
    dirty,
    isSubmitting,
  } = useFormik({
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
            <Link className="signup__link" to="/signin">
              Sign In
            </Link>
          </p>
        </div>
        {/* <Button classname="btn btn--gmail btn--full">Sign up with Gmail</Button>
        <span className="signup__mail-opt">Or sign up with email</span> */}
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

        <Checkbox
          handleOnChange={handleChange}
          label="I agree to Bube's terms of service and privacy policy."
        />
        <Button
          type="submit"
          classname="btn btn--primary btn--full"
          disabled={!(dirty && isValid) || isSubmitting}
        >
          {isSubmitting ? 'Please wait...' : 'Sign in'}
        </Button>
      </Form>
    </div>
  );
}

export default SignUp;
