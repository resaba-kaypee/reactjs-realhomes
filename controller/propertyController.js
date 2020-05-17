const Property = require('../models/Property');

const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} = require('./handlerFactory');

exports.getProperty = getOne(Property);

exports.getAllProperty = getAll(Property);

exports.createProperty = createOne(Property);

exports.updateProperty = updateOne(Property);

exports.deleteProperty = deleteOne(Property);
