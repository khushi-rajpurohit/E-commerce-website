"use client";
import { useRouter } from 'next/navigation'; // Use the Next.js navigation API
import { useData } from '../data/dataProvider'; // Assuming dataProvider exports data

export default function Categoryproduct() {
  const router = useRouter(); // Get router instance
  const slug = router?.query?.slug; // Safely access 'slug' from the current route
  const data = useData(); // Get the data

  if (!data || !Array.isArray(data)) {
    console.error("Data is undefined or not an array");
    return <p>Loading...</p>; // Handle undefined or incorrect data
  }
  console.log("dekho dekho",data)

  // If there's no 'slug', display a default message
  

  // Convert the slug to lowercase for comparison
  const categoryName = slug;
  console.log("slug",slug)

  // Filter products by category name based on the URL slug
  const filteredProducts = data.filter(
    (product) => product.category && product.category.name === categoryName
  );

  if (filteredProducts.length === 0) {
    return <p>No products found in '{categoryName}' category.</p>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {filteredProducts.map((product) => (
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
