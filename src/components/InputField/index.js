import React, { useState } from 'react';

function InputField({ type, label, errormessage, icon }) {
  const [input, setInput] = useState('');

  const handleInputChange = e => {
    setInput(e.target.value);
  };

  return (
    <>
      <fieldset className="inputfield">
        <input
          className="inputfield__input"
          type={type ? type : 'text'}
          name={label.toLowerCase()}
          id={label.toLowerCase()}
          placeholder={label}
          value={input}
          onChange={handleInputChange}
        />
        <label className="inputfield__label" htmlFor={label.toLowerCase()}>
          {label}
        </label>
      </fieldset>
      {errormessage && (
        <span className="inputfield__errormessage">&#9888; {errormessage}</span>
      )}
    </>
  );
}

export default InputField;
