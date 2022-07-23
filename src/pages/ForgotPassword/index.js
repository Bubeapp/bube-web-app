import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Button from '../../components/Button';
import Form from '../../components/Form';
import InputField from '../../components/InputField';
import { AuthContext } from '../../contexts/auth/authContext';

function ForgotPassword() {
  const { forgotpassword } = useContext(AuthContext);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email field is required'),
  });

  const initialValues = {
    email: '',
  };

  const onSubmit = (values, { resetForm }, onSubmitProps) => {
    forgotpassword(values);

    resetForm();
  };

  const { values, errors, handleChange, handleSubmit, setFieldTouched, touched } =
    useFormik({
      initialValues,
      onSubmit,
      validationSchema,
    });

  return (
    <div className="forgotpassword">
      <Form onSubmit={handleSubmit}>
        <div className="forgotpassword__header">
          <h2>Forgot Password</h2>
          <p>No worries, we will send you reset instructions.</p>
        </div>
        <InputField
          type="email"
          label="Email"
          value={values.email}
          handleOnChange={handleChange}
          errormessage={errors.email}
          onBlur={() => setFieldTouched('email')}
          visible={touched.email}
        />

        <Button type="submit" classname="btn btn--primary btn--full">
          Send reset instructions
        </Button>
        <Button
          type="button"
          onClick={() => console.log('Resend Code')}
          classname="forgotpassword__btn btn btn--bg-none"
        >
          Didn't get code?{' '}
          <Link className="forgotpassword__resend" to="#">
            Resend code
          </Link>
        </Button>
      </Form>
    </div>
  );
}

export default ForgotPassword;
