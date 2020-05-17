const express = require('express');

const router = express.Router();

const {
  getAllProperty,
  createProperty,
  getProperty,
  updateProperty,
  deleteProperty,
} = require('../controller/propertyController');

router.route('/').get(getAllProperty).post(createProperty);

router
  .route('/:id')
  .get(getProperty)
  .patch(updateProperty)
  .delete(deleteProperty);
module.exports = router;
