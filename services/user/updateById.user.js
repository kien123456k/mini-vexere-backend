const {User} = require('../../models/user.model');
const jwt = require('../../helpers/jwt.helper');
const asyncCatch = require('../../utils/asyncCatch.util');
const {NotFound, DefaultError, Forbidden} = require('../../helpers/errors.helper');
const validator = require('../../helpers/validator.helper');
const validatorSchema = require('../../models/validators/user.validator');
const UserTypeEnum = require('../../utils/userTypeEnum.util');

// PUT /api/{{version}}/users/:userId
module.exports = asyncCatch(async (req, res, next) => {
  let foundUser, user;

  const data = validator(validatorSchema(['_uid', 'name', 'birth', 'gender']), {
    _uid: req.params.userUid,
    ...req.body,
  });

  if (req.user.type === UserTypeEnum.ADMIN) {
    foundUser = await User.findOne({_uid: data._uid});
    if (!foundUser) throw new NotFound('User not found');

    user = await User.findOneAndUpdate(
      {_uid: data._uid},
      {$set: {name: data.name, birth: data.birth, gender: data.gender}}
    );
    if (!user) throw new DefaultError('Something wrong with server connection');
  }

  foundUser = await User.findOne({_uid: data._uid});
  if (!foundUser) throw new NotFound('User not found');

  user = await User.findOneAndUpdate(
    {_uid: data._uid},
    {$set: {name: data.name, birth: data.birth, gender: data.gender}}
  );
  if (!user) throw new DefaultError('Something wrong with server connection');

  const accessToken = await jwt.signAccessToken({
    sub: user._uid,
    phone_number: user.phone,
    name: user.name,
    birth: user.birth,
    gender: user.gender,
    type: user.type,
  });

  return res.status(200).json({
    status: 'success',
    message: 'User was updated successfully',
    data: accessToken,
  });
});
