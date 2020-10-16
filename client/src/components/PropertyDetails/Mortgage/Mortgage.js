import React, { useState } from "react";

import MortgageCalculator from "./MortgageCalculator";
import SvgIcon from "../../SvgIcon";

const Mortgage = ({ price }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <button
        className="w-full p-2 border-b focus:outline-none"
        type="button"
        onClick={() => setIsOpen(!isOpen)}>
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold leading-8 text-gray-800">
            House Value
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
        <div
          className={
            isOpen
              ? "transition duration-300 transform translate-y-0 opacity-1"
              : "transition duration-300 transform -translate-y-2 opacity-0"
          }>
          <MortgageCalculator price={price} />
        </div>
      </div>
    </>
  );
};

export default Mortgage;
