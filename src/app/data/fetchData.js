
import { useState, useEffect } from 'react';


export function useFetchData(API) {
  const [ products,setProducts] = useState([]);



  useEffect(()=>{
    const fetchData = async()=>{
      
      try {
         const  response =  await fetch(API);
         const data = await response.json();
         setProducts(data)
        //  console.log(data)
      } catch (error) {
          console.log(error)
      }
    }
    fetchData()

  },[])  

  return { products };
  
  console.log(products)
  
}
