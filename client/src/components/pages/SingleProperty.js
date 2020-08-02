import React, { useContext, useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import PropertyContext from '../../context/property/propertyContext';
import Slide from '../carousel/Slide';
import SlideSimple from '../carousel/SlideSimple';
import SvgIcon from '../svg/SvgIcon';
import Map from '../layout/Map';
import AskQuestion from '../layout/AskQuestion';
import PropertyDetails from '../layout/PropertyDetails';
import HouseDescription from '../layout/HouseDescription';

const SingleProperty = () => {
  const { slug } = useParams();
  const location = useLocation();

  const propertyContext = useContext(PropertyContext);
  const {
    getProperty,
    getSimilarProperties,
    property,
    properties,
    loading,
  } = propertyContext;

  const [type, setType] = useState(null);

  location.search = `?type[type]=${type}`;

  useEffect(() => {
    getProperty(slug);
    // eslint-disable-next-line
  }, [slug]);

  useEffect(() => {
    if (property !== null && !loading) {
      setType(`type[type]=${property.type.type}`);
    }
  }, [property, loading]);

  useEffect(() => {
    if (type !== null) {
      getSimilarProperties(type);
    }
    // eslint-disable-next-line
  }, [type]);

  return (
    <section className="w-full mt-16">
      {property !== null && !loading ? (
        <>
          {/* INFORATION */}
          <div className="relative w-full h-full bg-gray-900">
            <div className="flex justify-center">
              <div className="w-full max-w-5xl sm:px-12">
                <div className="px-4 pt-12 pb-24">
                  {/* --TITLE-- */}
                  <h4 className="pt-5 text-2xl font-semibold leading-tight text-center text-white sm:text-3xl">
                    {property.title}
                  </h4>
                  <div className="pt-4 pb-2">
                    <div className="flex justify-between">
                      <div className="flex items-center text-yellow-600">
                        <SvgIcon
                          name="marker"
                          className="w-6 h-6 mr-1 fill-current"
                        />
                        <p className="text-white truncate sm:text-lg">
                          {property.location.address}
                        </p>
                      </div>

                      <div className="flex items-center text-yellow-600">
                        <SvgIcon
                          name="map"
                          className="w-6 h-6 mr-1 fill-current"
                        />
                        <p className="text-white sm:text-lg">
                          {property.location.state}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* --INFO-- */}
                  <div className="px-2 pt-3 mt-4 border-t-2 border-gray-400">
                    <div className="flex flex-wrap">
                      <p className="flex justify-between w-1/2 p-3">
                        <span className="text-yellow-600">
                          <SvgIcon
                            name="bed"
                            className="inline w-6 h-6 mr-1 fill-current"
                          />
                        </span>
                        <span className="text-white sm:text-lg">
                          {property.bedrooms} Beds
                        </span>
                      </p>
                      <p className="flex justify-between w-1/2 p-3">
                        <span className="text-yellow-600">
                          <SvgIcon
                            name="bath"
                            className="inline w-6 h-6 mr-1 fill-current"
                          />
                        </span>
                        <span className="text-white sm:text-lg">
                          {property.bathrooms} Baths
                        </span>
                      </p>
                      <p className="flex justify-between w-1/2 p-3">
                        <span className="text-yellow-600">
                          <SvgIcon
                            name="ruler"
                            className="inline w-6 h-6 mr-1 fill-current"
                          />
                        </span>
                        <span className="text-white sm:text-lg">
                          {property.lotSize} sqft.
                        </span>
                      </p>
                      <p className="flex justify-between w-1/2 p-3">
                        <span className="text-yellow-600">
                          <SvgIcon
                            name="garage"
                            className="inline w-6 h-6 mr-1 fill-current"
                          />
                        </span>
                        <span className="text-white sm:text-lg">
                          {property.garage} Garage
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full">
            <div className="flex justify-center">
              <div className="w-full max-w-5xl">
                <div className="px-4 -mt-12 sm:px-12">
                  {/* IMAGE SLIDE */}
                  <div className="">
                    <Slide
                      cover={property.imageCover}
                      images={property.images}
                    />
                  </div>

                  {/* VIRTUAL TOUR */}
                  <div className="mt-12">
                    <h2 className="text-lg font-bold text-gray-800 underline sm:text-2xl">
                      Virtual Tour
                    </h2>
                    <div className="relative mt-6 overflow-hidden pt-9/16">
                      <iframe
                        title={property.title}
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/yl3i6z8vi8w"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>

                  {/* --MAP-- */}
                  <div className="mt-12">
                    <h2 className="text-lg font-bold text-gray-800 underline sm:text-2xl">
                      Map
                    </h2>
                    <div className="mt-6">
                      <Map
                        longitude={property.location.coordinates[0]}
                        latitude={property.location.coordinates[1]}
                      />
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
                    <h2 className="text-lg font-bold text-gray-800 underline sm:text-2xl">
                      Similar Properties
                    </h2>
                    <div className="mt-6">
                      {properties !== null && !loading ? (
                        <SlideSimple properties={properties} />
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h1>SPINNER</h1>
      )}
    </section>
  );
};

export default SingleProperty;
