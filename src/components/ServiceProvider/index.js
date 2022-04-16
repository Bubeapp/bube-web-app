import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';

import service_thumbnail from '../../assets/service_thumbnail_01.png';
import service_avatar from '../../assets/service_avatar_01.png';

function ServiceProvider() {
  return (
    <div className="service__provider">
      <div className="service__img">
        <img src={service_thumbnail} alt="Kola Painting & Company" />
      </div>

      <div className="service__details">
        <div className="service__flex">
          <h2>Kola Painting & Company</h2>
          <div className="service__info">
            <img src={service_avatar} alt="" />
            <div className="service__flex">
              <span>Jaye Olowo</span>
              <span>Carpenter</span>
            </div>
          </div>
        </div>

        <div className="service__flex">
          <Link to="/">Read Reviews</Link>
        </div>

        <p className="service__address">
          2118 Thornridge Cir. Syracuse, Connecticut 35624
        </p>

        <Button classname="btn btn--primary btn--full">Connect</Button>
      </div>
    </div>
  );
}

export default ServiceProvider;
