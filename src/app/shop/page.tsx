import React from 'react';
import Image from 'next/image';

const Shop = () => {
  return (
    <div className="px-4 py-8">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold leading-tight text-[#1E1E1E]">
          Best Selling Product
        </h2>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center mt-6">
        <ul className="flex items-center bg-[#EEEEEE] rounded-full px-6 py-2 gap-4">
          {['Chair', 'Beds', 'Sofa', 'Lamp'].map((item, index) => (
            <li
              key={index}
              className="text-sm md:text-base font-medium text-[#1E1E1E] opacity-80"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Product Grid */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          ['/c1.png', '/g1.png', '/g1p.png'],
          ['/c2.png', '/g2.png', '/g2p.png'],
          ['/c3.png', '/g3.png', '/g3p.png'],
          ['/c4.png', '/g4.png', '/g4p.png'],
        ].map((images, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            {images.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`Product ${index + 1}`}
                width={200}
                height={200}
                className="rounded-lg"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
