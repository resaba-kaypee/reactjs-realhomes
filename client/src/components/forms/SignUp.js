import React from 'react';
import Modal from '../layout/Modal';

const SignUp = ({ setIsOpen }) => {
  return (
    <Modal>
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="w-full max-w-xs lg:mt-20 sm:max-w-sm">
          <button
            // OVERLAY BUTTON
            tabIndex="-1"
            className="fixed inset-0 right-0 w-full h-full bg-black opacity-25 cursor-default"
            onClick={() => setIsOpen(false)}
          ></button>
          <form className="relative px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
            <button
              type="button"
              tabIndex="-1"
              className="absolute top-0 right-0 -mt-6 -mr-6 text-red-600 rounded-full shadow-md cursor-pointer focus:border-white focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-8 h-8 fill-current" viewBox="0 0 20 20">
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z" />
              </svg>
            </button>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="fullName"
                type="fullName"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="passwordConfirm"
              >
                Corfirm Password
              </label>
              <input
                className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="passwordConfirm"
                type="passwordConfirm"
                placeholder="******************"
                required
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <button
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
              <div className="flex flex-col items-center mt-4">
                <a
                  className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800"
                  href="!#"
                >
                  Forgot Password?
                </a>
                <a
                  className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800"
                  href="!#"
                >
                  Have an account? Sign in here
                </a>
              </div>
            </div>
          </form>
          <p className="text-xs text-center text-gray-700">
            &copy;2020 Acme Corp. All rights reserved.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default SignUp;
