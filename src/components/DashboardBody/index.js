import React from 'react';
import Container from '../../layouts/Container';

function DashboardBody({ children }) {
  return (
    <div className="dashboard__body">
      <Container>{children}</Container>
    </div>
  );
}

export default DashboardBody;
