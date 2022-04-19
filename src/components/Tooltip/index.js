import React from 'react';

import Tooltip from '@mui/material/Tooltip';

function CustomTooltip({ title, icon }) {
  return (
    <Tooltip className="tooltip" title={title} placement="top" arrow>
      <img src={icon} alt="icon" />
    </Tooltip>
  );
}

export default CustomTooltip;
