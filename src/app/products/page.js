"use client"

import DataProvider from "../data/dataProvider";
import ProductCard from "../components/productCard";

export default function Products(){
  return(
    <>
     <DataProvider>
     
      <ProductCard />
   
      
    </DataProvider>
    </>
  )
}