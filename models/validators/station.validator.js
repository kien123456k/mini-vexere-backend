const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports = (fields = []) => {
  const getSchema = (field) => {
    switch (field) {
      case '_id':
        return Joi.objectId().required();
      case 'name':
        return Joi.string().max(127).trim().required();
      case 'address':
        return Joi.string().max(127).trim().required();
      case 'province':
        return Joi.string().max(127).trim().required();
      case 'description':
        return Joi.string().allow('');
    }
  };

  const schema = {};

  for (let item of fields) {
    schema[`${item}`] = getSchema(item);
  }

  return schema;
};
