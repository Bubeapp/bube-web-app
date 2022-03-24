import React from 'react';
import { Link } from 'react-router-dom';

import Email_Icon from '../../assets/email_Icon.svg';

function VerifyEmail({ email }) {
  return (
    <div className="verifyemail">
      <img src={Email_Icon} alt="Email icon" />
      <h2>Check your email</h2>
      <p>
        Please check your email, We've sent a verification link has been sent to{' '}
        <span>{email}</span>
      </p>
      <Link className="btn btn--primary btn--full" to="/">
        Open email app
      </Link>
      <p>
        Didn't recieved the email?{' '}
        <Link className="verifyemail__link" to="/">
          Click to resend email
        </Link>
      </p>
      <Link className="verifyemail__link btn btn--bg-none" to="/">
        Back to Login
      </Link>
    </div>
  );
}

export default VerifyEmail;
