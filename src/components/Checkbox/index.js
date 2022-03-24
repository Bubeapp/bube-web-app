import React, { useState } from 'react';

function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <fieldset className="checkbox">
        <input
          className="checkbox__input"
          type="checkbox"
          name="checkbox"
          id="checkbox"
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />

        <label className="checkbox__label" htmlFor="checkbox">
          I agree to Bube's terms of service and privacy policy.
        </label>
      </fieldset>
    </>
  );
}

export default Checkbox;
