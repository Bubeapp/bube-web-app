import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import success_icon from '../../assets/success_icon.svg';

function Success() {
  return (
    <div className="success">
      <img src={success_icon} alt="Email icon" />
      <h2>Password</h2>
      <p>
        You password has been reset successfully. Click on continue below to login
        magically.
      </p>

      <Button classname="btn btn--primary btn--full">Continue</Button>
      <Link className="success__link btn btn--bg-none" to="/">
        Back to Login
      </Link>
    </div>
  );
}

export default Success;
