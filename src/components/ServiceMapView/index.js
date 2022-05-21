import React, { useEffect, useRef } from 'react';
import * as L from 'leaflet';

import ServiceProviderCard from '../ServiceProviderCard';

import service_avatar from '../../assets/service_avatar_01.png';
import Button from '../Button';

function ServiceMapView({ backToListView }) {
  const mapRef = useRef();

  useEffect(() => {
    let container = L.DomUtil.get('map');

    const loadMap = position => {
      console.log(position);
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      const map = L.map('map').setView([latitude, longitude], 13.5);

      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([position.coords.latitude, position.coords.longitude])
        .addTo(map)
        .bindPopup(
          L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: `running-popup`,
          })
        )
        .setPopupContent('Kola Painting & Company')
        .openPopup();
    };

    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(loadMap, function () {
        alert('Could not get your position');
      });

    return () => {
      if (container != null) {
        container._leaflet_id = null;
      }
    };
  }, []);

  return (
    <div className="services__view">
      <div className="services__view-container">
        <div className="services__view-side">
          <div className="services__sub">
            <h4>Search results (02) </h4>

            <Button onClick={backToListView} classname="services__map-view btn">
              Back to List
            </Button>
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
          <div ref={mapRef} className="services__view-map" id="map"></div>
        </div>
      </div>
    </div>
  );
}

export default ServiceMapView;
