import React from 'react';
import { Link } from 'react-router-dom';

function NavItem({ name, href }) {
  return (
    <li className="navbar__item">
      <Link className="navbar__link" to={href ? href : '/'}>
        {name}
      </Link>
    </li>
  );
}

export default NavItem;
