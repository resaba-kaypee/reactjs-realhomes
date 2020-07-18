const express = require('express');

const router = express.Router();

const {
  checkIfNew,
  getProperty,
  getAllProperty,
  getPropertiesByLocation,
  featuredProperties,
} = require('../controller/viewController');

router.use(checkIfNew);

router.route('/featured-properties').get(featuredProperties, getAllProperty);

router.route('/property/:slug').get(getProperty); // avalaible for everyone

router.route('/properties/search').get(getPropertiesByLocation); // avalaible for everyone

module.exports = router;