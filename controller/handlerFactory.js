const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true, //run validators from model schema
    });

    if (!doc) {
      return next(new AppError("No documents found with that ID", 404));
    }

    res.status(200).json({
      status: "success",
      data: { data: doc },
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

exports.getOne = (Model, options) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (options) query = query.populate(options);
    const doc = await query;

    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }

    res.status(200).json({
      status: "success",
      data: { data: doc },
    });
  });

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    const features = new APIFeatures(Model.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paganate();

    const filtered = new APIFeatures(Model.find(), req.query).filter();

    // const doc = await features.query.explain();
    const doc = await features.query;
    const total = await filtered.query;

    res.status(200).json({
      status: "success",
      totalResults: total.length,
      currentResults: doc.length,
      next: doc.length < req.query.limit ? null : res.next,
      prev: res.prev,
      cities: res.cities,
      data: doc,
    });
  });
