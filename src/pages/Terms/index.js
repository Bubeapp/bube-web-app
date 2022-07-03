import React from 'react';
import { Link } from 'react-router-dom';

function Terms() {
  return (
    <div className="terms">
      <div className="container">
        <h2>Legal</h2>
        <p>
          To find the document applicable to you under the agreement between you and
          Bube check the section below for the location you are using Bube services in.
          In case of translations of the same document the version listed first shall
          prevail. Please see the documents in the Global section in case no relevant
          documents are available for the location you are using Bube services in.
        </p>

        <ul className="terms__list">
          <h4>Global</h4>

          <li>
            <Link to="/terms-of-use/general">
              General Terms and Conditions for Bube Business
            </Link>
          </li>
          <li>
            <Link to="/terms-of-use/drivers">General Terms for Drivers</Link>
          </li>
          <li>
            <Link to="/terms-of-use/passengers">General Terms for Passengers</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Terms;
