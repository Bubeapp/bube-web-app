import React from 'react';

function Form({ children, onSubmit }) {
  return (
    <form className="form" action="" onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default Form;
