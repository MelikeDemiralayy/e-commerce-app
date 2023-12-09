import React, { useEffect, useState } from 'react';
import { fetchLimitedProducts } from '@/pages/api/hello';
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";
const Carousel = () => {
  const [products, setProducts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchProductsData = async () => {
      const data = await fetchLimitedProducts();
      setProducts(data);
    };

    fetchProductsData();
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : products.length - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < products.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div
      id="animation-carousel"
      className="relative w-full"
      data-carousel="static"
    >
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`duration-200 max-w-lg ease-linear ${
              index === activeIndex ? "" : "hidden"
            }`}
            data-carousel-item={index === activeIndex ? "active" : ""}
          >
            <img
              src={product.image}
              className=" object-fill absolute block w-48 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Carousel Item ${index + 1}`}
            />
          </div>
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
        data-carousel-prev
      >
        <IoChevronBackCircleOutline />
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
        data-carousel-next
      >
        <IoChevronForwardCircleOutline />
      </button>
    </div>
  );
};
export default Carousel;




