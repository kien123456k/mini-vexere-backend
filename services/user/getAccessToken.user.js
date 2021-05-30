const {User} = require('../../models/user.model');
const jwt = require('../../helpers/jwt.helper');
const asyncCatch = require('../../utils/asyncCatch.util');
const bearerTokenParser = require('../../utils/bearerTokenParser.util');
const {Unauthorized, DefaultError} = require('../../helpers/errors.helper');

// GET /api/{{version}}/users/auth/access
module.exports = asyncCatch(async (req, res, next) => {
  const refreshToken = bearerTokenParser(req);

  const payload = await jwt.verifyRefreshToken(refreshToken);
  const user = await User.findOne({_uid: payload.sub});
  if (!user) throw new DefaultError('Something wrong with server connection');

  if (refreshToken !== user.refreshToken) throw new Unauthorized('Unauthorized');

  const accessToken = await jwt.signAccessToken(user);

  return res.status(201).json({
    status: 'success',
    message: 'User refreshed token successfully',
    data: accessToken,
  });
});
