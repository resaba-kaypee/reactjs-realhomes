import React from 'react';

const Blog = () => {
  return (
    <div>
      <div className="flex flex-col items-center py-10">
        <h2 className="text-4xl font-semibold">
          Latest <span className="text-yellow-600">News</span>
        </h2>
        <p className="px-6 pt-4 text-xs font-semibold tracking-tight text-center text-gray-700 uppercase">
          Sign up for the latest real estate information and more
        </p>
      </div>

      <div className="flex flex-wrap px-6">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <div className="p-4">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                className="object-cover object-center w-full h-full"
                src={require('../../assets/img/blog/14.jpg')}
                alt="blog 1"
              />
            </div>
            <a href="!#">
              <h2 className="mt-4 text-xl font-semibold truncate hover:text-yellow-600">
                Benjamin Franklin S Method Of Habit Formation
              </h2>
            </a>
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <a className="pr-4 border-r-2" href="!#">
                By Polly Williams
              </a>
              <a className="pr-4 border-r-2" href="!#">
                Aug 19, 2018
              </a>
              <a className="" href="!#">
                3 Comment
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3">
          <div className="p-4">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                className="object-cover object-center w-full h-full"
                src={require('../../assets/img/blog/15.jpg')}
                alt="blog 2"
              />
            </div>
            <a href="!#">
              <h2 className="mt-4 text-xl font-semibold capitalize truncate hover:text-yellow-600">
                How to set your intentions that energize you
              </h2>
            </a>
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <a className="pr-4 border-r-2" href="!#">
                By Matte Ramirez
              </a>
              <a className="pr-4 border-r-2" href="!#">
                Oct 19, 2018
              </a>
              <a className="" href="!#">
                4 Comment
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:flex md:justify-center lg:block lg:w-1/3">
          <div className="p-4 md:w-1/2 lg:w-full">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                className="object-cover object-center w-full h-full"
                src={require('../../assets/img/blog/16.jpg')}
                alt="blog 3"
              />
            </div>
            <a href="!#">
              <h2 className="mt-4 text-xl font-semibold capitalize truncate hover:text-yellow-600">
                Burning desire golden key or red herring
              </h2>
            </a>
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <a className="pr-4 truncate border-r-2" href="!#">
                By Nicholas Brewer
              </a>
              <a className="pr-4 border-r-2" href="!#">
                Nov 19, 2018
              </a>
              <a className="" href="!#">
                7 Comment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
