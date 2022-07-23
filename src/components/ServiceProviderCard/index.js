import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../Button';
import CustomRatings from '../Ratings';

function ServiceProviderCard({
  image,
  name,
  owner,
  avatar,
  type,
  address,
  rating,
  id,
  onClick,
}) {
  const navigate = useNavigate();

  return (
    <div className="service__provider" onClick={onClick}>
      {image && (
        <div className="service__img">
          <img src={image} alt={name} />
        </div>
      )}

      <div className="service__details">
        <div className="service__flex margin-btm-8 space-btw service__name">
          <h2>{name}</h2>
          <div className="service__info">
            {avatar && <img src={avatar} alt="" />}
            <div className="service__flex flex-dir-cl">
              <p className="service__name">{owner}</p>
              <p className="service__type">{type}</p>
            </div>
          </div>
        </div>

        <div className="service__flex align-center ">
          <CustomRatings name="read-only" value={rating} />
          <Link className="service__reviews" to="/">
            Read Reviews
          </Link>
        </div>

        <p className="service__address">{address}</p>

        <Button
          classname="btn btn--primary btn--full"
          onClick={() => navigate(`/businesses/${id}`)}
        >
          Connect
        </Button>
      </div>
    </div>
  );
}

export default ServiceProviderCard;
