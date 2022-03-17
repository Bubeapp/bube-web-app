import React, { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';

import Button from '../Button';

function InputField({ type, label, errormessage, icon }) {
  const [hidePasswordField, setHidePasswordField] = useState(true);

  const togglePassword = () => {
    setHidePasswordField(prevState => !prevState);
  };

  return (
    <>
      <fieldset className="inputfield">
        <input
          className="inputfield__input"
          type={hidePasswordField ? type : 'text'}
          name={label.toLowerCase()}
          id={label.toLowerCase()}
          placeholder={label}
        />
        <label className="inputfield__label" htmlFor={label.toLowerCase()}>
          {label}
        </label>
        {icon && (
          <Button classname="inputfield__icon" type="button" onClick={togglePassword}>
            {hidePasswordField ? <IoEye /> : <IoEyeOff />}
          </Button>
        )}
      </fieldset>
      {errormessage && (
        <span className="inputfield__errormessage">&#9888; {errormessage}</span>
      )}
    </>
  );
}

export default InputField;
