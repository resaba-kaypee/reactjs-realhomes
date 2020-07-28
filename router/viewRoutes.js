const express = require('express');

const router = express.Router();

const {
  checkIfNew,
  getProperty,
  getAllProperty,
  getPropertiesByLocation,
  getCitiesByCurrentLocation,
  newest,
  getAffordableProperties,
  featuredProperties,
} = require('../controller/viewController');

router.use(checkIfNew);

router.route('/newest').get(newest, getAllProperty);

router.route('/featured-properties').get(featuredProperties, getAllProperty);

router.route('/affordable').get(getAffordableProperties, getAllProperty);

router.route('/property/:slug').get(getProperty); // avalaible for everyone

router.route('/properties/search').get(getPropertiesByLocation); // avalaible for everyone

router.route('/properties/cities').get(getCitiesByCurrentLocation); // avalaible for everyone

module.exports = router;
