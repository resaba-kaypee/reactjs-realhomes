/* eslint-disable no-console */
const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
  console.log('Uncaught Exception: Server shutting down...');
  console.log(err.name, err.message);

  process.exit(1);
});

// need to include the pfolder where config.env resides
dotenv.config({ path: 'config.env' });
const app = require('./app');

const DB = process.env.DATABASE_LOCAL;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('MongoDB Connected');
  });

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
  console.log(`Server listening to ${PORT}...`);
});

process.on('unhandledRejection', (err) => {
  console.log('Unhandled Rejection: Server shutting down...');
  console.log(err.name, err.message);

  server.close(() => {
    process.exit(1);
  });
});
