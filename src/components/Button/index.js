import React from 'react';

function Button({ children, type, classname, onClick }) {
  return (
    <button className={classname} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
