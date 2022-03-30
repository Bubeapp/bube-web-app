import React from 'react';
import { Link } from 'react-router-dom';

import facebook_logo from '../../assets/facebook_logo.svg';
import twitter_logo from '../../assets/twitter_icon.svg';
import instagram_logo from '../../assets/instagram_icon.svg';
import whatsapp_logo from '../../assets/whatsapp_icon.svg';

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
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
      </div>
    </footer>
  );
}

export default Footer;
