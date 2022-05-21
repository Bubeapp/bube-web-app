import axios from '../../util/axios';
import React, { createContext, useEffect, useState } from 'react';

export const ServicesContext = createContext({
  categories: null,
  getCategories: () => {},
});

const ServicesProvider = ({ children }) => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
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

    getCategories();
  }, []);

  return (
    <ServicesContext.Provider value={{ categories, setCategories }}>
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
