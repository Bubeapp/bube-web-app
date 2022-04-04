import React from 'react';

function FeaturesCard({ icon, title, description, bgColor }) {
  return (
    <div className={`features__card ${bgColor ? 'features__card--bg' : ''}`}>
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default FeaturesCard;
