import React from 'react';
import { Link } from 'react-router-dom';

import bube_logo from '../../assets/bube_logo.svg';
import Button from '../Button';

function Navigation() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__nav">
          <img className="navbar__logo" src={bube_logo} alt="Bube logo" />
          <ul className="navbar__list">
            <li className="navbar__item">
              <Link className="navbar__link" to="/">
                Home
              </Link>
            </li>
            <li className="navbar__item">
              <Link className="navbar__link" to="/">
                Features
              </Link>
            </li>
            <li className="navbar__item">
              <Link className="navbar__link" to="/">
                Download
              </Link>
            </li>
            <li className="navbar__item">
              <Link className="navbar__link" to="/">
                About Us
              </Link>
            </li>
            <li className="navbar__item">
              <Link className="navbar__link" to="/">
                Contact
              </Link>
            </li>
          </ul>
          <Button classname="navbar__cta btn btn--primary">Login</Button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
