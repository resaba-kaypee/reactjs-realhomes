import React from "react";

import Table from "./Table";

const CompareProperties = ({ list }) => {
  return (
    <div className="mb-6">
      <h2 className="my-4 text-3xl font-semibold sm:text-4xl">
        Compare Properties
      </h2>
      <div className="flex items-center justify-between pb-2 text-gray-600 border-b">
        {/* <!-- Header --> */}

        <div>
          <span>
            <span className="mr-2 text-green-500">
              {list !== null && list.length}
            </span>
            Total homes
          </span>
        </div>
      </div>
      {list !== null && list.length > 0 ? (
        <Table list={list} />
      ) : (
        <div className="px-4 py-4 mt-4 bg-white rounded-lg shadow-xl cursor-pointer ">
          <h1>No properties saved in the list.</h1>
        </div>
      )}
    </div>
  );
};

export default CompareProperties;
