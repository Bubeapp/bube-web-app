import React from 'react';
import Checkbox from '../Checkbox';

function RequestList({ children }) {
  return (
    <div className="request__container">
      <div className="request__header">
        <Checkbox label="Show active" />
      </div>

      <div className="request__grid">{children}</div>
    </div>
  );
}

export default RequestList;
