const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Please tell us your name.'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email.'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email.'],
  },
  photo: { type: String, default: 'default.jpg' },
  role: {
    type: String,
    enum: ['user', 'agen', 'admin'],
    default: 'user',
  },
  password: {
    type: String,
    required: [true, 'Please provide a password.'],
    minlength: 8,
    select: false, // exclude in output
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password.'],
    validate: {
      // Only works on CREAT and SAVE
      validator: function (val) {
        return val === this.password;
      },
      message: 'Passwords are not the same!',
    },
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

//+++++++++++++++++++++++++++++++++++++++++>> MIDDLEWARES
//+++++++++++++++++++++++++++++++++++++++++>>
UserSchema.pre('save', async function (next) {
  // Only run this function if password is modified
  if (!this.isModified('password')) return next();

  // hash password at cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;
  next();
});

UserSchema.pre('save', function (next) {
  // if the document is new, move on
  if (!this.isModified('password') || this.isNew) return next();

  // When setting a new password, before saving the new password, update the passwordChangedAt date
  this.passwordChangedAt = Date.now() - 1000;
  next();
});

UserSchema.pre(/^find/, function (next) {
  // show only acounts that is active
  this.find({ active: { $ne: false } });

  next();
});

//+++++++++++++++++++++++++++++++++++++++++>> METHODS
//+++++++++++++++++++++++++++++++++++++++++>>
UserSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

UserSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const timeStamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);

    return JWTTimestamp < timeStamp;
  }

  // false password not changed
  return false;
};

UserSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  console.log({ resetToken }, this.passwordResetToken);

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

module.exports = mongoose.model('User', UserSchema);
