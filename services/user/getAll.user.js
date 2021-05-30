const {User} = require('../../models/user.model');
const asyncCatch = require('../../utils/asyncCatch.util');
const {DefaultError} = require('../../helpers/errors.helper');

// GET /api/{{version}}/users?page=x&limit=6
module.exports = asyncCatch(async (req, res, next) => {
  let users, length;
  const pageOptions = {
    page: parseInt(req.query.page, 10),
    limit: parseInt(req.query.limit, 10),
  };
  if (pageOptions.page && pageOptions.limit) {
    users = await User.find()
      .skip((pageOptions.page - 1) * pageOptions.limit)
      .limit(pageOptions.limit);
    if (!users) throw new DefaultError('Something wrong with server connection');
    length = await User.estimatedDocumentCount();
    if (!length) throw new DefaultError('Something wrong with server connection');

    return res.status(200).json({
      status: 'success',
      message: 'Users were gotten successfully',
      data: users,
      table: {pages: Math.ceil(length / pageOptions.limit), entries: length},
    });
  }

  users = await User.find({});
  if (!users) throw new DefaultError('Something wrong with server connection');

  return res.status(200).json({
    status: 'success',
    message: 'Users were gotten successfully',
    data: users,
  });
});
