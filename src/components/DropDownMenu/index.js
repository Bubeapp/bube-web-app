import React from 'react';
import { Link } from 'react-router-dom';

import dropdown_icon from '../../assets/dropdown_icon.svg';

function DropDownMenu({ children, name, userAvatar, icon }) {
  return !userAvatar ? (
    <li className="dropdown">
      {icon && icon}
      <Link className="dropdown__link" to="#">
        {name}
      </Link>
      {children}
      <img src={dropdown_icon} alt="Dropdown arrow" />
    </li>
  ) : (
    <li className="dropdown">
      {userAvatar && (
        <img className="dropdown__avatar" src={userAvatar} alt="User avatar" />
      )}
      <Link className="dropdown__link" to="#">
        {name}
      </Link>
      {children}
      <img src={dropdown_icon} alt="Dropdown arrow" />
    </li>
  );
}

export default DropDownMenu;
