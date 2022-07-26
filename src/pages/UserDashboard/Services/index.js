import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// import Button from '../../../components/Button';
import ButtonMakeRequest from '../../../components/Button/ButtonMakeRequest';
import DashboardHeader from '../../../components/DashboardHeader';
import DashboardBody from '../../../components/DashboardBody';

import DashboardSearchBar from '../../../components/DashboardSearchBar';
import ButtonBack from '../../../components/Button/ButtonBack';
// import ServicesItem from '../../../components/ServicesItem';

// import Empty from '../../../components/Empty';
// import LoadingSpinner from '../../../components/LoadingSpinner';

import { ServicesContext } from '../../../contexts/services/serviceContext';
import ServicesList from '../../../components/ServicesList';

function Services() {
  const params = useParams();
  const {
    category,
    services,
    getCategory,
    getServicesFromCategory,
  } = useContext(ServicesContext);

  useEffect(() => {
    if (params?.categoryId) {
      getCategory(params.categoryId);
      getServicesFromCategory(params.categoryId);
    }
  }, [params]);

  // if (!services) return <LoadingSpinner full />;

  return (
    <div className="dashboard">
      <DashboardHeader>
        <div className="dashboard__top">
          <ButtonBack />

          <ButtonMakeRequest />
        </div>

        <div className="dashboard__bottom">
          <div className="dashboard__service">
            <h3>{category?.name}</h3>
            <span>{`${
              services?.length > 0 ? services?.length : 0
            } services available`}</span>
          </div>
          <div className="dashboard__search">
            <DashboardSearchBar />
          </div>
        </div>
      </DashboardHeader>

      <DashboardBody>
        <div className="services__container">
          <ServicesList services={services} />
        </div>
      </DashboardBody>
    </div>
  );
}

export default Services;
