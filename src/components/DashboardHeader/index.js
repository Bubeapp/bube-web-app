import React from 'react';

import Container from '../../layouts/Container';

function DashhoardHeader({ children }) {
  return (
    <div className="dashboard__header">
      <Container>{children}</Container>
    </div>
  );
}

export default DashhoardHeader;
