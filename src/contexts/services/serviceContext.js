import axios from '../../util/axios';
import React, { createContext, useEffect, useState } from 'react';

export const ServicesContext = createContext({
  categories: null,
  getCategories: () => {},
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

  return (
    <ServicesContext.Provider value={{ categories, setCategories, getCategories }}>
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
