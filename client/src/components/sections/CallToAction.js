import React from 'react';
import Banner from '../../assets/img/banner.jpg';

const CallToAction = () => {
  return (
    <div className="flex items-center w-screen h-screen bg-gray-100">
      <div
        className="w-full bg-center bg-cover h-1/2"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="relative flex flex-col justify-center h-full items-right">
          <div className="absolute left-0 right-0 top-auto bottom-auto w-screen bg-gray-900 opacity-50 h-2/3"></div>
          <div className="relative px-6 py-3">
            <h2 className="text-3xl font-bold text-white">
              Download app &amp; join now!
            </h2>
            <p className="mt-4 text-lg font-semibold text-white">
              Download and sign up to receive all the latest real estate news.
            </p>
            <div className="block mt-10">
              <a className="inline-block mr-5" href="!#">
                <img
                  className="w-24"
                  src={require('../../assets/img/astore.png')}
                  alt="app store"
                />
              </a>
              <a className="inline-block" href="!#">
                <img
                  className="w-24"
                  src={require('../../assets/img/gplay.png')}
                  alt="google store"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
