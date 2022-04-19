import React, { createContext, useState } from 'react';

export const ServiceContext = createContext();

const ServiceProvider = ({ children }) => {
  return <ServiceContext.Provider>{children}</ServiceContext.Provider>;
};

export default ServiceProvider;
