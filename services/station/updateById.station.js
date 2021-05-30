const {Station} = require('../../models/station.model');
const asyncCatch = require('../../utils/asyncCatch.util');
const {DefaultError, NotFound, BadRequest} = require('../../helpers/errors.helper');
const validator = require('../../helpers/validator.helper');
const validatorSchema = require('../../models/validators/station.validator');

// PUT /api/{{version}}/stations/:stationId
module.exports = asyncCatch(async (req, res, next) => {
  const {stationId} = req.params;

  const data = validator(validatorSchema(['_id', 'address', 'province', 'description']), {
    _id: stationId,
    ...req.body,
  });

  const foundStation = await Station.findById(data._id);
  if (!foundStation) throw new NotFound('Station not found');

  const station = await Station.findByIdAndUpdate(data._id, {
    $set: {
      address: data.address,
      province: data.province,
      description: data.description,
      imageUrl: data.imageUrl,
    },
  });
  if (!station) throw new DefaultError('Something wrong with server connection');

  return res.status(200).json({
    status: 'success',
    message: 'Station was updated successfully',
  });
});
