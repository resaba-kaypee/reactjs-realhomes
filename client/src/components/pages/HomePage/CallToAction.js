import React from "react";

import Banner from "../../../assets/img/banner.jpg";

const CallToAction = () => {
  return (
    <section className="w-screen h-screen bg-gray-100">
      <div className="flex items-center h-full">
        <div
          className="w-full bg-center bg-cover h-2/3"
          style={{ backgroundImage: `url(${Banner})` }}>
          <div className="relative flex flex-col justify-center h-full">
            {/* OVERLAY */}
            <div className="absolute left-0 right-0 top-auto bottom-auto w-screen bg-gray-900 opacity-50 h-2/3"></div>

            {/* CONTENT */}
            <div className="flex justify-center w-full">
              <div className="w-full max-w-6xl">
                <div className="relative px-12 py-3">
                  <h2 className="text-3xl font-bold text-white">
                    Download app &amp; join now!
                  </h2>
                  <p className="mt-4 text-lg font-semibold text-white">
                    Download and sign up to receive all the latest real estate
                    news.
                  </p>
                  <div className="block mt-10">
                    <a className="inline-block mr-5" href="!#">
                      <img
                        className="w-24"
                        src={require("../../../assets/img/astore.png")}
                        alt="app store"
                      />
                    </a>
                    <a className="inline-block" href="!#">
                      <img
                        className="w-24"
                        src={require("../../../assets/img/gplay.png")}
                        alt="google store"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
