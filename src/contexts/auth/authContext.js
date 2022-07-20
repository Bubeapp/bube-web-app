import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../util/axios';

export const AuthContext = createContext({
  token: sessionStorage.getItem('jwtToken') || null,
  signUp: () => {},
  signIn: () => {},
  signOut: () => {},
  verifyEmail: () => {},
  forgotpassword: () => {},
  resetpassword: () => {},
});

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(sessionStorage.getItem('jwtToken') || null);
  const navigate = useNavigate();

  const signUp = async userData => {
    const newUser = {
      username: userData.username,
      firstname: userData.firstname,
      lastname: userData.lastname,
      email: userData.email,
      phone: userData.phone,
      password: userData.password,
    };

    try {
      const { data: results } = await axios.post('/auth/register', newUser);

      if (!results?.success) throw new Error('Unable to account create an account');
      sessionStorage.setItem('jwtToken', results?.data?.token);
      sessionStorage.setItem('newUser', JSON.stringify(results?.data?.user));
      navigate('/verify');
      setToken(results?.data?.token);
    } catch (err) {
      console.log('Something went wrong', err.message);
    }
  };

  const signIn = async userData => {
    const userLoginDetails = { email: userData.email, password: userData.password };

    try {
      const { data: results } = await axios.post('/auth/login', userLoginDetails);

      console.log(results);

      if (!results?.success)
        throw new Error(
          'Unable to login. Please check email and password are correct.'
        );
      const { token } = results?.data;
      sessionStorage.setItem('jwtToken', token);
      setToken(token);
    } catch (err) {
      console.log('Something went wrong', err);
    }
  };

  const signOut = () => {
    sessionStorage.clear();
    setToken(null);
  };

  const verify = async credentials => {
    try {
      const res = await axios.post(
        '/auth/verify',
        credentials
        // headers: {
        //   Authorization: `Bearer "$2b$10$34NJoRYUpe1yNSoN.JGY8OpdwhtyOI9yDGV6H9.2/vYNVL7dLsy7q"`,
        // },
      );
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  const resendVerifyCode = async email => {
    try {
      console.log(email);
      const res = await axios.post('/auth/resend-token', email);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  const forgotpassword = async email => {
    console.log(email);
    try {
      const res = await axios.post('/auth/password-reset-request', email);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const resetpassword = async password => {
    console.log(password);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        signUp,
        signIn,
        signOut,
        forgotpassword,
        resetpassword,
        verify,
        resendVerifyCode,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
