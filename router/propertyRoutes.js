const express = require('express');

const router = express.Router();

const {
  getAllProperty,
  createProperty,
  getProperty,
  updateProperty,
  deleteProperty,
  uploadImages,
  resizeImages,
  checkIfNew,
} = require('../controller/propertyController');

const { protect, restrictTo } = require('../controller/authController');

router.use(checkIfNew)

router
  .route('/')
  .get(getAllProperty) // available for everyone
  .post(protect, restrictTo('admin', 'agent'), createProperty);

router
  .route('/:id')
  .get(getProperty) // avalable for everyone
  .patch(
    protect,
    restrictTo('admin', 'agent'),
    uploadImages,
    resizeImages,
    updateProperty
  )
  .delete(protect, restrictTo('admin', 'agent'), deleteProperty);
module.exports = router;
