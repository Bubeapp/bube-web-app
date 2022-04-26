import React, { createContext, useState } from 'react';
import axios from '../../util/axios';

const loginToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjY3NmNlZjMwNTllOWI5MDVmODNjZGEiLCJlbWFpbCI6ImttYmFnd3UxMkBnbWFpbC5jb20iLCJyb2xlcyI6WyJ1c2VyIl0sInVzZXJuYW1lIjoid2hpdGVnb2QiLCJpc1ZlcmlmaWVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIiwiaWF0IjoxNjUwOTQ1MjY5LCJleHAiOjE2NTg3MjEyNjl9.VJd0hpRiLvoHTn4rTORSFLDwKdogKx8KrSS2J69383c';

export const AuthContext = createContext({
  isSignedIn: false,
  token: null,
  currentUser: null,
  signUp: () => {},
  signIn: () => {},
  signOut: () => {},
});

const AuthProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

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
      console.log(results?.data);
    } catch (err) {
      console.log('Something went wrong', err);
    }
  };

  const signOut = () => {
    setToken(null);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ isSignedIn, currentUser, token, signUp, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
