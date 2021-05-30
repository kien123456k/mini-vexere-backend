const {Station} = require('../../models/station.model');
const asyncCatch = require('../../utils/asyncCatch.util');
const {NotFound} = require('../../helpers/errors.helper');
const validator = require('../../helpers/validator.helper');
const validatorSchema = require('../../models/validators/station.validator');

// GET /api/{{version}}/stations/:stationId
module.exports = asyncCatch(async (req, res, next) => {
  const {stationId} = req.params;

  const data = validator(validatorSchema(['_id']), {_id: stationId});

  const station = await Station.findById(data._id);
  if (!station) throw new NotFound('Station not found');

  return res.status(200).json({
    status: 'success',
    message: 'Station was gotten successfully',
    data: station,
  });
});
