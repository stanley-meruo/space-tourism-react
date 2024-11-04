import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  return (
    // Home page
    <section id="home" className="w-full px-2">
      {/* Navbar components */}
      <Navbar />

      {/* Homepage content */}
      <div className="flex flex-col text-center justify-center items-center md:text-left md:items-center md:flex-row md:gap-12 md:px-44 md:pt-24">
        {/* Left Div */}
        <div className="w-full px-6 my-10 md-px-0 md:pb-24 md:m-0 ss:my-32">
          <h3 className="text-[18px] ss:text-[26px] tracking-tight font-BarlowCondensed text-babyBlue">
            SO, YOU WANT TO TRAVEL TO
          </h3>
          <h1 className="text-[80px] font-Bellefair text-white ss:text-[140px]">
            SPACE
          </h1>
          <p className="md:w-[470px] text-base ss:leading-[1.9rem] md:leading-0 ss:text-[17px] md:text-[16px] font-Barlow md:font-BarlowCondensed tracking-[0.1rem] text-babyBlue">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space andnot hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you this world
            experience!
          </p>
        </div>

        {/* Right Div */}
        <div className=" flex flex-1 flex-row items-center cursor-pointer justify-end mb-16 mt-8 ss:mb-48 md:mb-0">
          <Link to="/destination">
            <div className="bg-white rounded-full h-[200px] w-[200px] md:h-[250px] md:w-[250px] flex items-center justify-center hover:bg-opacity-50 hover:scale-95 transform transition-all duration-500">
              <h3 className="font-Bellefair text-midnightBlue text-[28px]">
                EXPLORE
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeComponent;
