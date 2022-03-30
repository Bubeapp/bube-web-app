import React from 'react';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import VerifyEmail from './pages/VerifyEmail';

function App() {
  return (
    <div className="app">
      <>
        <Navigation />
        <SignUp />
        <Footer />
      </>
    </div>
  );
}

export default App;
