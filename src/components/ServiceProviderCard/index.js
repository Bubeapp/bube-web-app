import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';

import CustomRatings from '../Ratings';

function ServiceProviderCard({ image, name, owner, avatar, type, address }) {
  return (
    <div className="service__provider">
      {image && (
        <div className="service__img">
          <img src={image} alt={name} />
        </div>
      )}

      <div className="service__details">
        <div className="service__flex margin-btm-8">
          <h2>{name}</h2>
          <div className="service__info">
            <img src={avatar} alt="" />
            <div className="service__flex flex-dir-cl">
              <p className="service__name">{owner}</p>
              <p className="service__type">{type}</p>
            </div>
          </div>
        </div>

        <div className="service__flex align-center">
          <CustomRatings name="read-only" value={3} />
          <Link className="service__reviews" to="/">
            Read Reviews
          </Link>
        </div>

        <p className="service__address">{address}</p>

        <Button classname="btn btn--primary btn--full">Connect</Button>
      </div>
    </div>
  );
}

export default ServiceProviderCard;
