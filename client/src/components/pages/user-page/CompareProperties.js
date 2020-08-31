import React, { Fragment, useContext } from "react";
import PropertyContext from "../../../context/property/propertyContext";
import SvgIcon from "../../svg/SvgIcon";

const Table = ({ properties }) => {
  return (
    <div className="px-4 py-4 mt-4 overflow-x-hidden bg-white rounded-lg shadow-xl">
      {/* <!-- Table --> */}
      <div className="min-w-full overflow-x-scroll">
        <table className="capitalize table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2"></th>
              {properties.map((property) => (
                <Fragment key={property._id}>
                  <th className="px-4 py-2">
                    <div>
                      <div className="h-48">
                        <div className="relative w-48">
                          <img
                            className="object-cover w-48 h-48 shadow-lg"
                            src={require(`../../../assets/img/property/${property.imageCover}`)}
                            alt=""
                          />
                          <div className="absolute top-0 left-0">
                            <button
                              type="button"
                              className="-mt-2 -ml-3 text-green-500 bg-gray-200 rounded-full shadow-xl hover:text-red-600">
                              <SvgIcon
                                name="close"
                                className="w-10 h-10 fill-current"
                              />
                            </button>
                          </div>
                        </div>
                      </div>

                      <h2 className="w-48 text-lg font-semibold leading-loose tracking-wide text-left text-gray-800 truncate">
                        {property.title}
                      </h2>
                      <p className="mt-2 text-sm font-normal text-left text-gray-700">
                        {property.status}
                      </p>
                      <p className="mt-1 text-xl font-semibold text-left text-gray-800">
                        {property.price.toLocaleString("en", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </p>
                    </div>
                  </th>
                </Fragment>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-200">
              <th className="px-4 py-3 font-semibold text-left border">
                Property ID
              </th>
              {properties.map((property) => (
                <td
                  key={property._id}
                  className="px-4 py-3 text-sm text-center text-gray-700 border">
                  {property._id}
                </td>
              ))}
            </tr>
            <tr>
              <th className="px-4 py-3 font-semibold text-left border">City</th>
              {properties.map((property) => (
                <td
                  key={property._id}
                  className="px-4 py-3 text-sm text-center text-gray-700 border">
                  {property.location.city}
                </td>
              ))}
            </tr>
            <tr className="bg-gray-200">
              <th className="px-4 py-3 font-semibold text-left border">Type</th>
              {properties.map((property) => (
                <td
                  key={property._id}
                  className="px-4 py-3 text-sm text-center text-gray-700 border">
                  {property.type.type}
                </td>
              ))}
            </tr>
            <tr>
              <th className="px-4 py-3 font-semibold text-left border">
                Bedrooms
              </th>
              {properties.map((property) => (
                <td
                  key={property._id}
                  className="px-4 py-3 text-sm text-center text-gray-700 border">
                  {property.bedrooms}
                </td>
              ))}
            </tr>
            <tr className="bg-gray-200">
              <th className="px-4 py-3 font-semibold text-left border">
                Bathrooms
              </th>
              {properties.map((property) => (
                <td
                  key={property._id}
                  className="px-4 py-3 text-sm text-center text-gray-700 border">
                  {property.bathrooms}
                </td>
              ))}
            </tr>
            <tr>
              <th className="px-4 py-3 font-semibold text-left border">
                Garage
              </th>
              {properties.map((property) => (
                <td
                  key={property._id}
                  className="px-4 py-3 text-sm text-center text-gray-700 border">
                  {property.garage ? property.garage : "❌"}
                </td>
              ))}
            </tr>
            <tr className="bg-gray-200">
              <th className="px-4 py-3 font-semibold text-left border">
                Area size
              </th>
              {properties.map((property) => (
                <td
                  key={property._id}
                  className="px-4 py-3 text-sm text-center text-gray-700 border">
                  {property.areaSize ? property.areaSize : "❌"}
                </td>
              ))}
            </tr>
            <tr>
              <th className="px-4 py-3 font-semibold text-left border">
                Lot size
              </th>
              {properties.map((property) => (
                <td
                  key={property._id}
                  className="px-4 py-3 text-sm text-center text-gray-700 border">
                  {property.lotSize ? property.lotSize : "❌"}
                </td>
              ))}
            </tr>
            <tr className="whitespace-no-wrap bg-gray-200">
              <th className="px-4 py-3 font-semibold text-left border">
                Date posted
              </th>
              {properties.map((property) => (
                <td
                  key={property._id}
                  className="px-4 py-3 text-sm text-center text-gray-700 border">
                  {property.yearBuilt}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const CompareProperties = () => {
  const propertyContext = useContext(PropertyContext);
  const { user_property_list } = propertyContext;
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
        <div className="flex flex-col sm:flex-row">
          <div>
            <span className="ml-2 text-green-500 cursor-pointer">
              <SvgIcon
                name="sort"
                className="inline-block w-5 h-5 ml-1 fill-current"
              />
            </span>
            <span className="ml-2 capitalize">price</span>
          </div>
          <div>
            <span className="ml-2 text-green-500 cursor-pointer">
              <SvgIcon
                name="sort"
                className="inline-block w-5 h-5 ml-1 fill-current"
              />
            </span>
            <span className="ml-2 capitalize">date posted</span>
          </div>
        </div>
      </div>
      {user_property_list !== null && user_property_list.length > 0 ? (
        <Table properties={user_property_list} />
      ) : (
        <div className="px-4 py-4 mt-4 bg-white rounded-lg shadow-xl cursor-pointer ">
          <h1>No properties saved</h1>
        </div>
      )}
    </div>
  );
};

export default CompareProperties;
