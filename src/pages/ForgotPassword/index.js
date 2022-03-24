import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Form from '../../components/Form';
import InputField from '../../components/InputField';

function ForgotPassword() {
  return (
    <div className="forgotpassword">
      <Form>
        <div className="forgotpassword__header">
          <h2>Forgot Password</h2>
          <p>No worries, we will send you reset instructions.</p>
        </div>
        <InputField type="email" label="Email" />
        <Button classname="btn btn--primary btn--full">Send reset instructions</Button>
        <Button classname="forgotpassword__btn btn btn--bg-none">
          Didn't get code?{' '}
          <Link className="forgotpassword__resend" to="/">
            Resend code
          </Link>
        </Button>
      </Form>
    </div>
  );
}

export default ForgotPassword;
