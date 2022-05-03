import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '..';

import circle_left_icon from '../../../assets/arrow-circle-left_icon.svg';

function ButtonBack() {
  const navigate = useNavigate();

  const goBack = e => navigate(-1);

  return (
    <Button type="button" onClick={goBack} classname="btn btn--ghost btn--back">
      <img src={circle_left_icon} alt="Circle left icon" />
      <span>Back</span>
    </Button>
  );
}

export default ButtonBack;
