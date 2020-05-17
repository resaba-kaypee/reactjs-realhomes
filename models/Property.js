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

const requiredS = {
  type: String,
  required: true,
};

const type = {
  type: String,
  required: [true, 'A property must have atype'],
  enum: ['Office', 'Retail', 'Industrial', 'Special purpose', 'Other'],
};

const PropertySchema = mongoose.Schema({
  type: {
    type: String,
    enum: [''],
  },
  status: type,
  name: requiredS,
  description: requiredS,
  features: [Array],
  location: {
    address: [String],
    state: [String],
    zipcode: [Number],
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
