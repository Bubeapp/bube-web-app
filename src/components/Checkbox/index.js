import React from 'react';

function Checkbox({ handleOnChange }) {
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
          I agree to Bube's terms of service and privacy policy.
        </label>
      </fieldset>
    </>
  );
}

export default Checkbox;
