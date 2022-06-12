import React from 'react';
import { Link } from 'react-router-dom';

function ServicesCard({ cardTitle, cardImage, id }) {
  return (
    <Link to={`/services/${id}`}>
      <div className="services__card">
        <img src={cardImage} alt={cardTitle} />
        <span>{cardTitle}</span>
      </div>
    </Link>
  );
}

export default ServicesCard;
