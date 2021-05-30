const _ = require('lodash');
const {BadRequest} = require('./errors.helper');
const Joi = require('joi');

module.exports = (fields, values) => {
  const info = _.pick(values, _.keys(fields));
  const {error, value} = Joi.object(fields).options({abortEarly: false}).validate(info);

  if (error) {
    const message = _.map(error.details, 'message');
    throw new BadRequest(message);
  }

  return value;
};
