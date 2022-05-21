import React from 'react';
import { Link } from 'react-router-dom';

import apetureIcon from '../../assets/ion_aperture-outline.svg';

function ServicesItem({ label }) {
  return (
    <Link to="/services/listing">
      <div className="services__listitem">
        <img src={apetureIcon} alt="apeture icon" />
        <span>{label}</span>
      </div>
    </Link>
  );
}

export default ServicesItem;
