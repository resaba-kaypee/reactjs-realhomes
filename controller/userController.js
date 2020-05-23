const multer = require('multer');
const sharp = require('sharp');
const User = require('../models/User');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const { getAll, getOne, updateOne, deleteOne } = require('./handlerFactory');

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only image.', 400), false);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

exports.uploadPhoto = upload.single('photo');

exports.resizePhoto = catchAsync(async (req, res, next) => {
  if (!req.file) return next();
  req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ qulity: 90 })
    .toFile(`public/users/${req.file.filename}`);

  next();
});

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((val) => {
    if (allowedFields.includes(val)) {
      newObj[val] = obj[val];
    }
  });
  return newObj;
};

// @route   GET api/v1/users/me
// @desc    get users own data
// @access  Private
exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

// @route   Patch api/v1/users/updateMe
// @desc    Update current user
// @access  Private
exports.updateMe = catchAsync(async (req, res, next) => {
  // 1.) Create an error in user is trying to update the password
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'This route is not for password updates. Please use /updateMypassword',
        400
      )
    );
  }
  // 2.) Filtered out unwanted fields
  const filterBody = filterObj(req.body, 'name', 'email', 'phoneNumber');
  // if there is a photo being uploaded (req.file)
  if (req.file) filterBody.photo = req.file.filename;
  // 3.) Update user document
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filterBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    data: { user: updatedUser },
  });
});

// @route   DELETE api/v1/users/deleteMe
// @desc    Deactivate current user
// @access  Private
exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });
  res.status(204).json({
    status: 'success',
    data: null,
  });
});


// ROUTES RESTRICTED TO ADMIN ONLY

// @route   POST api/v1/users
// @desc    Inactive route
// @access  Private (admin)
exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not defined! Please use /signup instead',
  });
};

// @route   GET api/v1/users
// @desc    Get all users
// @access  Private (admin)
exports.getAllUsers = getAll(User);

// @route   GET api/v1/users/:id
// @desc    Get user
// @access  Private (admin)
exports.getUser = getOne(User);

// @route   PATCH api/v1/users/:id
// @desc    update a user (do not update password here)
// @access  Private (admin)
exports.updateUser = updateOne(User);

// @route   DELETE api/v1/users/:id
// @desc    permanently delete user
// @access  Private (admin)
exports.deleteUser = deleteOne(User);
