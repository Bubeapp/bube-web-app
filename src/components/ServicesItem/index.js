import React from 'react';
import { Link } from 'react-router-dom';

import apetureIcon from '../../assets/ion_aperture-outline.svg';

function ServicesItem({ label, ...props }) {
  return (
    <Link to={`/services/${props.id}/businesses`}>
      <div className="services__listitem">
        <img src={apetureIcon} alt="apeture icon" />
        <span>{label}</span>
      </div>
    </Link>
  );
}

export default ServicesItem;
