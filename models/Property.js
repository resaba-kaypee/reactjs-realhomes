const mongoose = require('mongoose');
const slugify = require('slugify');

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
    required: [true, 'A property must have a category.'],
    enum: ['commercial', 'residential'],
  },
  type: {
    type: String,
    required: [true, 'A property must have a type.'],
    enum: [
      'office',
      'retail',
      'industrial',
      'special purpose',
      'other',
      'single-family home',
      'multi-family home',
      'villa',
      'condominium',
      'townhouse',
      'apartment',
      'land',
      'mobile',
    ],
  },
};

const propertyStatus = {
  type: String,
  required: [true, 'A property must have a status!'],
  enum: ['for sale', 'for rent', 'for lease'],
};

const PropertySchema = mongoose.Schema({
  // user: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: 'user',
  // },
  propertyId: String,
  title: {
    type: String,
    required: [true, 'A property must have a title!'],
  },
  status: propertyStatus,
  type: propertyType,
  description: {
    type: String,
    required: [true, 'A property must have a description!'],
  },
  features: [String],
  location: {
    type: {
      type: String,
      default: 'Point',
      enum: ['Point'],
      required: [true, 'A property must have a address'],
    },
    coordinates: [Number], // longitude first then latitude
    address: String,
    state: String,
    zipcode: Number,
  },
  price: {
    type: Number,
    required: [true, 'A property must have price!'],
  }, // 450$ per/mo
  slug: String,
  areaSize: Number, // 4500 sq.ft.
  lotSize: Number, // 4800 sq.ft.
  bedrooms: Number,
  bathrooms: Number,
  garage: Number,
  imageCover: String,
  images: [String],
  video: String,
  yearBuilt: Date,
  newTag: {
    type: Boolean,
    default: true,
  },
  newTagDateExpires: {
    type: Date,
    default: Date.now() + 7 * 86400000,
  },
  datePosted: {
    type: Date,
    default: Date.now(),
  },
});


PropertySchema.index({ price: 1});
PropertySchema.index({ slug: 1 });
PropertySchema.index({ location: '2dsphere' });

PropertySchema.pre('save', function (next) {
  if (this.newTagDateExpires > Date.now())
    this.slug = slugify(this.title, { lower: true });
  next();
});

module.exports = mongoose.model('Property', PropertySchema);
