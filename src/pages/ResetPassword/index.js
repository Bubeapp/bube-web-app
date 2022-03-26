import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Form from '../../components/Form';
import PasswordField from '../../components/PasswordField';

function ResetPassword() {
  return (
    <div className="forgotpassword">
      <Form>
        <div className="forgotpassword__header">
          <h2>Set new password</h2>
          <p>New password must be different from the previous one.</p>
        </div>
        <PasswordField type="password" label="New password" icon />
        <PasswordField type="password" label="Confirm new password" icon />
        <Button classname="btn btn--primary btn--full">Reset password</Button>
        <Button classname="forgotpassword__btn btn btn--bg-none">
          <Link className="forgotpassword__resend" to="/">
            Back to Login
          </Link>
        </Button>
      </Form>
    </div>
  );
}

export default ResetPassword;
