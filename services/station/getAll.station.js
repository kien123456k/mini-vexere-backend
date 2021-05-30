const {Station} = require('../../models/station.model');
const asyncCatch = require('../../utils/asyncCatch.util');
const {DefaultError} = require('../../helpers/errors.helper');

// GET /api/{{version}}/stations?page=x&limit=6
module.exports = asyncCatch(async (req, res, next) => {
  let stations, length;
  const pageOptions = {
    page: parseInt(req.query.page, 10),
    limit: parseInt(req.query.limit, 10),
  };
  if (pageOptions.page && pageOptions.limit) {
    stations = await Station.find()
      .sort({
        name: 'asc',
      })
      .skip((pageOptions.page - 1) * pageOptions.limit)
      .limit(pageOptions.limit);
    if (!stations) throw new DefaultError('Something wrong with server connection');
    length = await Station.estimatedDocumentCount();

    return res.status(200).json({
      status: 'success',
      message: 'Stations were gotten successfully',
      data: stations,
      table: {pages: Math.ceil(length / pageOptions.limit), entries: length},
    });
  }
  stations = await Station.find().sort({
    name: 'asc',
  });
  if (!stations) throw new DefaultError('Something wrong with server connection');

  return res.status(200).json({
    status: 'success',
    message: 'Stations were gotten successfully',
    data: stations,
  });
});
