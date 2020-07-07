const multer = require('multer');
const sharp = require('sharp');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const Property = require('../models/Property');

const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} = require('./handlerFactory');

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only image.', 400), false);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

exports.uploadImages = upload.fields([
  { name: 'imageCover', maxCount: 1 },
  { name: 'images', maxCount: 3 },
]);

exports.resizeImages = catchAsync(async (req, res, next) => {
  if (!req.files) return next();

  const property = await Property.findById(req.params.id).select('slug');

  // 1.) Cover image
  req.body.imageCover = `${property.slug}-${Date.now()}-cover.jpg`;

  await sharp(req.files.imageCover[0].buffer)
    .resize(2000, 1333)
    .toFormat('jpeg')
    .jpeg({ qulity: 90 })
    .toFile(`client/src/assets/img/property/${req.body.imageCover}`);

  // 2.) Images
  req.body.images = [];

  await Promise.all(
    req.files.images.map(async (file, i) => {
      const filename = `${property.slug}-${Date.now()}-${i + 1}.jpg`;

      await sharp(file.buffer)
        .resize(2000, 1333)
        .toFormat('jpeg')
        .jpeg({ qulity: 90 })
        .toFile(`client/src/assets/img/property/${filename}`);

      req.body.images.push(filename);
    })
  );

  next();
});

exports.checkIfNew = catchAsync(async (req, res, next) => {
  const properties = await Property.find({
    newTagDateExpires: {
      $lt: Date.now(),
    },
  }).select('newTag');

  // if newTagDateExpires set newTag to false
  if (properties)
    properties.forEach(async function (property) {
      property.newTag = false;
      property.newTagDateExpires = undefined;
      await property.save();
    });

  next();
});

exports.setPropertyUserIds = (req, res, next) => {
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.featuredProperties = (req, res, next) => {
  req.query.limit = 6;
  req.query.sort = '-price';
  next();
};

exports.getProperty = getOne(Property);

exports.getAllProperty = getAll(Property);

exports.createProperty = createOne(Property);

exports.updateProperty = updateOne(Property);

exports.deleteProperty = deleteOne(Property);
