const {User} = require('../models/user.model');
const jwt = require('../helpers/jwt.helper');
const asyncCatch = require('../utils/asyncCatch.util');
const bearerTokenParser = require('../utils/bearerTokenParser.util');
const {Forbidden, DefaultError} = require('../helpers/errors.helper');

module.exports.authenticate = asyncCatch(async (req, res, next) => {
  const token = bearerTokenParser(req);
  const payload = await jwt.verifyAccessToken(token);

  const user = await User.findOne({_uid: payload.sub});
  if (!user) throw new DefaultError('Something wrong with server connection');

  req.user = user;
  return next();
});

module.exports.authorize = (userTypeArray) => (req, res, next) => {
  const user = req.user;
  if (userTypeArray.indexOf(user.type) > -1) return next();

  throw new Forbidden('You do not have permission');
};
