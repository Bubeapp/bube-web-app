import React from 'react';

function Button({ children, type, classname, onClick, disabled }) {
  return (
    <button className={classname} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
