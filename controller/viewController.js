const Property = require("../models/Property");
const SavedProperty = require("../models/SavedProperty");

const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const { getAll } = require("./handlerFactory");

exports.checkIfNew = catchAsync(async (req, res, next) => {
  const properties = await Property.find({
    newTagDateExpires: {
      $lt: Date.now(),
    },
  }).select("newTag");

  // if newTagDateExpires set newTag to false
  if (properties)
    properties.forEach(async function (property) {
      property.newTag = false;
      property.newTagDateExpires = undefined;
      await property.save();
    });

  next();
});

exports.newest = (req, res, next) => {
  req.query = {
    type: { type: "single-family home" },
    limit: 6,
  };
  next();
};

exports.featuredProperties = (req, res, next) => {
  req.query.limit = 6;
  req.query.sort = "-price";
  next();
};

exports.getAffordableProperties = (req, res, next) => {
  req.query = {
    type: { type: "single-family home" },
    price: { lte: 300000 },
    limit: 6,
  };
  next();
};

// get single property details by slug
exports.getProperty = catchAsync(async (req, res, next) => {
  const property = await Property.findOne({ slug: req.params.slug }).populate({
    path: "user",
    fields: "name photo email phoneNumber",
  });

  if (!property) {
    return next(new AppError("There is no property with that name", 404));
  }

  res.status(200).json({
    status: "success",
    data: property,
  });
});

// list down all avalable cities in each state
exports.getCitiesByCurrentLocation = catchAsync(async (req, res, next) => {
  const { location } = req.query;

  // if searching from all available city in a state
  if (location !== undefined) {
    if (Object.keys(location).length > 1 && location.city === "all")
      delete location.city;
    else if (Object.keys(location).length === 1 && location.city === "all") {
      // if coming from buy page then search all city
      req.query = {};
    }
  }

  let query = {};

  // get all available city in state
  if (location && location.state) {
    query = {
      "location.state": location.state,
    };
  }

  const properties = await Property.find(query);
  res.cities = [
    ...new Set(properties.map((property) => property.location.city)),
  ];

  next();
});

exports.getNewestApartment = (req, res, next) => {
  req.query = {
    type: { type: "apartment" },
    limit: 6,
    sort: "-datePosted",
  };
  next();
};

exports.getAllApartment = (req, res, next) => {
  req.query = {
    ...req.query,
    type: { type: "apartment" },
  };
  next();
};

exports.getMySavedProperties = catchAsync(async (req, res, next) => {
  // find all saved properties that match user id
  const savedProperties = await SavedProperty.find({ user: req.user.id });
  // find all property by ids saved by user
  const propertyIds = savedProperties.map((id) => id.property);
  // get all property by ids saved by user
  const properties = await Property.find({ _id: { $in: propertyIds } });

  res.status(200).json({
    status: "success",
    results: properties.length,
    data: properties,
  });
});

exports.saveProperty = catchAsync(async (req, res, next) => {
  const { user, property } = req.body;
  const myProperty = await SavedProperty.create({ user, property });

  res.status(200).json({
    status: "success",
    data: myProperty,
  });
});

exports.getAllProperty = getAll(Property);

exports.getPropertiesByLocation = getAll(Property);
