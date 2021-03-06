import React from "react";

import SvgIcon from "../../SvgIcon";

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-300 shadow-inner">
      <div className="flex flex-col items-center py-10">
        <h2 className="text-4xl font-semibold">
          Why Choose <span className="text-yellow-600">Us</span>
        </h2>
        <p className="px-6 pt-4 text-xs font-semibold tracking-tight text-center text-gray-700 uppercase">
          We have over 8 years of experience and knowledge on how to sell more.
        </p>
      </div>

      {/* CARDS */}
      <div className="flex justify-center">
        <div className="w-full max-w-6xl">
          <div className="flex flex-wrap justify-center px-8 pb-10 xl:px-2">
            <div className="mt-4 md:w-1/2 lg:w-1/3">
              <div className="flex flex-col items-center h-full p-8 transition duration-500 ease-in-out bg-white border-b-4 border-pink-500 rounded-lg sm:mx-2 hover:bg-yellow-600 hover:text-white">
                <div className="w-16 p-2 text-indigo-800">
                  <SvgIcon name="search" className="w-12 h-12 fill-current" />
                </div>
                <div className="mt-4 font-bold">Find Your Home</div>
                <div className="mt-2 text-sm text-center">
                  Quis ipsum suspendisse ultrices, risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </div>
              </div>
            </div>

            <div className="mt-4 md:w-1/2 lg:w-1/3">
              <div className="flex flex-col items-center h-full p-8 transition duration-500 ease-in-out bg-white border-b-4 border-pink-500 rounded-lg hover:bg-yellow-600 hover:text-white sm:mx-2">
                <div className="w-16 p-2 text-indigo-800">
                  <SvgIcon name="train" className="w-12 h-12 fill-current" />
                </div>
                <div className="mt-4 font-bold">Transportation Support</div>
                <div className="mt-2 text-sm text-center">
                  Quis ipsum suspendisse ultrices, risus commodo viverra
                  maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse
                  ultrices, risus commodo viverra maecenas accumsan lacus vel
                  facilisis.
                </div>
              </div>
            </div>

            <div className="mt-4 md:w-1/2 lg:w-1/3">
              <div className="flex flex-col items-center h-full p-8 transition duration-500 ease-in-out bg-white border-b-4 border-pink-500 rounded-lg md:p-12 lg:p-8 hover:bg-yellow-600 hover:text-white sm:mx-2">
                <div className="w-16 p-2 text-indigo-800">
                  <SvgIcon name="c-card" className="w-12 h-12 fill-current" />
                </div>
                <div className="mt-4 font-bold">Save Your Money</div>
                <div className="mt-2 text-sm text-center">
                  Quis ipsum suspendisse ultrices, risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
