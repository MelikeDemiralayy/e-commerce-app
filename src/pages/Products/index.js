import React, { useEffect, useState } from 'react';
import ProductCards from '@/Components/Navbar/Cards';
import { fetchProducts } from '../api/hello';

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const allProducts = await fetchProducts();
    setProducts(allProducts);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-4 gap-4">
        {products.map((item) => (
          <ProductCards key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;

