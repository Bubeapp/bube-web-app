import React from 'react';

function InputField({
  type,
  label,
  errormessage,
  icon,
  value,
  handleOnChange,
  onBlur,
  visible,
}) {
  return (
    <>
      <fieldset className={`inputfield ${visible && errormessage ? 'error' : ''}`}>
        <input
          className="inputfield__input"
          type={type ? type : 'text'}
          name={label && label.split(' ').join('').toLowerCase()}
          id={label && label.split(' ').join('').toLowerCase()}
          placeholder={label}
          value={value}
          onChange={handleOnChange}
          onBlur={onBlur}
        />
        {label && (
          <label
            className="inputfield__label"
            htmlFor={label.split(' ').join('').toLowerCase()}
          >
            {label}
          </label>
        )}
        {visible && errormessage && (
          <span className="inputfield__errormessage">&#9888; {errormessage}</span>
        )}
      </fieldset>
    </>
  );
}

export default InputField;
