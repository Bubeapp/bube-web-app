import React from 'react';

function Container({ children, otherClassNames }) {
  return <div className={`container ${otherClassNames}`}>{children}</div>;
}

export default Container;
