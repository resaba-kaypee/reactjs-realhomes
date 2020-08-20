import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropertyContext from "../../context/property/propertyContext";
import Slide from "../carousel/Slide";
import SvgIcon from "../svg/SvgIcon";
import Map from "../layout/Map";
import AskQuestion from "../layout/AskQuestion";
import PropertyDetails from "../layout/PropertyDetails";
import HouseDescription from "../layout/HouseDescription";
import SimilarProperties from "../layout/SimilarProperties";
import Spinner from "../layout/Spinner";

const PropertyInfo = ({ property }) => (
  <div className="flex justify-center mt-12 md:mt-0">
    <div className="w-full px-12 md:px-0 md:mr-8">
      <div className="">
        {/* --TITLE-- */}
        <h4 className="text-2xl font-semibold leading-tight text-center sm:text-3xl">
          {property.title}
        </h4>
        <div className="pt-4 pb-2">
          <div className="flex justify-between">
            <div className="flex items-center text-gray-700">
              <SvgIcon name="marker" className="w-6 h-6 mr-1 fill-current" />
              <p className="truncate sm:text-lg">{property.location.address}</p>
            </div>

            <div className="flex items-center text-gray-700">
              <SvgIcon name="map" className="w-6 h-6 mr-1 fill-current" />
              <p className=" sm:text-lg">{property.location.state}</p>
            </div>
          </div>
        </div>
        {/* --INFO-- */}
        <div className="px-2 pt-3 mt-4 border-t-2 border-gray-400">
          <div className="flex flex-wrap">
            <p className="flex justify-between w-1/2 p-3">
              <span className="text-gray-700">
                <SvgIcon
                  name="bed"
                  className="inline w-6 h-6 mr-1 fill-current"
                />
              </span>
              <span className=" sm:text-lg">{property.bedrooms} Beds</span>
            </p>
            <p className="flex justify-between w-1/2 p-3">
              <span className="text-gray-700">
                <SvgIcon
                  name="bath"
                  className="inline w-6 h-6 mr-1 fill-current"
                />
              </span>
              <span className=" sm:text-lg">{property.bathrooms} Baths</span>
            </p>
            <p className="flex justify-between w-1/2 p-3">
              <span className="text-gray-700">
                <SvgIcon
                  name="ruler"
                  className="inline w-6 h-6 mr-1 fill-current"
                />
              </span>
              <span className=" sm:text-lg">{property.lotSize} sqft.</span>
            </p>
            <p className="flex justify-between w-1/2 p-3">
              <span className="text-gray-700">
                <SvgIcon
                  name="garage"
                  className="inline w-6 h-6 mr-1 fill-current"
                />
              </span>
              <span className=" sm:text-lg">{property.garage} Garage</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SingleProperty = () => {
  const { slug } = useParams();

  const propertyContext = useContext(PropertyContext);
  const { getProperty, property, loading } = propertyContext;

  const [type, setType] = useState(null);
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    getProperty(slug);
    setLoaded(true);
    // eslint-disable-next-line
  }, [slug]);

  useEffect(() => {
    if (property !== null && !loading) {
      setType(`${property.type.type}`);
      setLoaded(false);
    }
  }, [property, loading]);

  return (
    <section className="w-full">
      {property !== null && !loaded ? (
        <>
          {/* INFORATION */}
          <div className="w-full h-full p-6 mt-16 lg:p-0">
            <div className="flex flex-col px-8 pt-8 border-b md:flex-row">
              <div className="self-center md:w-1/2">
                <PropertyInfo property={property} />
              </div>
              <div className="self-center w-full md:w-1/2">
                <Slide cover={property.imageCover} images={property.images} />
              </div>
            </div>
          </div>

          <div className="w-full mt-12">
            <div className="flex justify-center">
              <div className="w-full">
                <div className="px-4 -mt-12 sm:px-12">
                  <div className="flex flex-col mt-12 md:flex-row">
                    {/* VIRTUAL TOUR */}
                    <div className="px-2 md:w-1/2">
                      <h2 className="text-lg font-bold text-gray-800 underline sm:text-2xl">
                        Virtual Tour
                      </h2>
                      <div className="relative mt-6 overflow-hidden pt-9/16">
                        <iframe
                          title={property.title}
                          className="absolute top-0 left-0 w-full h-full"
                          src="https://www.youtube.com/embed/yl3i6z8vi8w"
                          allowFullScreen></iframe>
                      </div>
                    </div>

                    {/* --MAP-- */}
                    <div className="px-2 md:w-1/2">
                      <h2 className="text-lg font-bold text-gray-800 underline sm:text-2xl">
                        Map
                      </h2>
                      <div className="mt-6 border">
                        <div className="relative overflow-hidden pt-9/16">
                          <div className="absolute top-0 left-0 w-full h-full">
                            <Map
                              longitude={property.location.coordinates[0]}
                              latitude={property.location.coordinates[1]}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* PROPERTY DETAILS */}
                  <div className="mt-12">
                    <PropertyDetails
                      features={property.features}
                      id={property.propertyId}
                      type={property.type.type}
                      status={property.status}
                      price={property.price}
                      bedrooms={property.bedrooms}
                      bathrooms={property.bathrooms}
                      garage={property.garage}
                      lot={property.lotSize}
                      area={property.areaSize}
                      year={property.yearBuilt}
                    />
                  </div>

                  {/* --DESCRIPTION-- */}
                  <div className="mt-12">
                    <HouseDescription description={property.description} />
                  </div>

                  {/* ASK QUESTION */}
                  <div className="mt-12">
                    <AskQuestion user={property.user} />
                  </div>

                  {/* SIMIlAR SLIDE */}
                  <div className="mt-12">
                    <SimilarProperties type={type} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="w-screen h-screen">
          <Spinner />
        </div>
      )}
    </section>
  );
};

export default SingleProperty;
