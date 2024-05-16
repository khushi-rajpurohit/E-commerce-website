

"use client";
import { useData } from "../data/categoriesDataProvider";

import CategoryDataProvider from "../data/categoriesDataProvider";
import Link from "next/link";
import './category.css'

function Pc() {
    const data = useData();
  
    // console.log("Data received:", data); // Check if data is coming through
  
    if (!data) {
      console.error("Data is undefined");
      return <p>Loading...</p>; // Handle undefined data
    }
    const specifiedCategories = ["Clothes", "Shoes", "Miscellaneous", "Furniture", "Electronics"];
  
    return(
      
      <main className='category-div'>
        {
    data
      .filter((category) => specifiedCategories.includes(category.name))
      .map((category) => (
        <div key={category.id}>
          <img src={category.image} className="category-image" alt={category.name} />
          <Link href={`/categories?category=${category.name}`}>{category.name}</Link>
        </div>
      ))
  }

     </main>
            )
  }


  export default function ProductCategories(){
    return (
      <>
      <CategoryDataProvider>
        
        < Pc />
        
      </CategoryDataProvider>
      </>
    )
  }



