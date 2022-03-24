import React, { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';

import Button from '../Button';

function PasswordField({ type, label, errormessage, icon }) {
  const [password, setPassword] = useState('');
  const [hidePasswordField, setHidePasswordField] = useState(true);

  const togglePassword = () => {
    setHidePasswordField(prevState => !prevState);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  return (
    <>
      <fieldset className="passwordfield">
        <input
          className="passwordfield__input"
          type={hidePasswordField ? type : 'text'}
          name={label.toLowerCase()}
          id={label.toLowerCase()}
          placeholder={label}
          value={password}
          onChange={handlePasswordChange}
        />
        <label className="passwordfield__label" htmlFor={label.toLowerCase()}>
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
      </fieldset>
      {errormessage && (
        <span className="passwordfield__errormessage">&#9888; {errormessage}</span>
      )}
    </>
  );
}

export default PasswordField;
