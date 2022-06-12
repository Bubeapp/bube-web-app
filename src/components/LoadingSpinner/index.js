import React from 'react';

function LoadingSpinner({ full }) {
  return (
    <div className={`loader-container ${full && 'loader-container__full'}`}>
      <div className="loader three-d-spinner">
        <div className="inner"></div>
        <div className="inner"></div>
        <div className="inner"></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
