import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-10 sm:px-4 px-4 py-10 items-center justify-center">
      {/* Left Section - Image */}
      <div className="w-full sm:w-1/2 flex justify-center">
        <Image
          src="/bg2.png"
          alt="Background"
          width={629}
          height={445}
          className="w-full sm:w-4/5 object-cover"
        />
      </div>

      {/* Right Section - Content */}
      <div className="w-full sm:w-1/2 text-center sm:text-left mt-6 sm:mt-0">
        <p className="text-[#E58411] text-sm font-semibold pb-4">EXPERIENCES</p>
        <h2 className="font-bold text-2xl sm:text-3xl leading-8 pb-7">
          We Provide You The <br /> Best Experience
        </h2>
        <p className="text-base text-gray-700 pb-6">
          You don’t have to worry about the result because all of these interiors
          are made by people who are professionals in their fields with an elegant
          and luxurious style and with premium quality materials.
        </p>
        <div className="flex justify-center sm:justify-start">
          <Image
            src="/arrow.png"
            alt="Arrow"
            width={120}
            height={100}
            className="pt-6"
          />
        </div>
      </div>
    </div>
  )
}

export default About
