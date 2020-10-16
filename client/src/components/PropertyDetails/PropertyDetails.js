import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PropertyContext from "../../context/property/propertyContext";

import PropertyIcons from "./PropertyIcons";
import { Slide } from "../Carousel";
import AgentForm from "./AgentForm";
import HouseDescription from "./HouseDescription";
import { MapSingle } from "../Mapbox";
import HouseInfo from "./HouseInfo";
import Mortgage from "./Mortgage";
import SimilarProperties from "./SimilarPropertiesSlide";
import Spinner from "../Spinner";
import Container from "../Shared/Container";

const PropertyDetails = () => {
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
          <Container>
            <div className="p-6 mt-16 lg:p-0">
              <div className="flex flex-col px-8 pt-8 border-b md:flex-row">
                <div className="self-center md:w-1/2">
                  <PropertyIcons property={property} />
                </div>
                <div className="self-center w-full md:w-1/2">
                  <Slide cover={property.imageCover} images={property.images} />
                </div>
              </div>
            </div>
          </Container>

          <div className="w-full mt-12">
            <Container>
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
                          <MapSingle
                            longitude={property.location.coordinates[0]}
                            latitude={property.location.coordinates[1]}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PROPERTY DETAILS */}
                <div className="flex flex-col w-full mt-12 md:flex-row">
                  <div className="w-full md:w-1/2">
                    <div>
                      <HouseInfo
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

                    {/* --MORTGAGE-- */}
                    <div className="mt-12">
                      <Mortgage price={property.price} />
                    </div>
                  </div>

                  {/* ASK QUESTION */}
                  <div className="w-full mt-6 md:mt-0 md:w-1/2">
                    <AgentForm user={property.user} />
                  </div>
                </div>

                {/* SIMIlAR SLIDE */}
                <div className="mt-12">
                  <SimilarProperties type={type} />
                </div>
              </div>
            </Container>
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

export default PropertyDetails;
