const {User} = require('../../models/user.model');
const jwt = require('../../helpers/jwt.helper');
const asyncCatch = require('../../utils/asyncCatch.util');
const {BadRequest, DefaultError} = require('../../helpers/errors.helper');
const validator = require('../../helpers/validator.helper');
const validatorSchema = require('../../models/validators/user.validator');

// POST /api/{{version}}/users
module.exports = asyncCatch(async (req, res, next) => {
  const data = validator(validatorSchema(['_uid', 'phone']), req.body);

  const uidUser = await User.findOne({_uid: data._uid});
  const phoneUser = await User.findOne({phone: data.phone});
  if (uidUser || phoneUser) throw new BadRequest('This phone number is already exists');

  const refreshToken = await jwt.signRefreshToken(data);

  const createdUser = await User.create({...data, refreshToken});
  if (!createdUser) throw new DefaultError('Something wrong with server connection');

  const accessToken = await jwt.signAccessToken(createdUser);

  return res.status(201).json({
    status: 'success',
    message: 'User registered successfully',
    data: accessToken,
  });
});
