import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Form from '../../components/Form';
import PasswordField from '../../components/PasswordField';

const validationSchema = Yup.object().shape({
  newpassword: Yup.string().min(8).required('Password field is required'),
  confirmnewpassword: Yup.string()
    .oneOf([Yup.ref('newpassword'), null], 'Passwords must match')
    .required('Please confirm password'),
});

const initialValues = {
  newpassword: '',
  confirmnewpassword: '',
};

const onSubmit = values => {
  console.log('Form Data:', values);
};

function ResetPassword() {
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
          <h2>Set new password</h2>
          <p>New password must be different from the previous one.</p>
        </div>
        <PasswordField
          type="password"
          label="New password"
          icon
          value={values.newpassword}
          handleOnChange={handleChange}
          errormessage={errors.newpassword}
          onBlur={() => setFieldTouched('newpassword')}
          visible={touched.newpassword}
        />
        <PasswordField
          type="password"
          label="Confirm new password"
          icon
          value={values.confirmnewpassword}
          handleOnChange={handleChange}
          errormessage={errors.confirmnewpassword}
          onBlur={() => setFieldTouched('confirmnewpassword')}
          visible={touched.confirmnewpassword}
        />
        <Button type="submit" classname="btn btn--primary btn--full">
          Reset password
        </Button>
        <Button classname="forgotpassword__btn btn btn--bg-none">
          <Link className="forgotpassword__resend" to="/signin">
            Back to Login
          </Link>
        </Button>
      </Form>
    </div>
  );
}

export default ResetPassword;
