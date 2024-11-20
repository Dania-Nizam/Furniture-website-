
import { FaLongArrowAltRight } from "react-icons/fa";

const Hero1 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly text-black p-6 md:p-12 md:pt-32 space-y-8 md:space-y-0">
      {/* Left Section: Title */}
      <div className="md:w-1/4 p-2 md:pt-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
          Why <br /> Choosing Us
        </h2>
      </div>

      {/* Feature 1 */}
      <div className="md:w-1/4 p-2">
        <h2 className="text-lg font-semibold text-center md:text-left">Luxury Facilities</h2>
        <p className="text-sm md:text-md text-center md:text-left mt-2">
          The advantage of hiring a workspace with us is that it gives you comfortable service and all-around facilities.
        </p>
        <div className="flex justify-center md:justify-start mt-4">
          <button className="flex items-center gap-1 text-[#E58411]">
            More Info <FaLongArrowAltRight />
          </button>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="md:w-1/4 p-2">
        <h2 className="text-lg font-semibold text-center md:text-left">Affordable Price</h2>
        <p className="text-sm md:text-md text-center md:text-left mt-2">
          You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here.
        </p>
        <div className="flex justify-center md:justify-start mt-4">
          <button className="flex items-center gap-1 text-[#E58411]">
            More Info <FaLongArrowAltRight />
          </button>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="md:w-1/4 p-2">
        <h2 className="text-lg font-semibold text-center md:text-left">Many Choices</h2>
        <p className="text-sm md:text-md text-center md:text-left mt-2">
          We provide many unique workspace choices so that you can choose the workspace to your liking.
        </p>
        <div className="flex justify-center md:justify-start mt-4">
          <button className="flex items-center gap-1 text-[#E58411]">
            More Info <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
