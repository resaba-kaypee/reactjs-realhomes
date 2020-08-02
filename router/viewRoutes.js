const express = require('express');

const router = express.Router();

const {
  checkIfNew,
  getProperty,
  getAllProperty,
  getPropertiesByLocation,
  getCitiesByCurrentLocation,
  getAllApartment,
  newest,
  getAffordableProperties,
  featuredProperties,
} = require('../controller/viewController');

router.use(checkIfNew);

router.route('/newest').get(newest, getAllProperty);

router.route('/featured-properties').get(featuredProperties, getAllProperty);

router.route('/affordable').get(getAffordableProperties, getAllProperty);

router.route('/property/:slug').get(getProperty); // avalaible for everyone

router.route('/rentals').get(getAllApartment, getAllProperty);

router
  .route('/properties/search')
  .get(getCitiesByCurrentLocation, getPropertiesByLocation); // avalaible for everyone

module.exports = router;
