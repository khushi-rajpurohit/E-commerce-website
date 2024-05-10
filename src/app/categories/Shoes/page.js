

"use client";
import { useData } from '@/app/data/dataProvider';
import DataProvider from '@/app/data/dataProvider';

function ProductCardElectronic() {
  const data = useData();
 console.log("welcome to products page")
  // console.log("Data received:", data); // Check if data is coming through

  if (!data || !Array.isArray(data)) {
    console.error("Data is undefined or not an array");
    return <p>Loading...</p>; // Handle undefined or incorrect data
  }

//   Filter the data to get only products with category name "Clothes"
  const clothesProducts = data.filter(
    (product) => product.category && product.category.name === 'Shoes'
  );

  if (clothesProducts.length === 0) {
    return <p>loading</p>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {clothesProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Front of product`}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                ))}
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
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
  );
}


export default function Productfltr(){
    return(
      <>
       <DataProvider>
       
        <ProductCardElectronic />
     
        
      </DataProvider>
      </>
    )
  }