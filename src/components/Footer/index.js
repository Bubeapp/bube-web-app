import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Container from '../../layouts/Container';

import bube_logo from '../../assets/bube_logo.svg';
import facebook_logo from '../../assets/facebook_logo.svg';
import twitter_logo from '../../assets/twitter_icon.svg';
import instagram_logo from '../../assets/instagram_icon.svg';
import whatsapp_logo from '../../assets/whatsapp_icon.svg';

function Footer() {
  const [isSignedIn, setIsSignedIn] = useState();

  return isSignedIn ? (
    <footer id="footer">
      <Container>
        <div className="footer">
          <p>&copy; Bube 2022</p>
          <ul className="footer__list">
            <li className="footer__item">
              <Link to="/" className="footer__link">
                Contact
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/" className="footer__link">
                Privacy Policy
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/" className="footer__link">
                Terms of Service
              </Link>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item">
              <Link to="/" className="footer__link">
                <img src={facebook_logo} alt="Facebook logo" />
              </Link>
            </li>

            <li className="footer__item">
              <Link to="/" className="footer__link">
                <img src={twitter_logo} alt="Twitter logo" />
              </Link>
            </li>

            <li className="footer__item">
              <Link to="/" className="footer__link">
                <img src={instagram_logo} alt="Instagram logo" />
              </Link>
            </li>

            <li className="footer__item">
              <Link to="/" className="footer__link">
                <img src={whatsapp_logo} alt="Whatsapp logo" />
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  ) : (
    <footer id="footer">
      <Container otherClassNames="flex footer__section">
        <div className="col-2-of-5">
          <div className="footer__content">
            <img src={bube_logo} alt="Bube logo" />
            <p>
              Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit.
            </p>
            <p>© Bube 2022</p>
          </div>
        </div>
        <div className="col-1-of-5">
          <h3>About us</h3>

          <ul className="footer__list footer__main">
            <li className="footer__item">
              <Link to="/" className="footer__link">
                Contact us
              </Link>
            </li>

            <li className="footer__item">
              <Link to="/" className="footer__link">
                Privacy policy
              </Link>
            </li>

            <li className="footer__item">
              <Link to="/" className="footer__link">
                Terms of service
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-1-of-5">
          <h3>Process</h3>

          <ul className="footer__list footer__main">
            <li className="footer__item">
              <Link to="/" className="footer__link">
                How it works
              </Link>
            </li>

            <li className="footer__item ">
              <Link to="/" className="footer__link">
                FAQs
              </Link>
            </li>

            <li className="footer__item ">
              <Link to="/" className="footer__link">
                Why us?
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-1-of-5">
          <ul className="footer__list">
            <li className="footer__item">
              <Link to="/" className="footer__link">
                <img src={facebook_logo} alt="Facebook logo" />
              </Link>
            </li>

            <li className="footer__item">
              <Link to="/" className="footer__link">
                <img src={twitter_logo} alt="Twitter logo" />
              </Link>
            </li>

            <li className="footer__item">
              <Link to="/" className="footer__link">
                <img src={instagram_logo} alt="Instagram logo" />
              </Link>
            </li>

            <li className="footer__item">
              <Link to="/" className="footer__link">
                <img src={whatsapp_logo} alt="Whatsapp logo" />
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
