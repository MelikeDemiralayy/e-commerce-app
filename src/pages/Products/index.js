import React, { useEffect, useState } from "react";
import ProductCards from "@/Components/Navbar/Cards";
import { fetchProducts } from "../api/hello";
import Skeleton from "@/Components/Navbar/Cards/Skeleton";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      setLoading(true);
      const allProducts = await fetchProducts();
      setProducts(allProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-4 gap-4">
        {loading
          ? Array.from({ length: 20 }).map((_, index) => (
              <Skeleton key={index} />
            ))
          : products.map((product) => (
              <ProductCards key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default Products;
