const Property = require('../models/Property');

const catchAsync = require('../utils/catchAsync');
const convertJsonToDot = require('../utils/jsonToDot');
const AppError = require('../utils/appError');

const { getAll } = require('./handlerFactory');

exports.checkIfNew = catchAsync(async (req, res, next) => {
  const properties = await Property.find({
    newTagDateExpires: {
      $lt: Date.now(),
    },
  }).select('newTag');

  // if newTagDateExpires set newTag to false
  if (properties)
    properties.forEach(async function (property) {
      property.newTag = false;
      property.newTagDateExpires = undefined;
      await property.save();
    });

  next();
});

exports.featuredProperties = (req, res, next) => {
  req.query.limit = 6;
  req.query.sort = '-price';
  next();
};

exports.getProperty = catchAsync(async (req, res, next) => {
  const property = await Property.findOne({ slug: req.params.slug }).populate({
    path: 'user',
    fields: 'name photo email phoneNumber',
  });

  if (!property) {
    return next(new AppError('There is no property with that name', 404));
  }

  res.status(200).json({
    status: 'success',
    data: property,
  });
});

exports.getPropertiesByLocation = getAll(Property);

exports.getAllProperty = getAll(Property);
