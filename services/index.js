module.exports = {
  // station services
  create_station: require('./station/create.station'),
  deleteById_station: require('./station/deleteById.station'),
  getById_station: require('./station/getById.station'),
  getAll_station: require('./station/getAll.station'),
  updateById_station: require('./station/updateById.station'),
  // user services
  deleteById_user: require('./user/deleteById.user'),
  getAll_user: require('./user/getAll.user'),
  getById_user: require('./user/getById.user'),
  getProfile_user: require('./user/getProfile.user'),
  login_user: require('./user/login.user'),
  register_user: require('./user/register.user'),
  refresh_user: require('./user/refresh.user'),
  updateById_user: require('./user/updateById.user'),
  getRefreshToken_user: require('./user/getRefreshToken.user'),
  getAccessToken_user: require('./user/getAccessToken.user'),
};
