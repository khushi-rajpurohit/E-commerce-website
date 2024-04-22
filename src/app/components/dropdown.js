
"use client";
import { useData } from "../data/categoriesDataProvider";
import CategoryDataProvider from "../data/categoriesDataProvider";


import './dropdown.css'; // Import a separate CSS file for styling

function DD() {
    const data = useData();
  
    console.log("Data received:", data); // Check if data is coming through
  
    if (!data) {
      console.error("Data is undefined");
      return <p>Loading...</p>; // Handle undefined data
    }
  

  return (
    <select className="styled-dropdown" defaultValue="">
    
    <option value="products"  >
      Products
    </option>

    {/* Map through the data to create dropdown options */}
    {data.slice(0, 5).map((category) => (
      <option key={category.id} value={category.name}>
        {category.name}
      </option>
    ))}
  </select>
  );
}

export default function DropDown(){
    return(
        <>
        <CategoryDataProvider>
            <DD />
        </CategoryDataProvider>
        </>
    )
}



///////////////////////////
// import React, { useEffect, useState } from 'react';
// import { GetData } from './categories';
// import './dropdown.css'; // Import a separate CSS file for styling

// export default function Dropdown() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const data = await GetData();
//       setData(data);
//     }

//     fetchData();
//   }, []); // Run the effect only once

//   return (
//     <select className="styled-dropdown">
//       {data.slice(0, 5).map((category) => (
//         <option key={category.id} value={category.name}>
//           {category.name}
//         </option>
//       ))}
//     </select>
//   );
// }


// //////////
// import { useState } from "react";
// import "./dropdown.css"

// const ddArr = ["Clothes", "Shoes", "Other","Furniture","Electronics"];

// export default function DropDown() {
//     let [isOpen, setIsOpen] = useState(false)

//     const toggle = function () {
//         setIsOpen(!isOpen)
//     }


//     return (

//         <div className="dropdown">
//             <button className="toggleButton" onClick={toggle}> Products</button>
           
//             {isOpen && (
//                  <ul className="dropdownMenu">
//                 {
//                     ddArr.map(ddItems =>

//                         <li>{ddItems}</li>

//                     )
//                 }
//                 </ul>
//             )}
         

//         </div >
//     )
// }