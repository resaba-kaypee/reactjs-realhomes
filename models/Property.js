const mongoose = require('mongoose');

// * Property ID [string]

// * Property types [string]
//     * Commercial
//       * Office
//       * Retail
//       * Industrial
//       * Special purpose
//     * Residencial
//       * Single-Family Home
//       * Condominium
//       * Townhouse
//       * Land

// * Property Status [string]
//     * For Rent
//     * For Sale

// * Property title [string]

// * Property description [string]

// * Property features eg. Home theather, Marble floors, Garden [array string]

// * Property location
//   * Address [string]
//   * State [string]
//   * Zipcode [number]

// * Basic information
//   * Sale or rent price [number]
//     * Post fix [per month/ per year]
//   * Area size [number]
//     * Size post fix [sq ft/ sq m]
//   * Lot size [number]
//     * Size post fix [sq ft/ sq m]
//   * Bedrooms [number]
//   * Bathrooms [number]
//   * Garage [number]
//   * Year built [date]

// * Images gallery [array images]

// * Video [url]

// * Floor plans
//   * Floor name eg. 1st fl, 2nd fl [string]
//   * Description [string]
//   * Floor size [number]
//     * Size post fix [sq ft/ sq m]
//   * Bedrooms [nummber]
//   * Bathrooms [number]
//   * Floor plan image [image]

// * Property Agent information
//   * Name
//   * Phone
//   * Email
//   * Image

const propertyType = {
  category: {
    type: String,
    enum: ['commercial', 'residential'],
  },
  type: {
    type: String,
    enum: [
      'office',
      'retail',
      'industrial',
      'special purpose',
      'Other',
      'single-family home',
      'condominium',
      'townhouse',
      'land',
    ],
  },
};

const propertyStatus = {
  type: String,
  required: [true, 'A property must have a status!'],
  enum: ['for sale', 'for rent', 'for lease'],
};

const PropertySchema = mongoose.Schema({
  status: propertyStatus,
  type: propertyType,
  title: {
    type: String,
    required: [true, 'A property must have a title!'],
  },
  description: {
    type: String,
    required: [true, 'A property must have a description!'],
  },
  features: [String],
  location: {
    type: String,
    default: 'Point',
    enum: ['Point'],
    coordinates: [Number], // longitude first then latitude
    address: String,
    day: Number,
  },
  information: {
    price: String, // 450$ per/mo
    areaSize: String, // 4500 sq.ft.
    lotSize: String, // 4800 sq.ft.
    bedrooms: Number,
    bathrooms: Number,
    garage: Number,
    year: Date,
  },
  images: [Array],
  video: [String],
});

module.exports = mongoose.model('Property', PropertySchema);
