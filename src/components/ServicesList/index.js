import React from 'react';
import Empty from '../Empty';
import ServicesItem from '../ServicesItem';

function ServicesList({ services }) {
  return (
    <div className="services__list">
      {services &&
        (services?.length === 0 ? (
          <Empty text={'There are no services available'} />
        ) : (
          services.map(service => (
            <ServicesItem key={service._id} label={service.name} id={service._id} />
          ))
        ))}
    </div>
  );
}

export default ServicesList;
