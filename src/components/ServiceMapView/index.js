import React from 'react';
import ServiceProviderCard from '../ServiceProviderCard';

import service_avatar from '../../assets/service_avatar_01.png';
import map from '../../assets/Map.png';

function ServiceMapView() {
  return (
    <div className="services__view">
      <div className="services__view-container">
        <div className="services__view-side">
          <div className="services__sub">
            <h4>Search results (02) </h4>
          </div>
          <div className="services__view-list">
            <ServiceProviderCard
              name="Kola Painting & Company"
              owner="Jaye Olowo"
              avatar={service_avatar}
              type="Carpenter"
              address="2118 Thornridge Cir. Syracuse, Connecticut 35624"
            />
            <ServiceProviderCard
              name="Kola Painting & Company"
              owner="Jaye Olowo"
              avatar={service_avatar}
              type="Carpenter"
              address="2118 Thornridge Cir. Syracuse, Connecticut 35624"
            />
            <ServiceProviderCard
              name="Kola Painting & Company"
              owner="Jaye Olowo"
              avatar={service_avatar}
              type="Carpenter"
              address="2118 Thornridge Cir. Syracuse, Connecticut 35624"
            />
            <ServiceProviderCard
              name="Kola Painting & Company"
              owner="Jaye Olowo"
              avatar={service_avatar}
              type="Carpenter"
              address="2118 Thornridge Cir. Syracuse, Connecticut 35624"
            />
          </div>
        </div>
        <div className="services__view-main">
          <div className="services__view-map">
            <img src={map} alt="map" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceMapView;
