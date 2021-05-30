const {User} = require('../../models/user.model');
const asyncCatch = require('../../utils/asyncCatch.util');
const {NotFound} = require('../../helpers/errors.helper');
const validator = require('../../helpers/validator.helper');
const validatorSchema = require('../../models/validators/user.validator');

// Delete /api/{{version}}/users/:userId
module.exports = asyncCatch(async (req, res, next) => {
  const data = validator(validatorSchema(['_uid']), {_uid: req.params.userUid});

  const user = await User.findOne({_uid: data._uid});
  if (!user) throw new NotFound('User not found');

  const deletedUser = await user.deleteOne();
  console.log(deletedUser);
  return res.status(200).json({
    status: 'success',
    message: 'User was deleted successfully',
  });
});
