import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Form from '../../components/Form';
import PasswordField from '../../components/PasswordField';

function ResetPassword() {
  return (
    <div className="resetpassword">
      <Form>
        <div className="resetpassword__header">
          <h2>Reset password</h2>
          <p>New password must be different from the previous one.</p>
        </div>
        <PasswordField type="password" label="New password" icon />
        <PasswordField type="password" label="Confirm password" icon />
        <Button classname="btn btn--primary btn--full">Reset password</Button>
        <Link className="btn btn--bg-none">Back to Login</Link>
      </Form>
    </div>
  );
}

export default ResetPassword;
