import React, { useEffect, useState } from "react";
import ProductCards from "@/Components/Navbar/Cards";
import { fetchProducts } from "../api/hello";
import Skeleton from "@/Components/Navbar/Cards/Skeleton";
import { useSelector } from "react-redux";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = useSelector((state) => state.favorites.query);
  const data = useSelector((state) => state.favorites.test);
  const [filteredProducts, setFilteredProducts] = useState([]);

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
    const fetchData = async () => {
      await getProducts();
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filteredProducts);
    };

    fetchData();
  }, [query]); 
  console.log(data);

  return (
    <div className="container mx-auto px-4">
      {data || (
        <div className="grid grid-cols-4 gap-4">
          {loading
            ? Array.from({ length: 20 }).map((_, index) => (
                <Skeleton key={index} />
              ))
            : filteredProducts.length > 0
            ? filteredProducts.map((product) => (
                <ProductCards key={product.id} product={product} />
              ))
            : products.map((product) => (
                <ProductCards key={product.id} product={product} />
              ))}
        </div>
      )}
    </div>
  );
};

export default Products;
