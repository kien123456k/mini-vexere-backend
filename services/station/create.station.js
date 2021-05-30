const {Station} = require('../../models/station.model');
const asyncCatch = require('../../utils/asyncCatch.util');
const {BadRequest, DefaultError} = require('../../helpers/errors.helper');
const validator = require('../../helpers/validator.helper');
const validatorSchema = require('../../models/validators/station.validator');

// POST /api/{{version}}/stations
module.exports = asyncCatch(async (req, res, next) => {
  const data = validator(validatorSchema(['name', 'address', 'province', 'description']), req.body);

  const station = await Station.findOne(data);
  if (station) throw new BadRequest('This station is already exists');

  const createdStation = await Station.create(data);
  if (!createdStation) throw new DefaultError('Something wrong with server connection');

  return res.status(201).json({
    status: 'success',
    message: 'Station was created successfully',
  });
});
