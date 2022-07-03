import React from 'react';
import { HashLink } from 'react-router-hash-link';

function NavItem({ name, href }) {
  return (
    <li className="navbar__item">
      <HashLink smooth className="navbar__link" to={href ? href : '/'}>
        {name}
      </HashLink>
    </li>
  );
}

export default NavItem;
