const joi = require('joi');
joi.objectId = require('joi-objectid')(joi);
const JoiDate = require('@hapi/joi-date');
const Joi = joi.extend(JoiDate);
const UserTypeEnum = require('../../utils/userTypeEnum.util');
const UserGenderEnum = require('../../utils/userGenderEnum.util');

module.exports = (fields = []) => {
  const getSchema = (field) => {
    switch (field) {
      case '_id':
        return Joi.objectId().required();
      case '_uid':
        // add pattern
        return Joi.string().trim().required();
      case 'phone':
        return Joi.string()
          .regex(/^(0)+([0-9]{9})\b$/)
          .required();
      case 'name':
        return Joi.string()
          .allow('')
          .min(2)
          .max(255)
          .regex(
            /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/
          )
          .trim()
          .required();
      case 'birth':
        return Joi.date().allow('').format('YYYY-DD-MM').required();
      case 'gender':
        return Joi.string()
          .trim()
          .allow('')
          .valid(UserGenderEnum.MALE, UserGenderEnum.FEMALE)
          .required();
      case 'upcomingTrips':
        return Joi.array().items(Joi.object()).required();
      case 'successfulTrips':
        return Joi.array().items(Joi.object()).required();
      case 'canceledTrips':
        return Joi.array().items(Joi.object()).required();
      case 'type':
        return Joi.string().trim().valid(UserTypeEnum.NORMAL, UserTypeEnum.ADMIN).required();
      case 'refreshToken':
        return Joi.string().trim().required();
    }
  };

  const schema = {};

  for (let item of fields) {
    schema[`${item}`] = getSchema(item);
  }

  return schema;
};
