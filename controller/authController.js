const crypto = require("crypto");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Email = require("../utils/email");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createAndSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    // testing production env
    // secure: process.env.NODE_ENV === "production",
    // Heroku specific options
    secure: req.secure || req.headers["x-forwarded-proto"] === "https",
  };

  res.cookie("jwt", token, cookieOptions);

  // Remove the password from the output
  user.password = undefined;
  res.status(statusCode).json({
    status: "success",
    token,
    data: { user },
  });
};

// @route   POST api/v1/users/signup
// @desc    Sign up new user
// @access  Public
exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);
  const url = `${req.protocol}://${req.get("host")}/me`;
  await new Email(newUser, url).sendWelcome();

  createAndSendToken(newUser, 201, req, res);
});

// @route   POST api/v1/users/login
// @desc    Log in user
// @access  Public
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1.) Check if email and password exist
  if (!email || !password) {
    return next(new AppError("Please provide email and password.", 400));
  }
  // 2.) Check if user exist && password is correct
  const user = await User.findOne({ email }).select("+password"); // include password in output

  if (!user) return next(new AppError("Incorrect email or password.", 400));

  // if (user.loginAttemptsExpires < Date.now()) {
  //   user.loginAttempts = 0;
  //   user.loginAttemptsExpires = undefined;
  // }

  // iit block the user from logging in ultil date expires and stops from setting a new expire date
  // if (user.loginAttemptsExpires > Date.now()) {
  //   return next(
  //     new AppError(
  //       `Maximum login attempts exceeded, Please try again in ${Math.ceil(
  //         (user.loginAttemptsExpires - Date.now()) / 1000
  //       )} seconds.`,
  //       400
  //     )
  //   );
  // }

  // if (!(await user.correctPassword(password, user.password))) {
  //   // if password is incorrect increment login attempts
  //   user.loginAttempts += 1;

  //   // if login attempts is greater than allowed attempts set a date to be able to log in again
  //   if (user.loginAttempts > 5) {
  //     user.loginAttempts = 0;
  //     user.loginAttemptsExpires = Date.now() + 5 * 60 * 1000;
  //     user.save({ validateBeforeSave: false });

  //     return next(
  //       new AppError(
  //         `Maximum login attempts exceeded, Please try again in ${Math.ceil(
  //           (user.loginAttemptsExpires - Date.now()) / 1000
  //         )} seconds.`,
  //         400
  //       )
  //     );
  //   }

  //   user.save({ validateBeforeSave: false });
  //   return next(
  //     new AppError(
  //       `Incorrect password. Attempts ${user.loginAttempts} out of 5`,
  //       400
  //     )
  //   );
  // }

  // 3.) If everything is ok, send token to client
  createAndSendToken(user, 200, req, res);
});

// @route   POST api/v1/users/logout
// @desc    Log out user
// @access  Public
exports.logout = (req, res) => {
  res.cookie("jwt", "logged out", {
    expires: new Date(Date.now() + 0),
    httpOnly: true,
  });

  res.status(200).json({
    status: "success",
  });
};

// @route   ...
// @desc    Protect routes
// @access  ...
exports.protect = catchAsync(async (req, res, next) => {
  let token;
  // 1.) Getting token and check if its there
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }
  // 2.) Verify token
  if (token === null || token === "{{jwt}}") {
    return next(new AppError("You are not logged in, Please log in.", 401));
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // 3.) Check if user still exist
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      new AppError("The user belonging to this token no longer exist.", 401)
    );
  }
  // 4.) Check if user changed password after the token was issued
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError("User recently changed password! Please log in again.", 401)
    );
  }

  // Grant access to protected route
  req.user = currentUser;
  res.locals.user = currentUser;
  next();
});

// @route   ...
// @desc    only for rendered pages, no error
// @access  ...
exports.isLoggedIn = catchAsync(async (req, res, next) => {
  if (req.cookies.jwt) {
    // 1.) Verify token
    const decoded = await promisify(jwt.verify)(
      req.cookies.jwt,
      process.env.JWT_SECRET
    );
    // 2.) Check if user still exist
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return next();
    }
    // 3.) Check if user changed password after the token was issued
    if (currentUser.changedPasswordAfter(decoded.iat)) {
      return next();
    }

    // There is a logged in user
    res.locals.user = currentUser; //pug gets access to user variable
    res.status(200).json({
      data: currentUser,
    });
  }
});

// @route   Delete api/v1/tours/
// @desc    Admin and lead-guide can delete tours
// @access  Private
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    // roles ['admin', 'agent']
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You do not have permission to perform this action.", 403)
      );
    }

    next();
  };
};

// @route   POST api/v1/users/forgotPassword
// @desc    Request for reset password
// @access  Private
exports.forgotPassword = catchAsync(async (req, res, next) => {
  // 1.) Get user on posted email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError("There is no user with that email.", 404));
  }

  // 2.) Generate the random reset token
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  // 3.) Send it to user's email
  try {
    // const resetURL = `${req.protocol}://${req.get(
    //   "host"
    // )}/api/v1/users/resetPassword/${resetToken}`;

    let resetURL = "";

    if (process.env.NODE_ENV === "production") {
      resetURL = `${req.protocol}://${req.get(
        "host"
      )}/resetPassword/${resetToken}`;
    } else {
      resetURL = `http://localhost:3000/resetPassword/${resetToken}`;
    }

    console.log(resetURL);

    await new Email(user, resetURL).sendPasswordReset();

    res.status(200).json({
      status: "success",
      message: "Token sent to email!",
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;

    await user.save({ validateBeforeSave: false });
    return next(
      new AppError(
        "There was a error sending to email. Please try again later.",
        500
      )
    );
  }
});

// @route   Patch api/v1/users/resetPassword/:token
// @desc    Reset current user's password
// @access  Private
exports.resetPassword = catchAsync(async (req, res, next) => {
  // 1.) Get the user based on the token
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    passwordResetToken: hashedToken, //comparare the users token from params and db
    passwordResetExpires: { $gt: Date.now() }, // check the token if expired
  });

  // 2.) If token has not expired, and there is new user, set the new password
  if (!user) {
    return next(new AppError("Token is invalid or has expired.", 400));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  // 3.) Update changedPasswordAt property for the user

  // 4.) Log the user in, send JWT
  createAndSendToken(user, 200, req, res);
});

// @route   Patch api/v1/users/verify-token/:token
// @desc    Users reset token
// @access  Private
exports.verifyToken = catchAsync(async (req, res, next) => {
  // 1.) Get the user based on the token
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    passwordResetToken: hashedToken, //comparare the users token from params and db
    passwordResetExpires: { $gt: Date.now() }, // check the token if expired
  });

  // 2.) If token has not expired, and there is new user, set the new password
  if (!user) {
    return next(new AppError("Token is invalid or has expired.", 400));
  }

  res.status(200).json({
    status: "Token verified",
  });
});

// @route   Patch api/v1/users/updatePassword
// @desc    Change current user's password
// @access  Private
exports.updateMyPassword = catchAsync(async (req, res, next) => {
  // 1.) Get user from collection
  // Cannot use findByIdAndUpdate because validators and 'pre' middlewares wont work
  const user = await User.findById(req.user.id).select("+password");

  // 2.) Check if posted current password is correct
  if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    return next(new AppError("Your current password is wrong!", 401));
  }

  // 3.) If so, update password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();

  // 4.) Log user in, send JWT
  createAndSendToken(user, 200, req, res);
});
