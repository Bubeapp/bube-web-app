import React from 'react';
import { Link } from 'react-router-dom';

function ServicesCard({ cardTitle, cardImage }) {
  return (
    <Link to={`/services/${cardTitle}`}>
      <div className="services__card">
        <img src={cardImage} alt={cardTitle} />
        <span>{cardTitle}</span>
      </div>
    </Link>
  );
}

export default ServicesCard;
