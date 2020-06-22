import React from 'react';
import Slide from '../carousel/Slide';
import SlideSimple from '../carousel/SlideSimple';
import SvgIcon from '../svg/SvgIcon';
import Map from '../layout/Map';
import AskQuestion from '../layout/AskQuestion';

const SingleProperty = () => {
  const property = {
    propertyId: 'O5865916',
    title: 'Single family home in 3725 Shawn Circle',
    status: 'for sale',
    type: {
      category: 'residential',
      type: 'single-family home',
    },
    description:
      'Beautifully styled and maintained 4 bedroom, 2 bathroom, 2 car garage contemporary style home in a great location! This home features an open-concept floor plan with great room (formal living and dining room combo), eat-in kitchen, and massive screened patio perfect for entertaining! Renovated kitchen includes stainless steel appliances, granite counter tops, island for additional storage and prep space, and gorgeous travertine back splash. Master bedroom suite features walk-in closet and master bathroom with dual vanities and sinks, spa tub with separate shower stall, and water closet. High ceilings and large ceramic tile throughout, with laminate wood-style flooring in the bedrooms. Upgraded 5 baseboards in the common areas. New HVAC installed in 2018. Large sliding glass doors just off the family room open to a large tiled and screened patio with fenced backyard, featuring a covered overhang perfect for grilling. Mature fruit trees (mango and banana) in the backyard. Front yard is well maintained and beautifully landscaped with mature shrubbery, palm trees, and flowers. Located in Tanner Crossings, a deed-restricted community with sidewalks, a community pool, and playground maintained by the HOA. Conveniently located near grocery stores, restaurants, University of Central Florida (UCF), Econlockhatchee Sandhills Conservation Area (trails and hiking), Central Florida Research Park, AdventHealth East Orlando Emergency Room, and Waterford Lakes Shopping Center. Easy access to the 408 gets you downtown in 20 minutes and to the airport within 30 minutes.',
    features: [
      'open concept floor plan',
      'patio',
      'granite counter tops',
      'walk-in closet',
      'backyard',
      'frontyard',
    ],
    location: {
      type: 'Point',
      coordinates: [-81.169915, 28.599849],
      address: '3725 Shawn Cir',
      state: 'Orlando, FL',
      zipcode: 32826,
    },
    price: 285000,
    areaSize: 1952,
    lotSize: 5663,
    bedrooms: 4,
    bathrooms: 2,
    garage: 2,
    imageCover: 'single-family-house-in-3725-shawn-circle-cover.jpg',
    images: [
      'single-family-house-in-3725-shawn-circle-1.jpg',
      'single-family-house-in-3725-shawn-circle-2.jpg',
      'single-family-house-in-3725-shawn-circle-3.jpg',
    ],
    slug: 'a-single-family-house-in-3725-shawn-circle',
    video: '#',
    yearBuilt: '2000-05-17T14:35:37.889+00:00',
  };

  const user = {
    name: 'Sam Smith',
    email: 'sam@gmail.com',
    phoneNumber: '111-1111',
    photo: 'agent.png',
  };
  return (
    <section className="w-full mt-16">
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
                    <SvgIcon name="map" className="w-6 h-6 mr-1 fill-current" />
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
                <Slide cover={property.imageCover} images={property.images} />
              </div>

              {/* FEATURES */}
              <div className="mt-12">
                <h2 className="text-lg font-bold text-gray-800 underline sm:text-2xl">
                  Property Features
                </h2>

                <ul className="p-4 mt-6 bg-gray-300 rounded">
                  {property.features.map((feature) => (
                    <li key={feature} className="p-1 font-semibold capitalize">
                      ✔ {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* VIRTUAL TOUR */}
              <div className="mt-12">
                <h2 className="text-lg font-bold text-gray-800 underline sm:text-2xl">
                  Virtual Tour
                </h2>
                <div className="relative mt-6 overflow-hidden pt-9/16">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/yl3i6z8vi8w"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* --DESCRIPTION-- */}
              <div className="mt-12">
                <h2 className="text-lg font-bold text-gray-800 underline sm:text-2xl">
                  House Description
                </h2>
                <p className="px-2 mt-6 text-xs text-center text-gray-700 sm:text-lg">
                  {property.description}
                </p>
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

              {/* --DETAILS-- */}
              <div className="mt-12">
                <h2 className="text-lg font-bold text-gray-800 underline sm:text-2xl">
                  Property Details
                </h2>
                <ul className="flex flex-col p-2 mt-6 bg-gray-300 rounded">
                  <li className="flex justify-between p-2">
                    <span className="font-semibold sm:text-lg">
                      Property ID
                    </span>
                    <span className="capitalize">{property.propertyId}</span>
                  </li>
                  <li className="flex justify-between p-2">
                    <span className="font-semibold sm:text-lg">
                      Property Type
                    </span>
                    <span className="capitalize">{property.type.type}</span>
                  </li>
                  <li className="flex justify-between p-2">
                    <span className="font-semibold sm:text-lg">Status</span>
                    <span className="capitalize">{property.status}</span>
                  </li>
                  <li className="flex justify-between p-2">
                    <span className="font-semibold sm:text-lg">Price</span>
                    <span className="capitalize">$ {property.price}</span>
                  </li>
                  <li className="flex justify-between p-2">
                    <span className="font-semibold sm:text-lg">Bedrooms</span>
                    <span className="capitalize">{property.bedrooms}</span>
                  </li>
                  <li className="flex justify-between p-2">
                    <span className="font-semibold sm:text-lg">Bathrooms</span>
                    <span className="capitalize">{property.bathrooms}</span>
                  </li>
                  <li className="flex justify-between p-2">
                    <span className="font-semibold sm:text-lg">Garage</span>
                    <span className="capitalize">{property.garage}</span>
                  </li>
                  <li className="flex justify-between p-2">
                    <span className="font-semibold sm:text-lg">Lot size</span>
                    <span className="capitalize">{property.lotSize} sqft.</span>
                  </li>
                  <li className="flex justify-between p-2">
                    <span className="font-semibold sm:text-lg">Area size</span>
                    <span className="capitalize">
                      {property.areaSize} sqft.
                    </span>
                  </li>
                  <li className="flex justify-between p-2">
                    <span className="font-semibold sm:text-lg">Year Built</span>
                    <span className="capitalize">{property.yearBuilt}</span>
                  </li>
                </ul>
              </div>

              {/* AGENT INFO */}
              <div className="mt-12">
                <AskQuestion user={user} />
              </div>

              {/* SIMIlAR SLIDE */}
              <div className="mt-12">
                <h2 className="text-lg font-bold text-gray-800 underline sm:text-2xl">
                  Similar Properties
                </h2>
                <div className="mt-6">
                  <SlideSimple />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProperty;
