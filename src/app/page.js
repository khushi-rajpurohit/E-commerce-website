
//home page  "/"

import './homePage.css'
import Products from './products/page';
import ProductCategories from './components/categories';

import DataProvider from './data/dataProvider';
import CategoryPage from './categories/page';


export default function Home() {
  return (

    <>
     <ProductCategories />
     <Products />
     
    
    </>
  );
}
