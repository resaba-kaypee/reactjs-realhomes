const express = require("express");

const router = express.Router();

const { protect, isLoggedIn } = require("../controller/authController");

const {
  checkIfNew,
  getProperty,
  getAllProperty,
  getAllApartment,
  getPropertiesByLocation,
  getCitiesByCurrentLocation,
  getNewestApartment,
  newest,
  getAffordableProperties,
  featuredProperties,
  saveProperty,
  getMySavedProperties,
} = require("../controller/viewController");

router.use(checkIfNew);

router.route("/auth").get(isLoggedIn);

router.route("/newest").get(newest, getAllProperty);

router.route("/featured-properties").get(featuredProperties, getAllProperty);

router.route("/affordable").get(getAffordableProperties, getAllProperty);

router.route("/property/:slug").get(getProperty); // avalaible for everyone

router.route("/rentals").get(getNewestApartment, getAllProperty);

router
  .route("/rentals/search")
  .get(getAllApartment, getCitiesByCurrentLocation, getAllProperty);

router
  .route("/properties/search")
  .get(getCitiesByCurrentLocation, getPropertiesByLocation); // avalaible for everyone

// for users

// after logging in
router.get("/my-saved-properties", protect, getMySavedProperties);
router.post("/save-property", protect, saveProperty);

module.exports = router;
