"use client";
import { useRouter } from 'next/navigation';
import { useData } from "../data/categoriesDataProvider";
import CategoryDataProvider from "../data/categoriesDataProvider";
import './dropdown.css'; // Custom CSS for styling

function DropDown() {
  const router = useRouter(); // Use Next.js router to navigate
  const data = useData(); // Fetch data

  if (!data) {
    console.error("Data is undefined");
    return <p>Loading...</p>; // Handle undefined data
  }

  const specifiedCategories = ["Clothes", "Shoes", "Miscellaneous", "Furniture", "Electronics"];

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    if (selectedCategory) {
      router.push(`/categories/${selectedCategory}`); // Navigate to the selected category
    }
  };

  return (
    <select
      className="styled-dropdown"
      defaultValue=""
      onChange={handleCategoryChange}
    >
      <option className='option' value="" disabled>
        Products
      </option>
 
      {data
        .filter((category) => specifiedCategories.includes(category.name))
        .map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
    </select>
  );
}

export default function DropDownContainer() {
  return (
    <CategoryDataProvider>
      <DropDown />
    </CategoryDataProvider>
  );
}
