import React from 'react';
import { Link } from 'react-router-dom';

function DropDownItem({ icon, title, notifications }) {
  return (
    <li className="dropdown__menu-item">
      <Link className="dropdown__menu-link" to="/">
        <img src={icon} alt="Help center" />
        <span className="dropdown__menu-title">{title}</span>
        {notifications && (
          <span className="dropdown__menu-circle">{notifications}</span>
        )}
      </Link>
    </li>
  );
}

export default DropDownItem;
