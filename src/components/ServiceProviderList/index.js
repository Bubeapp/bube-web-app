import React, { useEffect, useState } from 'react';
import ServiceProviderCard from '../ServiceProviderCard';

import Button from '../Button';
import axios from '../../util/axios';
import { useParams } from 'react-router-dom';

function ServiceProviderList({ goToMapView }) {
  const [businesses, setBusinesses] = useState(null);

  const params = useParams();
  console.log(params);

  const truncate = (str, limit) => {
    return str?.length > limit ? str.slice(0, limit) + '...' : str;
  };

  useEffect(() => {
    const getPosition = () => {
      return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(
          position => resolve(position),
          err => reject(err)
        );
      });
    };

    const getBusiness = async function () {
      const {
        coords: { latitude: lat, longitude: lng },
      } = await getPosition();

      const {
        data: {
          data: { businesses: results },
        },
      } = await axios.get(
        `/services/${params.serviceId}/businesses?latitude=${lat}&longitude=${lng}`
      );
      console.log(results);
      setBusinesses(results);
    };

    getBusiness();
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
