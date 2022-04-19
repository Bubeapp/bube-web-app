import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';

function CustomToogle({ children, icon }) {
  const [selected, setSelected] = useState(false);

  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}
    >
      <img src={icon} alt="icon" />
      {selected && children}
    </ToggleButton>
  );
}

export default CustomToogle;
