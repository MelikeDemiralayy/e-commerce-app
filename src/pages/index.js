import Carousel from "@/Components/Navbar/Carousel";
import React from "react";
const Home = () => {
  return (
    <div>
      <div>
        <Carousel />
      </div>
      <div>
        <button className="btn glass" onClick={() => setIsModalOpen(true)}>
          Add Product
        </button>
      </div>
    </div>
  );
};

export default Home;
