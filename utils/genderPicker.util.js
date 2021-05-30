const _ = require('lodash');
const UserGenderEnum = require('./userGenderEnum.util');

const genderPicker = (userTypeArray) => {
  return _.values(_.pick(UserGenderEnum, userTypeArray));
};

module.exports = genderPicker;
