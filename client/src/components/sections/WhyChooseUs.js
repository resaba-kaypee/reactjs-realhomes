import React from 'react';
import SvgIcon from '../svg/SvgIcon';

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-300">
      <div className="flex flex-col items-center py-10">
        <h2 className="text-4xl font-semibold">
          Why Choose <span className="text-yellow-600">Us</span>
        </h2>
        <p className="px-6 pt-4 text-xs font-semibold tracking-tight text-center text-gray-700 uppercase">
          We have over 8 years of experience and knowledge on how to sell more.
        </p>
      </div>

      {/* CARDS */}
      <div className="flex flex-col px-8 pb-10 sm:flex-row">
        <div className="mt-4 sm:w-1/3">
          <div className="flex flex-col items-center h-full p-8 transition duration-500 ease-in-out bg-white border-b-4 border-pink-500 rounded-lg sm:p-3 sm:mx-2 hover:bg-yellow-600 hover:text-white">
            <div className="w-16 p-2 text-indigo-800">
              <SvgIcon name="search" className="w-12 h-12 fill-current" />
            </div>
            <div className="mt-4 font-bold">Find Your Home</div>
            <div className="mt-2 text-sm text-center">
              Quis ipsum suspendisse ultrices, risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </div>
          </div>
        </div>

        <div className="mt-4 sm:w-1/3">
          <div className="flex flex-col items-center h-full p-8 transition duration-500 ease-in-out bg-white border-b-4 border-pink-500 rounded-lg hover:bg-yellow-600 hover:text-white sm:p-3 sm:mx-2">
            <div className="w-16 p-2 text-indigo-800">
              <SvgIcon name="train" className="w-12 h-12 fill-current" />
            </div>
            <div className="mt-4 font-bold">Transportation Support</div>
            <div className="mt-2 text-sm text-center">
              Quis ipsum suspendisse ultrices, risus commodo viverra maecenas
              accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices,
              risus commodo viverra maecenas accumsan lacus vel facilisis.
            </div>
          </div>
        </div>

        <div className="mt-4 sm:w-1/3">
          <div className="flex flex-col items-center h-full p-8 transition duration-500 ease-in-out bg-white border-b-4 border-pink-500 rounded-lg hover:bg-yellow-600 hover:text-white sm:p-3 sm:mx-2">
            <div className="w-16 p-2 text-indigo-800">
              <SvgIcon name="c-card" className="w-12 h-12 fill-current" />
            </div>
            <div className="mt-4 font-bold">Save Your Moaney</div>
            <div className="mt-2 text-sm text-center">
              Quis ipsum suspendisse ultrices, risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

/**
 *       <div className="flex flex-wrap px-6">
        <div className="w-full p-8 md:w-1/2 lg:w-1/3">
          <div className="flex flex-col items-center h-full p-4 transition duration-500 ease-in-out bg-white border-b-4 border-pink-500 rounded-lg hover:bg-yellow-600 hover:text-white">
            <div className="text-2xl">
              <SvgIcon name="search" className="w-8 h-8 fill current" />
            </div>
            <h2 className="mt-2 text-xl font-semibold">Find Your Home</h2>
            <p className="mt-2">
              Quis ipsum suspendisse ultrices, risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>
        </div>

        <div className="w-full p-8 md:w-1/2 lg:w-1/3">
          <div className="flex flex-col items-center h-full p-4 transition duration-500 ease-in-out bg-white border-b-4 border-pink-500 rounded-lg hover:bg-yellow-600 hover:text-white">
            <div className="text-2xl">
              {' '}
              <SvgIcon name="train" className="w-6 h-6 fill current" />
            </div>
            <h2 className="mt-2 text-xl font-semibold">
              Transportation Support
            </h2>
            <p className="mt-2">
              Quis ipsum suspendisse ultrices, risus commodo viverra maecenas
              accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices,
              risus commodo viverra maecenas accumsan lacus vel facilisis.
            </p>
          </div>
        </div>

        <div className="p-8 md:w-full md:px-53 lg:px-8 lg:w-1/3">
          <div className="flex flex-col items-center w-full h-full p-4 transition duration-500 ease-in-out bg-white border-b-4 border-pink-500 rounded-lg hover:bg-yellow-600 hover:text-white">
            <div className="text-2xl">
              <SvgIcon name="c-card" className="w-6 h-6 fill current" />
            </div>
            <h2 className="mt-2 text-xl font-semibold">Save Your Money</h2>
            <p className="mt-2">
              Quis ipsum suspendisse ultrices, risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>
        </div>
      </div>
 * 
 */
