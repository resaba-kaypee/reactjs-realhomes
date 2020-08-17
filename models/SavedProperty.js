const mongoose = require('mongoose');


const SavedPropertySchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'A saved property must have a user.'],
  },
  property: {
    type: mongoose.Schema.ObjectId,
    ref: 'Property',
    required: [true, 'A saved property must have a property.'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
})

SavedPropertySchema.pre(/^find/, function (next) {
  this.populate('user').populate("property");
  next();
});

module.exports = mongoose.model('SavedProperty', SavedPropertySchema);