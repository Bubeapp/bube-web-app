import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import Email_Icon from '../../assets/email_Icon.svg';

import InputField from '../../components/InputField';
import Button from '../../components/Button';
import Form from '../../components/Form';

import { AuthContext } from '../../contexts/auth/authContext';

function VerifyEmail() {
  const { verify, resendVerifyCode } = useContext(AuthContext);

  const resend = email => {
    resendVerifyCode(email);
  };

  const validationSchema = Yup.object().shape({
    code: Yup.number().required('Enter verification code that was sent to your email'),
  });

  const initialValues = {
    code: '',
  };

  const onSubmit = async (values, onSubmitProps) => {
    await verify(values);
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
    isSubmitting,
    dirty,
  } = useFormik({ initialValues, onSubmit, validationSchema });
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('newUser'))
      ? JSON.parse(sessionStorage.getItem('newUser'))
      : null;
    if (!user && !user?.email) return;

    setEmail(user?.email);
    console.log(user);
  }, [setEmail]);

  return (
    <Form className="verifyemail" onSubmit={handleSubmit}>
      <img src={Email_Icon} alt="Email icon" />
      <h2>Check your email</h2>
      <p>
        Please check your email, We've sent a verification code to <span>{email}</span>
      </p>

      <InputField
        type="number"
        name="code"
        value={values.code}
        handleOnChange={handleChange}
        placeholder="Code"
        label="Code"
        errormessage={errors.code}
        onBlur={() => setFieldTouched('code')}
        visible={touched.code}
      />

      <Button
        classname="btn btn--primary btn--full"
        type="submit"
        disabled={!(dirty && isValid) || isSubmitting}
      >
        {isSubmitting ? 'Verifying...' : 'Verify Email'}
      </Button>
      <p onClick={() => console.log('Resend code')}>
        Didn't recieved the email?{' '}
        <Button
          classname="verifyemail__link btn btn--bg-none"
          type="button"
          onClick={() => resend(values.email)}
        >
          Click to resend email
        </Button>
      </p>
      <Link className="verifyemail__link btn btn--bg-none" to="/signin">
        Back to Login
      </Link>
    </Form>
  );
}

export default VerifyEmail;
