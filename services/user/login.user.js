const {User} = require('../../models/user.model');
const jwt = require('../../helpers/jwt.helper');
const asyncCatch = require('../../utils/asyncCatch.util');
const {NotFound} = require('../../helpers/errors.helper');
const validator = require('../../helpers/validator.helper');
const validatorSchema = require('../../models/validators/user.validator');

// POST /api/{{version}}/users/login
module.exports = asyncCatch(async (req, res, next) => {
  const data = validator(validatorSchema(['_uid', 'phone']), req.body);

  const user = await User.findOne(data);
  if (!user) throw new NotFound('User is not exist');

  const accessToken = await jwt.signAccessToken(user);

  return res.status(200).json({
    status: 'success',
    message: 'User logged in successfully',
    data: accessToken,
  });
});
