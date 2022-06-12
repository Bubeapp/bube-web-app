import axios from '../../util/axios';
import React, { createContext, useState } from 'react';

export const ServicesContext = createContext({
  categories: [],
  search: {
    query: '',
    results: [],
  },
  getCategories: () => {},
  searchServices: () => {},
});

const ServicesProvider = ({ children }) => {
  const [categories, setCategories] = useState(null);

  async function getCategories() {
    try {
      const {
        data: { data: results },
      } = await axios.get('/categories');
      console.log(results);
      setCategories(results?.categories);
    } catch (err) {
      console.log(err);
    }
  }

  async function searchServices(query) {
    try {
      const res = await axios.get(`/services?name=${query}`);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <ServicesContext.Provider
      value={{
        categories,
        searchServices,
        getCategories,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
