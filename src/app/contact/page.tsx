import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="px-4 py-8">
      {/* Header Section */}
      <div className="text-center md:text-left md:pl-40">
        <p className="text-[#E58411] text-sm">TESTIMONIALS</p>
        <h1 className="font-bold text-2xl md:text-3xl pt-2">Our Client Reviews</h1>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-6 pt-10">
        {["/card1.png", "/card2.png", "/card3.png"].map((src, index) => (
          <div key={index}>
            <Image src={src} alt={`card${index + 1}`} height={506} width={370} className="rounded-lg" />
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="flex flex-wrap justify-between mt-12 px-4 md:px-40 gap-12">
        {/* About Section */}
        <div className="w-full md:w-1/4">
          <h1 className="text-2xl font-semibold pb-2">Panto</h1>
          <p>
            The advantage of hiring a workspace with us is that it gives you
            comfortable service and all-around facilities.
          </p>
        </div>

        {/* Categories Section */}
        <div className="w-full md:w-1/4">
          <h3 className="text-[#FF911D]">Furniture</h3>
          <ul className="mt-2">
            <li className="text-[#1E1E1E] leading-8">Beds</li>
            <li className="text-[#1E1E1E] leading-8">Chair</li>
            <li className="text-[#1E1E1E] leading-8">All</li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="w-full md:w-1/4">
          <h3 className="text-[#FF911D]">Services</h3>
          <ul className="mt-2">
            <li className="text-[#1E1E1E] leading-8">Email Marketing</li>
            <li className="text-[#1E1E1E] leading-8">Campaigns</li>
            <li className="text-[#1E1E1E] leading-8">Branding</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="w-full md:w-1/4">
          <h3 className="text-[#FF911D]">Follow Us</h3>
          <ul className="mt-2">
            <li className="flex items-center gap-2 text-[#1E1E1E] leading-8">
              <FaFacebookF /> Facebook
            </li>
            <li className="flex items-center gap-2 text-[#1E1E1E] leading-8">
              <IoLogoTwitter /> Twitter
            </li>
            <li className="flex items-center gap-2 text-[#1E1E1E] leading-8">
              <FaInstagram /> Instagram
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Links */}
      <div className="flex flex-wrap justify-center md:justify-between mt-10 px-4 md:px-40 gap-6">
        <div className="text-[#1B2934] opacity-50">Copyright © 2021</div>
        <div className="text-[#1E1E1E]">Terms & Conditions</div>
        <div className="text-[#1E1E1E]">Privacy Policy</div>
      </div>
    </div>
  );
};

export default Contact;

