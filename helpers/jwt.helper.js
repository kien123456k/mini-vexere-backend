const jwt = require('jsonwebtoken');
const config = require('../config');
const util = require('util');
const {Unauthorized} = require('../helpers/errors.helper');

const jwtSign = util.promisify(jwt.sign);
const jwtVerify = util.promisify(jwt.verify);

const signAccessToken = (user) => {
  const payload = {
    sub: user._uid,
    phone_number: user.phone,
    name: user.name,
    email: user.email,
    birth: user.birth,
    gender: user.gender,
    type: user.type,
  };
  const options = {
    expiresIn: config.EXPIRES_ACCESS_TIME,
    issuer: config.BACKEND_URL,
    audience: config.BACKEND_URL,
  };

  return jwtSign(payload, config.JWT_ACCESS_SECRET_KEY, options)
    .then((token) => Promise.resolve(token))
    .catch((err) => Promise.reject(err));
};

const signRefreshToken = (user) => {
  const payload = {sub: user._uid};
  const options = {
    issuer: config.BACKEND_URL,
    audience: config.BACKEND_URL,
  };

  return jwtSign(payload, config.JWT_REFRESH_SECRET_KEY, options)
    .then((token) => Promise.resolve(token))
    .catch((err) => Promise.reject(err));
};

const verifyAccessToken = (token) => {
  return jwtVerify(token, config.JWT_ACCESS_SECRET_KEY)
    .then((payload) => Promise.resolve(payload))
    .catch((err) => {
      const message = err.name === 'JsonWebTokenError' ? 'Unauthorized' : err.message;

      throw new Unauthorized(message);
    });
};

const verifyRefreshToken = (token) => {
  return jwtVerify(token, config.JWT_REFRESH_SECRET_KEY)
    .then((payload) => Promise.resolve(payload))
    .catch((err) => {
      const message = err.name === 'JsonWebTokenError' ? 'Unauthorized' : err.message;

      throw new Unauthorized(message);
    });
};

const decodeAcessToken = (token) => {
  return jwt.decode(token);
};

module.exports = {
  signAccessToken,
  signRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
  decodeAcessToken,
};
