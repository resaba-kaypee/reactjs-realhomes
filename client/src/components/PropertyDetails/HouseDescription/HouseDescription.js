import React, { useState } from "react";
import PropTypes from "prop-types";

import SvgIcon from "../../SvgIcon";

const HouseDescription = ({ description }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="w-full p-2 border-b focus:outline-none"
        type="button"
        onClick={() => setIsOpen(!isOpen)}>
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold leading-8 text-gray-800">
            House Description
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
          (isOpen ? "block " : "max-h-0 ") +
          "mt-6 overflow-hidden transition duration-1000 ease-out"
        }>
        <p
          className={
            (isOpen
              ? "transition duration-300 transform translate-y-0 opacity-1"
              : "transition duration-300 transform -translate-y-2 opacity-0") +
            "px-2 mt-6 text-xs text-center text-gray-700 sm:text-lg"
          }>
          {description}
        </p>
      </div>
    </>
  );
};

HouseDescription.propTypes = {
  description: PropTypes.string,
};

export default HouseDescription;
