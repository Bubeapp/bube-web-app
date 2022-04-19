import React from 'react';
import Button from '..';

import circle_left_icon from '../../../assets/arrow-circle-left_icon.svg';

function ButtonBack({ handleOnClick }) {
  return (
    <Button onClick={handleOnClick} classname="btn btn--ghost btn--back">
      <img src={circle_left_icon} alt="Circle left icon" />
      <span>Back</span>
    </Button>
  );
}

export default ButtonBack;
