const {User} = require('../models/user.model');
const jwt = require('./jwt.helper');
const {DefaultError} = require('./errors.helper');
const UserTypeEnum = require('../utils/userTypeEnum.util');

const createAdmin = async (_uid, phone) => {
  const refreshToken = await jwt.signRefreshToken({_uid: _uid});
  const foundUser = await User.find({_uid});
  if (foundUser.length) return;
  const createdUser = await User.create({_uid, phone, refreshToken, ...{type: UserTypeEnum.ADMIN}});
  if (!createdUser) throw new DefaultError('Something wrong with server connection');
};

module.exports = {createAdmin};
