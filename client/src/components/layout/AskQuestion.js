import React, { useState } from 'react';
import SvgIcon from '../svg/SvgIcon';

const AskQuestion = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        className="w-full p-2 border-b focus:outline-none"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold leading-8 text-gray-800">
            Ask A Question
          </h2>
          <div className="text-black">
            {isOpen ? (
              <SvgIcon name="chevron-up" className="w-10 h-10 fill-current" />
            ) : (
              <SvgIcon name="chevron-down" className="w-10 h-10 fill-current" />
            )}
          </div>
        </div>
      </button>

      <div
        className={
          isOpen
            ? 'block '
            : 'hidden ' +
              'flex flex-col items-center mt-6 md:flex-row md:justify-center'
        }
      >
        <div className="w-full mt-6">
          <h3 className="text-xl font-bold leading-8 text-gray-800">
            Know more about this property
          </h3>
          {/* AGENT */}
          <div className="flex flex-col items-center mt-6 sm:flex-row">
            <div className="w-full p-2">
              <div className="relative pb-3/4">
                <img
                  className="absolute object-cover object-center w-full h-full overflow-hidden rounded md:object-contain"
                  src={require(`../../assets/img/user/${user.photo}`)}
                  alt="agent"
                />
              </div>
            </div>
            <div className="self-center px-3 pt-2">
              <h3 className="text-lg font-semibold">
                Hi I'am your agent{' '}
                <span className="font-bold">{user.name}</span>
              </h3>
              <p className="text-sm">
                If you wish to know more about this property. Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. ratione adipisci, enim
                dolores impedit earum.
              </p>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="flex sm: sm:justify-center">
          <form className="w-full max-w-md mt-6">
            <div className="mb-6 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0"
                  for="inline-full-name"
                >
                  Full Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  value="Your full name..."
                />
              </div>
            </div>
            <div className="mb-6 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0"
                  for="inline-phone"
                >
                  Phone
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-phone"
                  type="number"
                  placeholder="Your phone number..."
                />
              </div>
            </div>
            <div className="mb-6 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0"
                  for="inline-email"
                >
                  Email
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-email"
                  type="email"
                  placeholder="Your email..."
                />
              </div>
            </div>
            <div className="mb-6 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0"
                  for="inline-text-area"
                >
                  Message
                </label>
              </div>
              <div className="md:w-2/3">
                <textarea
                  className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-text-area"
                  type="email"
                  placeholder="I'm interested in 3725 Shawn Circle"
                />
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button
                  className="px-4 py-2 font-bold text-white bg-purple-500 rounded shadow hover:bg-purple-400 focus:shadow-outline focus:outline-none"
                  type="button"
                >
                  Email Agent
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AskQuestion;
