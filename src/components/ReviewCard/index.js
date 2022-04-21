import React from 'react';
import CustomRatings from '../Ratings';

function ReviewCard({ name, avatar, rating, review }) {
  return (
    <div className="service__review-card">
      <div className="service__flex">
        <img src={avatar} alt={`${name} "avatar"`} />
        <div className="service__flex flex-dir-cl">
          <p className="service__name">{name}</p>
          <CustomRatings name="read-only" value={rating} />
        </div>
      </div>

      <p className="service__review-text">{review}</p>
    </div>
  );
}

export default ReviewCard;
