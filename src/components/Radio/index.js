import React from 'react';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

function CustomRadio(value, label) {
  return <FormControlLabel value={value} control={<Radio />} label={label} />;
}

export default CustomRadio;
