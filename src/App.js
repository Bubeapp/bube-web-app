import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Footer from './components/Footer';
import Navigation from './components/Navigation';

import FAQs from './pages/FAQs';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Success from './pages/Success';
import Homepage from './pages/Homepage';
import VerifyEmail from './pages/VerifyEmail';
import ResetPassword from './pages/ResetPassword';
import ForgotPassword from './pages/ForgotPassword';

import Dashboard from './pages/UserDashboard/Dashboard';
import Services from './pages/UserDashboard/Services';
import Profile from './pages/UserDashboard/Profile';
import Notification from './pages/UserDashboard/Notification';
import Settings from './pages/UserDashboard/Settings';
import AuthProvider from './contexts/auth/authContext';
import ServicesListings from './pages/UserDashboard/ServiceListings';

function App() {
  const { pathname } = useLocation();

  return (
    <AuthProvider>
      <div className="app" style={{ backgroundColor: 'hsla(0, 0%, 95%, 1)' }}>
        {pathname !== '/faqs' && <Navigation />}
        <Routes>
          <Route exact path="/dashboard/:user" element={<Dashboard />} />
          <Route exact path="/services/:service" element={<Services />} />
          <Route exact path="/services/listing" element={<ServicesListings />} />
          <Route exact path="/profile/:user" element={<Profile />} />
          <Route exact path="/notification/:user" element={<Notification />} />
          <Route exact path="/settings/:user" element={<Settings />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/success" element={<Success />} />
          <Route exact path="/forgotpassword" element={<ForgotPassword />} />
          <Route exact path="/resetpassword" element={<ResetPassword />} />
          <Route exact path="/verify" element={<VerifyEmail />} />
          <Route exact path="/faqs" element={<FAQs />} />
          <Route exact path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
