import React, { useState } from "react";
import FooterBg from "../../assets/img/footer.jpg";
import SvgIcon from "../svg/SvgIcon";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <footer className="relative w-full">
      <div
        className="relative pt-24 pb-12 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${FooterBg})`,
        }}>
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>

        <div className="flex justify-center">
          <div className="relative flex flex-wrap max-w-6xl px-8 xl:px-0">
            {/* LOGO */}
            <div className="flex flex-col sm:w-1/2 sm:px-4 sm:pb-12">
              <h1 className="text-3xl font-semibold text-white sm:text-2xl">
                REAL<span className="text-yellow-600">HOMES</span>
              </h1>

              <p className="mt-2 font-hairline leading-6 tracking-wider text-teal-200 sm:text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
                odit officia aperiam? Aut, neque sequi?
              </p>

              <div className="flex flex-row mt-4 text-white">
                <a href="!#" className="pr-2">
                  <div className="p-3 transition duration-500 ease-in-out border rounded-full hover:bg-yellow-600 hover:border-yellow-600">
                    <SvgIcon
                      name="pinterest"
                      className="w-4 h-4 fill-current"
                    />
                  </div>
                </a>
                <a href="!#" className="px-2">
                  <div className="p-3 transition duration-500 ease-in-out border rounded-full hover:border-yellow-600 hover:bg-yellow-600">
                    <SvgIcon name="twitter" className="w-4 h-4 fill-current" />
                  </div>
                </a>
                <a href="!#" className="px-2">
                  <div className="p-3 transition duration-500 ease-in-out border rounded-full hover:bg-yellow-600 hover:border-yellow-600">
                    <SvgIcon name="facebook" className="w-4 h-4 fill-current" />
                  </div>
                </a>
                <a href="!#" className="pl-2">
                  <div className="p-3 transition duration-500 ease-in-out border rounded-full hover:bg-yellow-600 hover:border-yellow-600">
                    <SvgIcon name="google+" className="w-4 h-4 fill-current" />
                  </div>
                </a>
              </div>
            </div>

            {/* GET INFO */}
            <div className="pt-8 sm:pt-0 sm:w-1/2 sm:px-4 sm:pb-12">
              <h1 className="text-3xl font-semibold text-white">
                Get <span className="text-yellow-600">Info</span>
              </h1>
              <p className="mt-2 text-sm font-semibold text-white">
                Phone:{" "}
                <span className="font-hairline text-gray-200">
                  (12) 345 6789
                </span>
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                Email:{" "}
                <span className="font-hairline text-gray-200">
                  info.realhomes.io
                </span>
              </p>
              <p className="mt-2 text-lg font-semibold text-white">
                Address:{" "}
                <span className="text-sm font-hairline text-gray-200 sm:text-md">
                  Iris Watson, Box 283 8562 Fusce Rd, NY
                </span>
              </p>
            </div>

            {/* PROPERTY CITIES */}
            <div className="pt-8 sm:pt-0 sm:w-1/2 sm:px-4 sm:pb-12">
              <h1 className="text-3xl font-semibold text-white">
                Property <span className="text-yellow-600">Cities</span>
              </h1>
              <div className="flex flex-wrap justify-between mt-2">
                <a href="#!" className="w-1/2 mb-3 text-yellow-600">
                  <SvgIcon
                    name="marker"
                    className="inline w-6 h-6 fill-current"
                  />{" "}
                  <span className="text-sm text-gray-200">Denver</span>
                </a>
                <a href="#!" className="w-1/2 mb-3 text-yellow-600">
                  <SvgIcon
                    name="marker"
                    className="inline w-6 h-6 fill-current"
                  />{" "}
                  <span className="text-sm text-gray-200">New York</span>
                </a>
                <a href="#!" className="w-1/2 mb-3 text-yellow-600">
                  <SvgIcon
                    name="marker"
                    className="inline w-6 h-6 fill-current"
                  />{" "}
                  <span className="text-sm text-gray-200">San Francisco</span>
                </a>
                <a href="#!" className="w-1/2 mb-3 text-yellow-600">
                  <SvgIcon
                    name="marker"
                    className="inline w-6 h-6 fill-current"
                  />{" "}
                  <span className="text-sm text-gray-200">Los Angeles</span>
                </a>
                <a href="#!" className="w-1/2 mb-3 text-yellow-600">
                  <SvgIcon
                    name="marker"
                    className="inline w-6 h-6 fill-current"
                  />{" "}
                  <span className="text-sm text-gray-200">Dallas</span>
                </a>
                <a href="#!" className="w-1/2 mb-3 text-yellow-600">
                  <SvgIcon
                    name="marker"
                    className="inline w-6 h-6 fill-current"
                  />{" "}
                  <span className="text-sm text-gray-200">Washington DC</span>
                </a>
                <a href="#!" className="w-1/2 mb-3 text-yellow-600">
                  <SvgIcon
                    name="marker"
                    className="inline w-6 h-6 fill-current"
                  />{" "}
                  <span className="text-sm text-gray-200">Texas</span>
                </a>
              </div>
            </div>

            {/* NEWSLETTER */}
            <div className="pt-8 sm:pt-0 sm:w-1/2 sm:px-4 sm:pb-12">
              <h1 className="text-3xl font-semibold text-white">
                News<span className="text-yellow-600">letter</span>
              </h1>
              <p className="mt-2 text-sm text-gray-200">
                Subscribe to our newsletter or get notification about new
                updates, count, etc.
              </p>
              <form className="w-full max-w-sm mt-6">
                <div className="flex items-center py-2 border-b-2 border-teal-500">
                  <input
                    className="w-full px-2 py-1 mr-3 text-lg text-white bg-transparent border-none appearance-none focus:outline-none"
                    type="text"
                    placeholder="Enter your email..."
                  />
                  <button
                    className="p-3 text-white transition duration-500 ease-in-out border rounded-full hover:bg-yellow-600 hover:border-yellow-600"
                    type="button">
                    <SvgIcon name="plane" className="w-4 h-4 fill-current" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="absolute w-full mt-8 bg-gray-900">
          <div className="flex flex-col items-center md:flex-row md:justify-between md:w-full md:p-4">
            <p className="flex flex-col items-center p-6 text-gray-200 md:w-1/2">
              Copyright ©
              <script>document.write(new Date().getFullYear());</script>
              2020 All rights reserved{" "}
              <a
                href="!#"
                target="_blank"
                className="block text-center text-yellow-600">
                realhome.io
              </a>
            </p>

            {/* CHEVRON */}
            <div className="p-4 text-white md:hidden">
              <button
                type="button"
                className="px-2 py-1 border border-white rounded hover:border-yellow-600 hover:bg-yellow-600 focus:outline-none focus:border-yellow-600"
                onClick={() => setIsOpen(!isOpen)}>
                <SvgIcon
                  name={isOpen ? "chevron-up" : "chevron-down"}
                  className="w-8 h-8 fill-current"
                />
              </button>
            </div>

            <div
              className={
                (isOpen ? "block " : "hidden ") + "md:block md:w-1/2 w-full"
              }>
              <nav className="py-2">
                <ul className="flex flex-col items-center md:flex-row">
                  <li className="px-4 py-1 mt-1 font-semibold text-white rounded hover:bg-gray-800">
                    <a href="!#">Home</a>
                  </li>
                  <li className="px-4 py-1 mt-1 font-semibold text-white rounded hover:bg-gray-800">
                    <a href="!#">Listings</a>
                  </li>
                  <li className="px-4 py-1 mt-1 font-semibold text-white rounded hover:bg-gray-800">
                    <a href="!#">My Home</a>
                  </li>
                  <li className="px-4 py-1 mt-1 font-semibold text-white rounded hover:bg-gray-800">
                    <a href="!#">About</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
