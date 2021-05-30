const _ = require('lodash');
const UserTypeEnum = require('./userTypeEnum.util');

const typePicker = (userTypeArray) => {
  return _.values(_.pick(UserTypeEnum, userTypeArray));
};

module.exports = typePicker;
