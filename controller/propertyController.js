exports.getProperty = (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'get a property doc'
  })
};

exports.getAllProperty = (req, res, next) => {
    res.status(200).json({
      status: 'success',
      message: 'get all property doc',
    });
};

exports.createProperty = (req, res, next) => {
    res.status(201).json({
      status: 'success',
      message: 'create a property doc',
    });
};

exports.updateProperty = (req, res, next) => {
    res.status(200).json({
      status: 'success',
      message: 'update a property doc',
    });
};

exports.deleteProperty = (req, res, next) => {
    res.status(204).json({
      status: 'success',
      message: 'delete a property doc',
    });
};
