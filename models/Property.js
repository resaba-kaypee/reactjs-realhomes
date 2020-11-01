const mongoose = require("mongoose");
const slugify = require("slugify");

const propertyType = {
  category: {
    type: String,
    required: [true, "A property must have a category."],
    enum: ["commercial", "residential"],
  },
  type: {
    type: String,
    required: [true, "A property must have a type."],
    enum: [
      "office",
      "retail",
      "industrial",
      "special purpose",
      "other",
      "single-family home",
      "multi-family home",
      "villa",
      "condominium",
      "townhouse",
      "apartment",
      "land",
      "mobile",
    ],
  },
};

const propertyStatus = {
  type: String,
  required: [true, "A property must have a status!"],
  enum: ["for sale", "for rent", "for lease"],
};

const PropertySchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  propertyId: String,
  title: {
    type: String,
    required: [true, "A property must have a title!"],
  },
  status: propertyStatus,
  type: propertyType,
  description: {
    type: String,
    required: [true, "A property must have a description!"],
  },
  features: [String],
  location: {
    type: {
      type: String,
      default: "Point",
      enum: ["Point"],
      required: [true, "A property must have a address"],
    },
    coordinates: [Number], // longitude first then latitude
    address: String,
    city: String,
    state: String,
    zipcode: Number,
  },
  price: {
    type: Number,
    required: [true, "A property must have price!"],
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

PropertySchema.index({ price: 1 });
PropertySchema.index({ slug: 1 });
PropertySchema.index({ location: "2dsphere" });

PropertySchema.pre("save", function (next) {
  if (this.newTagDateExpires > Date.now())
    this.slug = slugify(this.title, { lower: true });
  next();
});

PropertySchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name email phoneNumber, photo",
  });
  next();
});

module.exports = mongoose.model("Property", PropertySchema);
