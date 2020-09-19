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
  deletePropertyFromList,
  limitPerPage,
} = require("../controller/viewController");

router.use(checkIfNew);

router.route("/auth").get(isLoggedIn);

router.route("/newest").get(limitPerPage, newest, getAllProperty);

router.route("/featured-properties").get(featuredProperties, getAllProperty);

router
  .route("/affordable")
  .get(limitPerPage, getAffordableProperties, getAllProperty);

router.route("/property/:slug").get(getProperty); // avalaible for everyone

router.route("/rentals").get(limitPerPage, getNewestApartment, getAllProperty);

router
  .route("/rentals-search")
  .get(
    limitPerPage,
    getAllApartment,
    getCitiesByCurrentLocation,
    getAllProperty
  );

router
  .route("/properties-search")
  .get(limitPerPage, getCitiesByCurrentLocation, getPropertiesByLocation); // avalaible for everyone

// for users

// after logging in
router.get("/my-saved-properties", protect, getMySavedProperties);
router.delete(
  "/delete-property-from-list/:id",
  protect,
  deletePropertyFromList
);
router.post("/save-property", protect, saveProperty);

module.exports = router;
