import React from "react";
import FooterBg from "../../assets/img/footer.jpg";
import SvgIcon from "../svg/SvgIcon";

const Footer = () => {
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
              <div className="flex items-center md:mr-5">
                <SvgIcon
                  className="w-16 h-16 text-green-700 fill-current"
                  name="logo"
                />
                <div className="p-2 mt-3 text-xl font-semibold">
                  <span className="text-yellow-600">REAL</span>
                  <span className="text-gray-600">HOMES</span>
                </div>
              </div>

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
          <div className="flex justify-center">
            <p className="flex flex-col items-center p-6 text-gray-200 md:w-1/2">
              Copyright ©
              <script>document.write(new Date().getFullYear());</script>
              2020 All rights reserved{" "}
              <a
                href="!#"
                target="_blank"
                className="block text-center text-yellow-600">
                realhomes.io
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
