import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import AuthProvider from './contexts/auth/authContext';
import UserProvider from './contexts/user/userContext';
import ServicesProvider from './contexts/services/serviceContext';

import App from './App';
import './styles/index.scss';

ReactDOM.render(
  <Router>
    <AuthProvider>
      <UserProvider>
        <ServicesProvider>
          <App />
        </ServicesProvider>
      </UserProvider>
    </AuthProvider>
  </Router>,
  document.querySelector('#root')
);
