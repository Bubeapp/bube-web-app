import React from 'react';
import Button from '..';

import plus_icon from '../../../assets/plus_icon.svg';

function ButtonMakeRequest({ handleOnClick }) {
  return (
    <Button onClick={handleOnClick} classname="dashboard__request-btn btn btn--primary">
      <img src={plus_icon} alt="Plus icon" />
      <span>Make Request</span>
    </Button>
  );
}

export default ButtonMakeRequest;
