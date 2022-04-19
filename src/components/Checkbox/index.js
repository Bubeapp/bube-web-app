import React from 'react';

function Checkbox({ handleOnChange, label }) {
  return (
    <>
      <fieldset className="checkbox">
        <input
          className="checkbox__input"
          type="checkbox"
          name="checkbox"
          id="checkbox"
          onChange={handleOnChange}
        />

        <label className="checkbox__label" htmlFor="checkbox">
          {label}
        </label>
      </fieldset>
    </>
  );
}

export default Checkbox;
