import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// import Button from '../../../components/Button';
import ButtonMakeRequest from '../../../components/Button/ButtonMakeRequest';
import DashboardHeader from '../../../components/DashboardHeader';
import DashboardBody from '../../../components/DashboardBody';

import DashboardSearchBar from '../../../components/DashboardSearchBar';
import ButtonBack from '../../../components/Button/ButtonBack';
import ServicesItem from '../../../components/ServicesItem';

import { ServicesContext } from '../../../contexts/services/serviceContext';
import LoadingSpinner from '../../../components/LoadingSpinner';

import axios from '../../../util/axios';

function Services() {
  const params = useParams();
  console.log(params);

  const [services, setServices] = useState(null);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    async function getCategory() {
      try {
        const {
          data: {
            data: { category: result },
          },
        } = await axios.get(`/categories/${params.categoryId}`);
        setCategory(result);
      } catch (err) {
        console.log(err);
      }
    }

    getCategory();

    async function getServicesFromCategory(categoryId) {
      try {
        const {
          data: {
            data: { services: results },
          },
        } = await axios.get(`/categories/${categoryId}/services`);
        setServices(results);
      } catch (err) {
        console.error(err);
      }
    }

    getServicesFromCategory(params.categoryId);
  }, [params]);

  if (!services) return <LoadingSpinner full />;

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
            <span>
              {`${services && services.length > 0 ? services.length : 0}`} services
              available in this catergory.
            </span>
          </div>
          <div className="dashboard__search">
            <DashboardSearchBar />
          </div>
        </div>
      </DashboardHeader>

      <DashboardBody>
        <div className="services__container">
          <div className="services__list">
            {services ? (
              services.map(service => (
                <ServicesItem key={service._id} label={service.name} id={service._id} />
              ))
            ) : (
              <LoadingSpinner />
            )}
          </div>
        </div>
      </DashboardBody>
    </div>
  );
}

export default Services;
