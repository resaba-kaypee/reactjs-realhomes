const express = require("express");

const router = express.Router();

const {
  getAllUsers,
  createUser,
  getUser,
  getMe,
  updateUser,
  deleteUser,
  updateMe,
  deleteMe,
  uploadPhoto,
  resizePhoto,
} = require("../controller/userController");
const {
  signup,
  login,
  logout,
  forgotPassword,
  resetPassword,
  updateMyPassword,
  protect,
  restrictTo,
  verifyToken,
} = require("../controller/authController");

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
router.post("/forgotPassword", forgotPassword);
router.patch("/resetPassword/:token", resetPassword);
router.get("/verify-token/:token", verifyToken);

// Protected routes after this middleware
router.use(protect);
router.patch("/updateMyPassword", updateMyPassword);
router.get("/me", getMe, getUser);
router.patch("/updateMe", uploadPhoto, resizePhoto, updateMe);
router.delete("/deleteMe", deleteMe);

router.use(restrictTo("admin")); // restrict to admin the routes after this middleware
router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
