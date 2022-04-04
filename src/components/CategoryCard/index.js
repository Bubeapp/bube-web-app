import React from 'react';

function CategoryCard({ image, title, numOfAvailable }) {
  return (
    <div className="category-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <span>{numOfAvailable} Available</span>
    </div>
  );
}

export default CategoryCard;
