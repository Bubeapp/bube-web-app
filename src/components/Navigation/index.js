import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Button from '../Button';
import NavItem from '../NavItem';
import NavList from '../NavList';
import DropDownMenu from '../DropDownMenu';
import DropDownItem from '../DropDownItem';

import Container from '../../layouts/Container';

import bube_logo from '../../assets/bube_logo.svg';
import help_center from '../../assets/message-edit_icon.svg';
import question_icon from '../../assets/message-question_icon.svg';

function Navigation() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const { pathname } = useLocation();

  return isSignedIn ? (
    <nav
      className="navbar"
      style={
        pathname !== '/' && {
          background: 'hsla(0, 0%, 97%, 1)',
          marginBottom: '6.4rem',
        }
      }
    >
      <Container>
        <div className="navbar__nav">
          <img className="navbar__logo" src={bube_logo} alt="Bube logo" />
          <NavList>
            <NavItem name="Home" />
            <NavItem name="Features" />
            <NavItem name="Download" />
            <NavItem name="About Us" />
            <NavItem name="Contact" />
          </NavList>
          <Button classname="navbar__cta btn btn--primary">
            {pathname === '/'
              ? 'Login / Register'
              : pathname === '/signup'
              ? 'Login'
              : 'Sign up'}
          </Button>
        </div>
      </Container>
    </nav>
  ) : (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__nav">
          <img className="navbar__logo" src={bube_logo} alt="Bube logo" />

          <NavList>
            <NavItem name="Home" />
            <NavItem name="Jobs" />
            <NavItem name="Download" />
            <DropDownMenu name="Help">
              <ul className="dropdown__menu">
                <DropDownItem icon={help_center} title="Help Center" />
                <DropDownItem icon={question_icon} title="Ask Question " />
              </ul>
            </DropDownMenu>
            <DropDownMenu name="Account"></DropDownMenu>
          </NavList>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
