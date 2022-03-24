import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import Form from '../../components/Form';
import InputField from '../../components/InputField';
import PasswordField from '../../components/PasswordField';

function SignUp() {
  return (
    <div className="signup">
      <Form>
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
        <InputField type="text" label="Fullname" />
        <InputField type="email" label="Email" />
        <PasswordField type="password" label="Password" icon />
        <PasswordField type="password" label="Confirm Password" icon />
        <Checkbox />
        <Button classname="btn btn--primary btn--full">Sign up</Button>
      </Form>
    </div>
  );
}

export default SignUp;
