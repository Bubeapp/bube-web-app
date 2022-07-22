import React, { useContext, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IoPersonCircle } from 'react-icons/io5';

import Button from '../Button';
import NavItem from '../NavItem';
import NavList from '../NavList';
import DropDownMenu from '../DropDownMenu';
import DropDownItem from '../DropDownItem';

import Container from '../../layouts/Container';

import bube_logo from '../../assets/bube_logo.svg';
import help_center from '../../assets/message-edit_icon.svg';
import user_icon from '../../assets/user_avatar.svg';
import logout_icon from '../../assets/logout_icon.svg';
import setting_icon from '../../assets/setting_icon.svg';
import question_icon from '../../assets/message-question_icon.svg';
import notification_icon from '../../assets/notification_icon.svg';

import { UserContext } from '../../contexts/user/userContext';
import { AuthContext } from '../../contexts/auth/authContext';

function Navigation() {
  const { isSignedIn, currentUser, setSignedIn, setUser } = useContext(UserContext);
  const { signOut } = useContext(AuthContext);
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const navGroup = useRef();
  const navGroupDropdown = useRef();

  const navigate = useNavigate();

  const { pathname } = useLocation();

  console.log(currentUser);

  const toggleMenu = e => {
    setToggleMobileMenu(!toggleMobileMenu);

    if (!isSignedIn) navGroup.current?.classList.toggle('hidden');
    if (isSignedIn) navGroupDropdown?.current.classList.toggle('hidden');
  };

  // adds Bottom Margin and backgroundColor
  // on NavBar component except on homepage
  const styleNavBar = () => {
    if (pathname === '/') return {};

    return {
      background: 'hsla(0, 0%, 97%, 1)',
      marginBottom: '6.4rem',
    };
  };

  return !isSignedIn && !currentUser ? (
    <nav className="navbar" style={styleNavBar()}>
      <Container>
        <div className="navbar__nav">
          <img
            onClick={() => navigate('/')}
            className="navbar__logo"
            src={bube_logo}
            alt="Bube logo"
          />

          <div className="navbar__nav-group hidden" ref={navGroup}>
            <CloseIcon onClick={toggleMenu} sx={{ fontSize: '3rem' }} />
            <NavList>
              <NavItem name="Home" href={'/'} />
              <NavItem name="Features" href={'/#section--features'} />
              <NavItem name="Download" href={'/#section--download'} />
              <NavItem name="About Us" href={'/#section--about'} />
              <NavItem name="Contact" href={'/#section--footer'} />
            </NavList>
            <Button
              onClick={() => {
                if (pathname === '/signup') navigate('/signin');
                else if (pathname !== '/signup') navigate('/signup');
                toggleMenu();
              }}
              classname="navbar__cta btn btn--primary"
            >
              {pathname === '/'
                ? 'Login / Register'
                : pathname === '/signup'
                ? 'Login'
                : 'Sign up'}
            </Button>
          </div>
          <MenuIcon onClick={toggleMenu} sx={{ fontSize: '4rem', color: '#4B4B66' }} />
        </div>
      </Container>
    </nav>
  ) : (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__nav">
          <img
            onClick={() => navigate('/dashboard')}
            className="navbar__logo"
            src={bube_logo}
            alt="Bube logo"
          />

          <div
            className="navbar__nav-group navbar__nav-group-secondary hidden"
            ref={navGroupDropdown}
          >
            <CloseIcon onClick={toggleMenu} sx={{ fontSize: '3rem' }} />
            <NavList>
              <NavItem name="Home" href={'/dashboard'} />
              <NavItem name="Jobs" />
              <NavItem name="Download" />
              <DropDownMenu name="Help">
                <ul className="dropdown__menu">
                  <DropDownItem icon={help_center} title="Help Center" />
                  <DropDownItem icon={question_icon} title="Ask Question " />
                </ul>
              </DropDownMenu>
              <DropDownMenu
                name="Account"
                userAvatar={currentUser?.photo ? currentUser?.photo : false}
                icon={
                  currentUser?.avatar ? (
                    false
                  ) : (
                    <IoPersonCircle size={48} color="#9284A4" />
                  )
                }
              >
                <ul className="dropdown__menu">
                  <DropDownItem icon={user_icon} title="Profile" href="me" />
                  <DropDownItem
                    icon={notification_icon}
                    title="Notifications"
                    href="notifications"
                    notifications={3}
                  />
                  <DropDownItem icon={setting_icon} title="Settings" href="settings" />
                  <DropDownItem
                    onClick={async () => {
                      signOut();
                      setUser(null);
                      setSignedIn(false);
                    }}
                    icon={logout_icon}
                    title="Logout"
                  />
                </ul>
              </DropDownMenu>
            </NavList>
          </div>

          <MenuIcon onClick={toggleMenu} sx={{ fontSize: '4rem', color: '#4B4B66' }} />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
