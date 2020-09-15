import React from "react";
import PropTypes from "prop-types";

const AgentForm = ({ user }) => {
  return (
    <div className="flex flex-col items-center md:justify-center">
      <div className="w-full">
        <h3 className="text-2xl font-bold leading-8 text-center text-gray-800">
          Know more about this property
        </h3>
        {/* AGENT */}
        <div className="flex flex-col items-center mt-6">
          <img
            className="block object-cover object-center w-48 h-48 overflow-hidden rounded md:object-contain"
            src={require(`../../../assets/img/user/${user.photo}`)}
            alt="agent"
          />

          <div className="flex flex-col items-center px-3 pt-2">
            <h3 className="text-lg font-semibold">
              Hi I'am your agent <span className="font-bold">{user.name}</span>
            </h3>
            <p className="px-8 text-sm">
              If you wish to know more about this property. Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. ratione adipisci, enim
              dolores impedit earum.
            </p>
          </div>
        </div>
      </div>

      {/* FORM */}
      <div className="flex justify-center w-full">
        <form className="max-w-md mt-6">
          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label
                className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0"
                htmlFor="inline-full-name">
                Full Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                value="Your full name..."
                readOnly
              />
            </div>
          </div>
          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label
                className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0"
                htmlFor="inline-phone">
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
                htmlFor="inline-email">
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
                htmlFor="inline-text-area">
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
                type="button">
                Email Agent
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

AgentForm.propTypes = {
  user: PropTypes.object.isRequired,
};

export default AgentForm;
