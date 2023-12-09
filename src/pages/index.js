import Carousel from "@/Components/Navbar/Carousel";
import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div>
        <Carousel />
      </div>
      <div>
        <Link href="/Products/add-products">
          <div className=" flex justify-center items-center ">
            {" "}
            <button
              type="button"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              Add Product
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Home;
