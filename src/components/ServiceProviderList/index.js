import React from 'react';
import ServiceProviderCard from '../ServiceProviderCard';

import service_thumbnail from '../../assets/service_thumbnail_01.png';
import service_avatar from '../../assets/service_avatar_01.png';
import Button from '../Button';

function ServiceProviderList({ goToMapView }) {
  return (
    <>
      <div className="services__sub">
        <h4>Search results (02) </h4>
        <Button onClick={goToMapView} classname="services__map-view btn">
          Map View
        </Button>
      </div>

      <div className="service__container">
        <div className="services__grid">
          <ServiceProviderCard
            image={service_thumbnail}
            name="Kola Painting & Company"
            owner="Jaye Olowo"
            avatar={service_avatar}
            type="Carpenter"
            address="2118 Thornridge Cir. Syracuse, Connecticut 35624"
          />
          <ServiceProviderCard
            image={service_thumbnail}
            name="Kola Painting & Company"
            owner="Jaye Olowo"
            avatar={service_avatar}
            type="Carpenter"
            address="2118 Thornridge Cir. Syracuse, Connecticut 35624"
          />
          <ServiceProviderCard
            image={service_thumbnail}
            name="Kola Painting & Company"
            owner="Jaye Olowo"
            avatar={service_avatar}
            type="Carpenter"
            address="2118 Thornridge Cir. Syracuse, Connecticut 35624"
          />
          <ServiceProviderCard
            image={service_thumbnail}
            name="Kola Painting & Company"
            owner="Jaye Olowo"
            avatar={service_avatar}
            type="Carpenter"
            address="2118 Thornridge Cir. Syracuse, Connecticut 35624"
          />
        </div>
      </div>
    </>
  );
}

export default ServiceProviderList;
