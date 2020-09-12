import React, { useContext } from "react";

import PropertyContext from "../../../../context/property/propertyContext";

import Spinner from "../../../Spinner";
import Table from "./Table";

const CompareProperties = () => {
  const propertyContext = useContext(PropertyContext);
  const { user_property_list, loading } = propertyContext;

  if (user_property_list === null && loading) return <Spinner />;

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
              {user_property_list !== null && user_property_list.length}
            </span>
            Total homes
          </span>
        </div>
      </div>
      {user_property_list !== null && user_property_list.length > 0 ? (
        <Table list={user_property_list} />
      ) : (
        <div className="px-4 py-4 mt-4 bg-white rounded-lg shadow-xl cursor-pointer ">
          <h1>No properties saved in the list.</h1>
        </div>
      )}
    </div>
  );
};

export default CompareProperties;
