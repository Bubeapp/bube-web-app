import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Footer from './components/Footer';
import Navigation from './components/Navigation';

import Homepage from './pages/Homepage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import FAQs from './pages/FAQs';

import Dashboard from './pages/UserDashboard/Dashboard';

function App() {
  const { pathname } = useLocation();
  return (
    <div
      className="app"
      style={pathname !== '/' && { background: 'hsla(0, 0%, 95%, 1)' }}
    >
      <Navigation />
      <Routes>
        <Route exact path="/dashboard/:user" element={<Dashboard />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/faqs" element={<FAQs />} />
        <Route exact path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
