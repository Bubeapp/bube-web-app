import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Form from '../../components/Form';
import InputField from '../../components/InputField';
import PasswordField from '../../components/PasswordField';

function SignIn() {
  return (
    <div className="signin">
      <Form>
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
        <InputField type="email" label="Email" />
        <PasswordField type="password" label="Password" icon />
        <Button classname="btn btn--primary btn--full">Sign up</Button>
      </Form>
    </div>
  );
}

export default SignIn;
