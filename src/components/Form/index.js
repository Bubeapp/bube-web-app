import React from 'react';
import { Formik } from 'formik';

function Form({ children }) {
  return (
    <Formik>
      <form className="form" action="">
        {children}
      </form>
    </Formik>
  );
}

export default Form;
