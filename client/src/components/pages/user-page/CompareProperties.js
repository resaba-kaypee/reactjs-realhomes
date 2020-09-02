import React, { Fragment, useContext } from "react";
import SvgIcon from "../../svg/SvgIcon";
import PropertyContext from "../../../context/property/propertyContext";

const Table = ({ list }) => {
  const propertyContext = useContext(PropertyContext);
  const { deletePropertyFromList } = propertyContext;
  return (
    <div className="px-4 py-4 mt-4 overflow-x-hidden bg-white rounded-lg shadow-xl">
      {/* <!-- Table --> */}
      <div className="min-w-full overflow-x-scroll">
        <table className="capitalize table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2"></th>
              {list.map(({ _id, property }) => (
                <Fragment key={_id}>
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
                              onClick={() => deletePropertyFromList(_id)}
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
              {list.map(({ _id, property }) => (
                <td
                  key={_id}
                  className="px-4 py-3 text-sm text-center text-gray-700 border">
                  {property._id}
                </td>
              ))}
            </tr>
            <tr>
              <th className="px-4 py-3 font-semibold text-left border">City</th>
              {list.map(({ _id, property }) => (
                <td
                  key={_id}
                  className="px-4 py-3 text-sm text-center text-gray-700 border">
                  {property.location.city}
                </td>
              ))}
            </tr>
            <tr className="bg-gray-200">
              <th className="px-4 py-3 font-semibold text-left border">Type</th>
              {list.map(({ _id, property }) => (
                <td
                  key={_id}
                  className="px-4 py-3 text-sm text-center text-gray-700 border">
                  {property.type.type}
                </td>
              ))}
            </tr>
            <tr>
              <th className="px-4 py-3 font-semibold text-left border">
                Bedrooms
              </th>
              {list.map(({ _id, property }) => (
                <td
                  key={_id}
                  className="px-4 py-3 text-sm text-center text-gray-700 border">
                  {property.bedrooms}
                </td>
              ))}
            </tr>
            <tr className="bg-gray-200">
              <th className="px-4 py-3 font-semibold text-left border">
                Bathrooms
              </th>
              {list.map(({ _id, property }) => (
                <td
                  key={_id}
                  className="px-4 py-3 text-sm text-center text-gray-700 border">
                  {property.bathrooms}
                </td>
              ))}
            </tr>
            <tr>
              <th className="px-4 py-3 font-semibold text-left border">
                Garage
              </th>
              {list.map(({ _id, property }) => (
                <td
                  key={_id}
                  className="px-4 py-3 text-sm text-center text-gray-700 border">
                  {property.garage ? property.garage : "❌"}
                </td>
              ))}
            </tr>
            <tr className="bg-gray-200">
              <th className="px-4 py-3 font-semibold text-left border">
                Area size
              </th>
              {list.map(({ _id, property }) => (
                <td
                  key={_id}
                  className="px-4 py-3 text-sm text-center text-gray-700 border">
                  {property.areaSize ? property.areaSize : "❌"}
                </td>
              ))}
            </tr>
            <tr>
              <th className="px-4 py-3 font-semibold text-left border">
                Lot size
              </th>
              {list.map(({ _id, property }) => (
                <td
                  key={_id}
                  className="px-4 py-3 text-sm text-center text-gray-700 border">
                  {property.lotSize ? property.lotSize : "❌"}
                </td>
              ))}
            </tr>
            <tr className="whitespace-no-wrap bg-gray-200">
              <th className="px-4 py-3 font-semibold text-left border">
                Date posted
              </th>
              {list.map(({ _id, property }) => (
                <td
                  key={_id}
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
