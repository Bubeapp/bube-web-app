import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Email_Icon from '../../assets/email_Icon.svg';

function VerifyEmail() {
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
    <div className="verifyemail">
      <img src={Email_Icon} alt="Email icon" />
      <h2>Check your email</h2>
      <p>
        Please check your email, We've sent a verification code to <span>{email}</span>
      </p>
      <Link className="btn btn--primary btn--full" to="/">
        Verify Email
      </Link>
      <p onClick={() => console.log('Resend code')}>
        Didn't recieved the email?{' '}
        <Link className="verifyemail__link" to="#">
          Click to resend email
        </Link>
      </p>
      <Link className="verifyemail__link btn btn--bg-none" to="/signin">
        Back to Login
      </Link>
    </div>
  );
}

export default VerifyEmail;
