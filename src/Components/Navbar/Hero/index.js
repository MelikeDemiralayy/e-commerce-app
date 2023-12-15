import React from "react";
import Link from "next/link";
const Hero = () => {
  return (
    <div>
      <div className=" grid gap-4">
        <div
          className="relative bg-cover bg-center h-screen flex items-cente  "
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="container mx-auto text-center relative z-10 text-white">
            {/* <h1 className="text-4xl md:text-6xl font-bold mb-4">Hello There</h1> */}
            <p className="text-lg md:text-xl mb-8 mt-10">
              Meet Fashion Trends! Exclusive Products, Unforgettable Shopping.
            </p>
            <Link
              href="/Products"
              className="bg-white text-black px-6 py-3 rounded-full font-semibold transition duration-300 hover:bg-grey hover:text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
