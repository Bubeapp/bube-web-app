import React from 'react';
import { Link } from 'react-router-dom';

function RequestCard({ image, summary, title, amount, datetime }) {
  return (
    <div className="request__card">
      <div className="request__img">
        <img src={image} alt="Request avatar" />
      </div>
      <div className="request__details">
        <h5>{title}</h5>
        <p>{summary}</p>
        <Link to="/">Read more</Link>
        <div className="request__metadata">
          <span className="request__datetime">{datetime}</span>
          <span className="request__budget">
            Budget: <span>{`$${amount}`}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default RequestCard;
