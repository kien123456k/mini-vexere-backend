const {User} = require('../../models/user.model');
const asyncCatch = require('../../utils/asyncCatch.util');
const {NotFound} = require('../../helpers/errors.helper');
const validator = require('../../helpers/validator.helper');
const validatorSchema = require('../../models/validators/user.validator');

// GET /api/{{version}}/users/me
module.exports = asyncCatch(async (req, res, next) => {
  const data = validator(validatorSchema(['_uid']), {_uid: req.user._uid});

  const user = await User.findOne({_uid: data._uid});
  if (!user) throw new NotFound('User not found');

  return res.status(200).json({
    status: 'success',
    message: 'User was gotten successfully',
    data: user,
  });
});
