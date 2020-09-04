import React from "react";

const Spinner = () => {
  return (
    <div className="w-full h-full">
      <div className="flex justify-center h-full">
        <div className="flex items-center">
          <div className="w-12 h-12 border-8 border-gray-600 rounded-full loader"></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
