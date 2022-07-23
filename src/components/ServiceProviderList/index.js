import React, { useContext, useEffect, useState } from 'react';
import ServiceProviderCard from '../ServiceProviderCard';

import Button from '../Button';
import { useParams } from 'react-router-dom';
import { ServicesContext } from '../../contexts/services/serviceContext';

function ServiceProviderList({ goToMapView }) {
  const { businesses, getBusinesses } = useContext(ServicesContext);
  const params = useParams();

  const truncate = (str, limit) => {
    return str?.length > limit ? str.slice(0, limit) + '...' : str;
  };

  useEffect(() => {
    getBusinesses(params.serviceId);
  }, [params]);

  return (
    <>
      <div className="services__sub">
        <h4>Results ({businesses ? businesses?.length : 0} )</h4>
        <Button onClick={goToMapView} classname="services__map-view btn">
          Map View
        </Button>
      </div>

      <div className="service__container">
        <div className="services__grid">
          {businesses &&
            businesses.map(business => (
              <ServiceProviderCard
                key={business._id}
                id={business._id}
                image={business?.images[0]}
                name={truncate(business?.name, 24)}
                owner={business?.user?.fullName}
                avatar={business?.user?.photo}
                type={business?.position}
                rating={business?.reviews[0]?.rating}
                address={truncate(business?.location?.address, 45)}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default ServiceProviderList;
