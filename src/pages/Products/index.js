import React, { useEffect, useState } from 'react';
import ProductCards from '@/Components/Navbar/Cards';
import { fetchProducts } from '../api/hello';

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const allProducts = await fetchProducts();
      setProducts(allProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCards key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;

