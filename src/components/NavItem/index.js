import React from 'react';
import { Link } from 'react-router-dom';

function NavItem({ name }) {
  return (
    <li className="navbar__item">
      <Link className="navbar__link" to="/">
        {name}
      </Link>
    </li>
  );
}

export default NavItem;
