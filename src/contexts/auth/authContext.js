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
      const { status, data: results } = await axios.post('/auth/register', newUser);

      if (status !== 200 && !results?.success) throw Error();
      console.log(results?.data);
      sessionStorage.setItem('jwtToken', results?.data?.token);
      sessionStorage.setItem('newUser', JSON.stringify(results?.data?.user));
      navigate('/verify');
      await setToken(results?.data?.token);
    } catch (err) {
      console.log('Something went wrong', err);
    }
  };

  const signIn = async userData => {
    const userLoginDetails = { email: userData.email, password: userData.password };

    try {
      const { status, data: results } = await axios.post(
        '/auth/login',
        userLoginDetails
      );

      if (status !== 200 && !results?.success) throw Error();
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
      const res = await axios.post('/auth/verify', credentials);
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
