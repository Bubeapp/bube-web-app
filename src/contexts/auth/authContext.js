import React, { createContext, useState } from 'react';

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

  const signUp = userData => {
    console.log(userData, 'Sign Up was successfully');
  };

  const signIn = token => {
    if (!token) return;

    setIsSignedIn(true);
    console.log(token);
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
