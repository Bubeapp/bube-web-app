import React from 'react';

// import Button from '../../../components/Button';
import ButtonMakeRequest from '../../../components/Button/ButtonMakeRequest';
import DashboardHeader from '../../../components/DashboardHeader';
import DashboardBody from '../../../components/DashboardBody';

import DashboardSearchBar from '../../../components/DashboardSearchBar';
import ButtonBack from '../../../components/Button/ButtonBack';
import { useLocation } from 'react-router-dom';
import ServicesItem from '../../../components/ServicesItem';

function Services() {
  const { pathname } = useLocation();
  const category = pathname.replace(/%20/g, ' ').split('/').slice(-1).toString();

  return (
    <div>
      <DashboardHeader>
        <div className="dashboard__top">
          <ButtonBack />

          <ButtonMakeRequest />
        </div>

        <div className="dashboard__bottom">
          <div className="dashboard__service">
            <h3>{category}</h3>
            <span>234 services available in this catergory.</span>
          </div>
          <div className="dashboard__search">
            <DashboardSearchBar />
          </div>
        </div>
      </DashboardHeader>

      <DashboardBody>
        <div className="services__container">
          <div className="services__list">
            <ServicesItem label="Contractor/Handyman" />
            <ServicesItem label="Electrician" />
            <ServicesItem label="Construction & Renovation" />
            <ServicesItem label="Interior Designer" />
            <ServicesItem label="Painter" />
            <ServicesItem label="Contractor/Handyman" />
            <ServicesItem label="Electrician" />
            <ServicesItem label="Construction & Renovation" />
            <ServicesItem label="Interior Designer" />
            <ServicesItem label="Painter" />
          </div>
        </div>
      </DashboardBody>
    </div>
  );
}

export default Services;
