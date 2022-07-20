import React from 'react';
import error from '../../assets/error.svg';

function Empty({ text }) {
  return (
    <div className="empty">
      <img src={error} alt="illusration of empty state" />
      <p>{text}</p>
    </div>
  );
}

export default Empty;
