import React from "react";

import Card from "./Card";

const SavedProperties = ({ list }) => {
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
              {list !== null && list.length}
            </span>
            Total homes
          </span>
        </div>
      </div>
      {list !== null && list.length > 0 ? (
        <div className="overflow-x-scroll">
          <div className="px-4 min-w-5xl">
            {list.map(({ _id, property }) => (
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
