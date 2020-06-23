import React, { useState } from 'react';
import SvgIcon from '../svg/SvgIcon';

const HouseDescription = ({ description }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="w-full p-2 border-b focus:outline-none"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
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
          isOpen
            ? 'block '
            : 'hidden ' +
              'mt-6'
        }
      >
        <p className="px-2 mt-6 text-xs text-center text-gray-700 sm:text-lg">
          {description}
        </p>
      </div>
    </>
  );
};

export default HouseDescription;
