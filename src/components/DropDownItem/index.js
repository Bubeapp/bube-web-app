import React from 'react';
import { Link } from 'react-router-dom';

function DropDownItem({ icon, title }) {
  return (
    <li className="dropdown__menu-item">
      <Link className="dropdown__menu-link" to="/">
        <img src={icon} alt="Help center" />
        <span>{title}</span>
      </Link>
    </li>
  );
}

export default DropDownItem;
