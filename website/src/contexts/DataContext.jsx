// src/contexts/DataContext.js
import React, { createContext, useContext, useState } from 'react';
import { data as initialData } from '../data/data';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(initialData);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);