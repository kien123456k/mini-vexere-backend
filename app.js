const express = require('express');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');
const envConfig = require('./config');
const api = require('./controllers');
const errorHandler = require('./helpers/errors.helper').errorHandler;
const {createAdmin} = require('./helpers/seeder.helper');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.use(logger('dev'));
app.use(express.json());
app.use(cors({origin: envConfig.CLIENT_URL}));
app.use('/images', express.static('images'));
if (envConfig.NODE_ENV === 'production') {
  createAdmin(envConfig.ADMIN_UID, envConfig.ADMIN_PHONE);
}

// Add headers
app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', envConfig.CLIENT_URL);
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', false);
  // Pass to next layer of middleware
  next();
});

// setup routes
app.use(`/api/${envConfig.VERSION}`, api);
// catch 404 and forward to error handler
app.use(async (req, res, next) => {
  return res.status(400).json({
    success: 'fail',
    message: 'Unable to locate the requested resource',
  });
});
// handle error
app.use(errorHandler);

module.exports = app;
