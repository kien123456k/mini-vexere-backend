const {User} = require('../../models/user.model');
const jwt = require('../../helpers/jwt.helper');
const asyncCatch = require('../../utils/asyncCatch.util');
const {BadRequest} = require('../../helpers/errors.helper');
const bearerTokenParser = require('../../utils/bearerTokenParser.util');

// GET /api/{{version}}/users/auth/refresh
module.exports = asyncCatch(async (req, res, next) => {
  const accessToken = bearerTokenParser(req);

  try {
    await jwt.verifyAccessToken(accessToken);
    return res.status(200).json({
      status: 'success',
      message: 'Token is valid',
    });
  } catch (err) {
    if (err.message === 'jwt expired') {
      const payload = jwt.decodeAcessToken(accessToken);

      const user = await User.findOne({_uid: payload.sub});
      if (!user) throw new BadRequest('User not found');

      const newAccessToken = await jwt.signAccessToken(user);

      return res.status(200).json({
        status: 'success',
        message: 'Token was resets successfully',
        data: newAccessToken,
      });
    }

    return Promise.reject(err);
  }
});
