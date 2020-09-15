import React from "react";

import Container from "../Shared/Container";
import HeroSectionContainer from "../Shared/HeroSectionContainer";
import Testimonial from "../../assets/img/bg-testimonial.jpg";
import RealtorSam from "../../assets/img/user/user-5ec7f139df9caf1f90cb81ea-1593941838997.jpeg";
import RealtorMarry from "../../assets/img/user/user-5ec7f180df9caf1f90cb81eb-1593881815644.jpeg";
import RealtorJoe from "../../assets/img/user/user-5f00b04de4baed08d40490c0-1593881767876.jpeg";
import { SlideTestimonial } from "../Carousel";
import SvgIcon from "../SvgIcon";

const SocialIcons = () => {
  return (
    <div className="flex flex-row justify-center mt-4 text-gray-800">
      <a href="!#" className="pr-2">
        <div className="p-3 transition duration-500 ease-in-out bg-yellow-200 border rounded-full hover:bg-yellow-300 hover:border-gray-600">
          <SvgIcon name="pinterest" className="w-4 h-4 fill-current" />
        </div>
      </a>
      <a href="!#" className="px-2">
        <div className="p-3 transition duration-500 ease-in-out bg-yellow-200 border rounded-full hover:border-gray-600 hover:bg-yellow-300">
          <SvgIcon name="twitter" className="w-4 h-4 fill-current" />
        </div>
      </a>
      <a href="!#" className="px-2">
        <div className="p-3 transition duration-500 ease-in-out bg-yellow-200 border rounded-full hover:bg-yellow-300 hover:border-gray-600">
          <SvgIcon name="facebook" className="w-4 h-4 fill-current" />
        </div>
      </a>
      <a href="!#" className="pl-2">
        <div className="p-3 transition duration-500 ease-in-out bg-yellow-200 border rounded-full hover:bg-yellow-300 hover:border-gray-600">
          <SvgIcon name="google+" className="w-4 h-4 fill-current" />
        </div>
      </a>
    </div>
  );
};

const AboutPage = () => {
  return (
    <>
      <HeroSectionContainer>
        <h1 className="text-4xl font-semibold text-yellow-500">
          Hello! Welcome to <span className="text-gray-300">REAL</span>
          <span className="text-yellow-700">HOMES</span>
        </h1>
        <p className="mt-2 text-lg text-yellow-500">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo.u
        </p>
      </HeroSectionContainer>
      <Container>
        <div className="flex flex-col items-center py-10">
          <h2 className="text-4xl font-semibold">
            Why Choose <span className="text-yellow-600">Us</span>
          </h2>
          <p className="px-6 pt-4 text-xs font-semibold tracking-tight text-center text-gray-700 uppercase">
            We have over 8 years of experience and knowledge on how to sell
            more.
          </p>
        </div>

        {/* CARDS */}
        <div className="flex justify-center">
          <div className="w-full">
            <div className="flex flex-wrap justify-center px-8 pb-10 xl:px-2">
              <div className="mt-4 md:w-1/2 lg:w-1/3">
                <div className="flex flex-col items-center h-full p-8 transition duration-500 ease-in-out bg-white border-b-4 border-pink-500 rounded-lg shadow sm:mx-2 hover:bg-yellow-600 hover:text-white">
                  <div className="mt-4 font-bold">Our Company</div>
                  <div className="mt-2 text-sm text-center">
                    Quis ipsum suspendisse ultrices, risus commodo viverra
                    maecenas accumsan lacus vel facilisis. Quis ipsum
                    suspendisse ultrices, risus commodo viverra maecenas
                    accumsan lacus vel facilisis.
                  </div>
                </div>
              </div>

              <div className="mt-4 md:w-1/2 lg:w-1/3">
                <div className="flex flex-col items-center h-full p-8 transition duration-500 ease-in-out bg-white border-b-4 border-pink-500 rounded-lg shadow hover:bg-yellow-600 hover:text-white sm:mx-2">
                  <div className="mt-4 font-bold">Our Vision</div>
                  <div className="mt-2 text-sm text-center">
                    Quis ipsum suspendisse ultrices, risus commodo viverra
                    maecenas accumsan lacus vel facilisis. Quis ipsum
                    suspendisse ultrices, risus commodo viverra maecenas
                    accumsan lacus vel facilisis.
                  </div>
                </div>
              </div>

              <div className="mt-4 md:w-1/2 lg:w-1/3">
                <div className="flex flex-col items-center h-full p-8 transition duration-500 ease-in-out bg-white border-b-4 border-pink-500 rounded-lg shadow md:p-12 lg:p-8 hover:bg-yellow-600 hover:text-white sm:mx-2">
                  <div className="mt-4 font-bold">Our Quality</div>
                  <div className="mt-2 text-sm text-center">
                    Quis ipsum suspendisse ultrices, risus commodo viverra
                    maecenas accumsan lacus vel facilisis. Quis ipsum
                    suspendisse ultrices, risus commodo viverra maecenas
                    accumsan lacus vel facilisis.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <div className="px-4 my-16 text-yellow-600">
          <div className="flex flex-col items-center justify-between px-8 sm:flex-row">
            <div className="my-6 text-center sm:my-0">
              <h3 className="text-4xl">3000 +</h3>
              <p>Properties for sale</p>
            </div>
            <div className="my-6 text-center sm:my-0">
              <h3 className="text-4xl">2234</h3>
              <p>Properties sold</p>
            </div>
            <div className="my-6 text-center sm:my-0">
              <h3 className="text-4xl">1234</h3>
              <p>Properties for rent</p>
            </div>
          </div>
        </div>
      </Container>

      <section className="w-screen h-screen">
        <div className="flex items-center h-full">
          <div
            className="w-full bg-center bg-cover h-2/3"
            style={{ backgroundImage: `url(${Testimonial})` }}>
            <div className="relative flex flex-col justify-center h-full">
              {/* OVERLAY */}
              <div className="absolute left-0 right-0 top-auto bottom-auto w-full h-full bg-gray-900 opacity-50"></div>

              {/* CONTENT */}
              <div className="flex justify-center w-full">
                <div className="w-full max-w-6xl">
                  <SlideTestimonial />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Container>
        <div className="flex flex-col items-center py-10">
          <h2 className="text-4xl font-semibold">
            Our <span className="text-yellow-600">Realtors</span>
          </h2>
          <p className="px-6 pt-4 text-xs font-semibold tracking-tight text-center text-gray-700 uppercase">
            We have over 8 years of experience and knowledge on how to sell
            more.
          </p>
        </div>

        {/* CARDS */}
        <div className="flex justify-center">
          <div className="w-full">
            <div className="flex flex-wrap justify-center px-8 pb-10 xl:px-2">
              <div className="mt-4 md:w-1/2 lg:w-1/3">
                <div className="flex flex-col items-center h-full p-8 text-gray-800 transition duration-500 ease-in-out bg-white border-b-4 border-pink-500 rounded-lg shadow sm:mx-2 hover:bg-yellow-600 hover:text-white">
                  <figure>
                    <img src={RealtorSam} alt="agent 1" />
                  </figure>
                  <div className="w-full mt-4 text-left">
                    <h2 className="text-2xl font-semibold">Sam Smith</h2>
                    <p className="mt-2 text-sm">sam@realhomes.io</p>
                    <p>+45 27774 5653 267</p>
                  </div>
                  <SocialIcons />
                </div>
              </div>

              <div className="mt-4 md:w-1/2 lg:w-1/3">
                <div className="flex flex-col items-center h-full p-8 text-gray-800 transition duration-500 ease-in-out bg-white border-b-4 border-pink-500 rounded-lg shadow hover:bg-yellow-600 hover:text-white sm:mx-2">
                  <figure>
                    <img src={RealtorMarry} alt="agent 2" />
                  </figure>
                  <div className="w-full mt-4 text-left">
                    <h2 className="text-2xl font-semibold">Marry Williams</h2>
                    <p className="mt-2 text-sm">marry@realhomes.io</p>
                    <p>+45 27774 5653 267</p>
                  </div>
                  <SocialIcons />
                </div>
              </div>

              <div className="mt-4 md:w-1/2 lg:w-1/3">
                <div className="flex flex-col items-center h-full p-8 text-gray-800 transition duration-500 ease-in-out bg-white border-b-4 border-pink-500 rounded-lg shadow md:p-12 lg:p-8 hover:bg-yellow-600 hover:text-white sm:mx-2">
                  <figure>
                    <img src={RealtorJoe} alt="agent 3" />
                  </figure>
                  <div className="w-full mt-4 text-left">
                    <h2 className="text-2xl font-semibold">Joe Fredd</h2>
                    <p className="mt-2 text-sm">joe@realhomes.io</p>
                    <p>+45 27774 5653 267</p>
                  </div>
                  <SocialIcons />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutPage;
