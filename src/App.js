import React, { useContext } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

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
import ServicesListings from './pages/UserDashboard/ServiceListings';
import ServicesDetails from './pages/UserDashboard/ServicesDetails';

import { UserContext } from './contexts/user/userContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const { currentUser } = useContext(UserContext);
  const { pathname } = useLocation();

  return (
    <div className="app" style={{ backgroundColor: 'hsla(0, 0%, 95%, 1)' }}>
      {pathname !== '/faqs' && <Navigation />}

      <Routes>
        <Route
          exact
          path="/dashboard"
          element={<ProtectedRoute component={Dashboard} />}
        />
        <Route
          exact
          path="/services/:listing"
          element={<ProtectedRoute component={Services} />}
        />
        <Route
          exact
          path="/services/listing"
          element={<ProtectedRoute component={ServicesListings} />}
        />

        <Route
          exact
          path="/services/details"
          element={<ProtectedRoute component={ServicesDetails} />}
        />
        <Route exact path="/me" element={<ProtectedRoute component={Profile} />} />
        <Route
          exact
          path="/notifications"
          element={<ProtectedRoute component={Notification} />}
        />
        <Route
          exact
          path="/settings"
          element={<ProtectedRoute component={Settings} />}
        />

        <Route exact path="/signup" element={<SignUp />} />
        <Route
          exact
          path="/signin"
          element={!currentUser ? <SignIn /> : <Navigate to={'/dashboard'} />}
        />
        <Route exact path="/logout" element={<Navigate to="/signin" />} />
        <Route exact path="/success" element={<Success />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        <Route exact path="/resetpassword" element={<ResetPassword />} />
        <Route exact path="/verify" element={<VerifyEmail />} />
        <Route exact path="/faqs" element={<FAQs />} />
        <Route
          exact
          path="/"
          element={!currentUser ? <Homepage /> : <Navigate to="/dashboard" />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
