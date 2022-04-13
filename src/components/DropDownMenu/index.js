import React from 'react';
import { Link } from 'react-router-dom';

import dropdown_icon from '../../assets/dropdown_icon.svg';

function DropDownMenu({ children, name }) {
  return (
    <li className="dropdown">
      <Link className="dropdown__link" to="/">
        {name}
      </Link>
      {children}
      <img src={dropdown_icon} alt="Dropdown arrow" />
    </li>
  );
}

export default DropDownMenu;
