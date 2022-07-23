import axios from '../../util/axios';
import React, { createContext, useContext, useState } from 'react';
import { AuthContext } from '../auth/authContext';
import { useNavigate } from 'react-router-dom';
// import * as L from 'leaflet';

export const ServicesContext = createContext();

const ServicesProvider = ({ children }) => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState(null);
  const [searchRes, setSearchRes] = useState(null);
  const [businesses, setBusinesses] = useState(null);
  const [services, setServices] = useState(null);
  const [category, setCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { token } = useContext(AuthContext);

  async function getCategory(categoryId) {
    try {
      const {
        data: {
          data: { category: result },
        },
      } = await axios.get(`/categories/${categoryId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCategory(result);
    } catch (err) {
      console.log(err);
    }
  }

  async function getCategories() {
    try {
      const {
        data: { data: results },
      } = await axios.get('/categories', {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(results);
      setCategories(results?.categories);
    } catch (err) {
      console.log(err);
    }
  }

  async function searchServices(query) {
    try {
      setIsLoading(true);
      const {
        data: {
          data: { services },
        },
      } = await axios.get(`/services?name=${query}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setServices(services);
      navigate('/services', { replace: true });
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  }

  async function getServicesFromCategory(categoryId) {
    try {
      setIsLoading(true);
      const {
        data: {
          data: { services: results },
        },
      } = await axios.get(`/categories/${categoryId}/services`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setServices(results);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.error(err);
    }
  }

  const getPosition = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(
        position => resolve(position),
        err => reject(err)
      );
    });
  };

  const getBusinesses = async function (serviceId) {
    const {
      coords: { latitude: lat, longitude: lng },
    } = await getPosition();

    const {
      data: {
        data: { businesses: results },
      },
    } = await axios.get(
      `/services/${serviceId}/businesses?latitude=${lat}&longitude=${lng}`
    );
    console.log(results);
    setBusinesses(results);
  };

  return (
    <ServicesContext.Provider
      value={{
        isLoading,
        categories,
        services,
        businesses,
        searchRes,
        searchServices,
        getCategory,
        getCategories,
        getServicesFromCategory,
        getBusinesses,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
