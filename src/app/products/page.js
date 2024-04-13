"use client"
import DropDown from "../components/dropdown";
import { useEffect, useState } from "react";

const API = 'https://api.escuelajs.co/api/v1/products'
            


export default function Products(){
    const [ products,setProducts] = useState([]);
    const [ isLoading , setIsLaoding] = useState(false)

    //fetching data

    useEffect(()=>{
        const fetchData = async()=>{
          setIsLaoding(true);
          try {
             const  response =  await fetch(API);
             const data = await response.json();
             setProducts(data)
             console.log(data)
          } catch (error) {
              console.log(error)
          } finally{
              setIsLaoding(false)
          }
        }
        fetchData()
    
      },[])     //use effect = function,array
      

  return(
  
    <div>
        <div className="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

   
      


    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

{ products.map((product)=>(
    <div key={product.id} className="group relative">
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">


    {product.images.map((image)=>(
                 <img src={image} alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
             ))}

    
      
    </div>
    <div className="mt-4 flex justify-between">
      <div>
        <h3 className="text-sm text-gray-700">
          <a href="#">
            <span aria-hidden="true" class="absolute inset-0"></span>
            {product.title}
          </a>
        </h3>
        <p className="mt-1 text-sm text-gray-500">{product.category.name}</p>
      </div>
      <p className="text-sm font-medium text-gray-900">{product.price}</p>
    </div>
  </div>

    ))}
   
      
    



    </div>
  </div>
</div>



      {/* { isLoading?(
        <p>loading...</p>
      ):(
        <ul>
          {products.map((product) => (
        
            <li key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.category.name}</p>
             {product.images.map((image)=>(
                <img src={image} />
             ))}
              
            </li>
          ))}
        </ul>
      )
      } */}
        
    </div>
  )
}