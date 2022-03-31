import React from 'react';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="app">
      <>
        <Navigation />
        <Homepage />
        <Footer />
      </>
    </div>
  );
}

export default App;
