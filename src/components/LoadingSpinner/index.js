import React from 'react';

function LoadingSpinner() {
  return (
    <div className="loader-container">
      <div className="loader three-d-spinner">
        <div className="inner"></div>
        <div className="inner"></div>
        <div className="inner"></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
