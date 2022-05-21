import React from 'react';
import Button from '../Button';

function InputFieldWithIcon({ placeholder, name, id, type, Icon }) {
  return (
    <>
      <fieldset className="inputfield__wwithicon">
        <input
          className="inputfield__input"
          type={type}
          placeholder={placeholder}
          name={name}
          id={id}
        />
        <label className="inputfield__label hidden" htmlFor={name}></label>
        <Button>{Icon}</Button>
      </fieldset>
    </>
  );
}

export default InputFieldWithIcon;
