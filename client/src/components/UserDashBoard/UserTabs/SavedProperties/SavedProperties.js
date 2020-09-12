import React, { useContext } from "react";

import PropertyContext from "../../../../context/property/propertyContext";

import Card from "./Card";
import Spinner from "../../../Spinner";

const SavedProperties = () => {
  const propertyContext = useContext(PropertyContext);
  const { user_property_list, loading } = propertyContext;

  if (user_property_list === null && loading) return <Spinner />;

  return (
    <div className="mb-6">
      <h2 className="my-4 text-3xl font-semibold sm:text-4xl">
        Saved Properties
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
        <div className="overflow-x-scroll">
          <div className="px-4 pb-4 min-w-5xl">
            {user_property_list.map(({ _id, property }) => (
              <Card key={_id} property={property} _id={_id} />
            ))}
          </div>
        </div>
      ) : (
        <div className="px-4 py-4 mt-4 bg-white rounded-lg shadow-xl ">
          No properties saved in list.
        </div>
      )}
    </div>
  );
};

export default SavedProperties;
