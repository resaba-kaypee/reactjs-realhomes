const express = require('express');

const router = express.Router();

const {
  getAllProperty,
  createProperty,
  getProperty,
  updateProperty,
  deleteProperty,
} = require('../controller/propertyController');

const { protect, restrictTo } = require('../controller/authController');

router
  .route('/')
  .get(getAllProperty) // available for everyone
  .post(protect, restrictTo('admin', 'agent'), createProperty);

router
  .route('/:id')
  .get(getProperty) // avalable for everyone
  .patch(protect, restrictTo('admin', 'agent'), updateProperty)
  .delete(protect, restrictTo('admin', 'agent'), deleteProperty);
module.exports = router;
