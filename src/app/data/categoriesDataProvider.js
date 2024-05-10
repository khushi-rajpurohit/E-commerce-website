"use client"
import React, { createContext } from 'react';
import { useFetchData } from './fetchData'; // The custom hook

const DataContext = createContext();

export default function CategoryDataProvider({ children }) {
  const { products } = useFetchData("https://api.escuelajs.co/api/v1/categories");
//   console.log("here is data hh",products)
 

 

  return <DataContext.Provider value={products}>{children}</DataContext.Provider>;
}

export function useData() {
  return React.useContext(DataContext);
  
}