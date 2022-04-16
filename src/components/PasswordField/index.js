import React, { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';

import Button from '../Button';

function PasswordField({
  type,
  label,
  errormessage,
  icon,
  value,
  handleOnChange,
  onBlur,
  visible,
}) {
  const [hidePasswordField, setHidePasswordField] = useState(true);

  const togglePassword = () => {
    setHidePasswordField(prevState => !prevState);
  };

  return (
    <>
      <fieldset className={`passwordfield ${visible && errormessage ? 'error' : ''}`}>
        <input
          className="passwordfield__input"
          type={hidePasswordField ? type : 'text'}
          name={label.split(' ').join('').toLowerCase()}
          id={label.split(' ').join('').toLowerCase()}
          placeholder={label}
          value={value}
          onChange={handleOnChange}
          onBlur={onBlur}
        />
        <label
          className="passwordfield__label"
          htmlFor={label.split(' ').join('').toLowerCase()}
        >
          {label}
        </label>
        {icon && (
          <Button
            classname="passwordfield__icon"
            type="button"
            onClick={togglePassword}
          >
            {hidePasswordField ? <IoEye /> : <IoEyeOff />}
          </Button>
        )}
        {visible && errormessage && (
          <span className="passwordfield__errormessage">&#9888; {errormessage}</span>
        )}
      </fieldset>
    </>
  );
}

export default PasswordField;
