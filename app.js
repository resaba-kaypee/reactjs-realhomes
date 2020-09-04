const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controller/errorController');

const viewRoutes = require('./router/viewRoutes');
const userRoutes = require('./router/userRoutes');
const propertyRoutes = require('./router/propertyRoutes');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//=====================================>> MIDDLEWARES

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static(__dirname, "client/build"));
  
  app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

// Serving static files in dev
app.use(express.static(path.join(__dirname, 'client/public')));

// Dev logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(helmet());

// Limit request from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many request from this IP, please try again in an hour.',
});

app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
// Body parser, reading data from url into req.body
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

// Data sanitization againts NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS (cross-site-scripting)
app.use(xss());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      'location',
      'price',
      'areaSize',
      'lotSize',
      'bedrooms',
      'bathrooms',
      'garage',
    ],
  })
);

//=====================================>> TEST MIDDLEWARE
app.use((req, res, next) => {
  // console.log(req.cookies);
  next();
});

//=====================================>> SERVER ROUTES
app.use('/api', viewRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/properties', propertyRoutes);

//=====================================>> UNHANDLED ROUTE
app.all('*', (req, res, next) => {
  // const err = new Error(`Could not find ${req.originalUrl} on this server!`);
  // err.status = 'fail';
  // err.statusCode = 404;

  next(new AppError(`Could not find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);
module.exports = app;
