const express = require('express');

const router = express.Router();

const {
  checkIfNew,
  getAllProperty,
  getProperty,
  featuredProperties,
} = require('../controller/viewController');

router.use(checkIfNew);

router.route('/featured-properties').get(featuredProperties, getAllProperty);

router.route('/property/:slug').get(getProperty); // avalable for everyone

module.exports = router;
