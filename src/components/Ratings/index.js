import React from 'react';

import Rating from '@mui/material/Rating';

function CustomRatings({ name, value }) {
  return <Rating name={name} value={value} readOnly />;
}

export default CustomRatings;
