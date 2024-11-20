"use client"
import Link from "next/link";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" text-white">
      <div className="flex p-4 justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-medium pl-5">Panto</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-10">
            <li>
              <Link href="/" className="flex items-center">
                Furniture <FaAngleDown />
              </Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Bag Icon */}
        <div className="mr-5 md:mr-10">
          <Image src="/bag.png" alt="bag" width={30} height={30} />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-gray-700">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Furniture
              </Link>
            </li>
            <li>
              <Link href="/shop" onClick={() => setIsOpen(false)}>
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
