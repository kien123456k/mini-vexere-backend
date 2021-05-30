const mongoose = require('mongoose');
const UserTypeEnum = require('../utils/userTypeEnum.util');

const UserSchema = new mongoose.Schema({
  _uid: {type: String, required: true},
  phone: {type: String, required: true},
  email: {type: String, default: ''},
  name: {type: String, default: ''},
  birth: {type: Date, default: ''},
  gender: {type: String, default: ''},
  type: {type: String, default: UserTypeEnum.NORMAL},
  refreshToken: {type: String, required: true},
});

const User = mongoose.model('User', UserSchema, 'User');
module.exports = {UserSchema, User};
