import React from 'react';
import Header from './Header';
import { IoSearch } from "react-icons/io5";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg.png)" }}
      className="bg-cover bg-center h-screen bg-no-repeat"
    >
      {/* Header */}
      <Header />

      {/* Hero Content */}
      <div className="flex flex-col items-center pb-80 justify-center h-full text-white px-4 sm:px-8 md:px-16">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl text-center font-semibold font-sans leading-tight">
          Make Your Interior More <br /> Minimalistic & Modern
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg md:text-xl font-light font-sans text-center">
          Turn your room with Panto into a lot more minimalist <br /> and modern with ease and speed
        </p>

        {/* Search Button */}
        <button className="flex items-center justify-center mt-8 w-[240px] sm:w-[260px] md:w-[310px] h-[50px] sm:h-[52px] md:h-[56px] rounded-full border border-gray-400 backdrop-blur-sm bg-opacity-30">
          <span className="text-sm sm:text-base md:text-lg font-thin">
            Search Furniture
          </span>
          <IoSearch className="ml-2 w-6 h-6 sm:w-7 sm:h-7 md:w-7 md:h-7" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
