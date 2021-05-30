const envPath = __dirname + `/../.env.${process.env.NODE_ENV}`;
if (process.env.NODE_ENV !== 'production') {
  const env = require('dotenv').config({path: envPath});
  require('dotenv-parse-variables')(env.parsed);
}

console.log(`Running on ${process.env.NODE_ENV}`);

const NODE_ENV = process.env.NODE_ENV;
const DATABASE_URL = process.env.DATABASE_URL;
const DATABASE_NAME = process.env.DATABASE_NAME;
const CLIENT_URL = process.env.CLIENT_URL;
const BACKEND_URL = process.env.BACKEND_URL;
const PORT = process.env.PORT;
const JWT_ACCESS_SECRET_KEY = process.env.JWT_ACCESS_SECRET_KEY;
const JWT_REFRESH_SECRET_KEY = process.env.JWT_REFRESH_SECRET_KEY;
const EXPIRES_ACCESS_TIME = eval(process.env.EXPIRES_ACCESS_TIME);
const ADMIN_UID = process.env.ADMIN_UID;
const ADMIN_PHONE = process.env.ADMIN_PHONE;
const VERSION = process.env.VERSION;

module.exports = {
  NODE_ENV,
  DATABASE_URL,
  DATABASE_NAME,
  CLIENT_URL,
  BACKEND_URL,
  PORT,
  JWT_ACCESS_SECRET_KEY,
  JWT_REFRESH_SECRET_KEY,
  EXPIRES_ACCESS_TIME,
  ADMIN_UID,
  ADMIN_PHONE,
  VERSION,
};
