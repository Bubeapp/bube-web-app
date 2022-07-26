import React, { useContext, useEffect, useRef } from 'react';
import * as L from 'leaflet';

import ServiceProviderCard from '../ServiceProviderCard';
import Button from '../Button';
import { ServicesContext } from '../../contexts/services/serviceContext';

function ServiceMapView({ backToListView }) {
  const { businesses } = useContext(ServicesContext);
  const mapRef = useRef();

  const truncate = (str, limit) => {
    return str?.length > limit ? str.slice(0, limit) + '...' : str;
  };

  const moveToPop = () => {
    console.log(businesses[1].location.coordinates);
    // let container = L.DomUtil.get('map');

    // if (container != null) {
    //   container._leaflet_id = null;
    // }

    // const map = L.map('map').setView([-72.9278835, 41.308274], 13.5);
    // if (!map) return;

    // map.setView(businesses[2].location.coordinates, 13.5, {
    //   animate: true,
    //   pan: {
    //     duration: 1,
    //   },
    // });
  };

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

      businesses.map(business => {
        return L.marker(business.location.coordinates)
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
          .setPopupContent(truncate(business?.name, 24))
          .openPopup();
      });
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
            <h4>Results ({businesses ? businesses?.length : 0} )</h4>

            <Button onClick={backToListView} classname="services__map-view btn">
              Back to List
            </Button>
          </div>
          <div className="services__view-list">
            {businesses &&
              businesses.map(business => (
                <ServiceProviderCard
                  key={business._id}
                  id={business._id}
                  // image={business?.images[0]}
                  name={truncate(business?.name, 24)}
                  owner={business?.user?.fullName}
                  avatar={business?.user?.photo}
                  type={business?.position}
                  rating={business?.reviews[0]?.rating}
                  address={truncate(business?.location?.address, 45)}
                  onClick={moveToPop}
                />
              ))}
            {/* <ServiceProviderCard
              name="Kola Painting & Company"
              owner="Jaye Olowo"
              avatar={service_avatar}
              type="Carpenter"
              address="2118 Thornridge Cir. Syracuse, Connecticut 35624"
            />
             */}
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
