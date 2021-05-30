const express = require('express');
const typePicker = require('../utils/typePicker.util');
const {
  getProfile_user,
  getById_user,
  getRefreshToken_user,
  getAccessToken_user,
  getAll_user,
  login_user,
  register_user,
  refresh_user,
  updateById_user,
  deleteById_user,
} = require('../services');
const {authenticate, authorize} = require('../middlewares/auth');
// const {uploadImage} = require('../middlewares/images/index');

const router = express.Router();

router.get('/me', authenticate, authorize(typePicker(['NORMAL', 'ADMIN'])), getProfile_user);
router.get('/:userUid', authenticate, authorize(typePicker(['ADMIN'])), getById_user);
router.get('/auth/refresh', refresh_user);
router.get('/auth/refreshToken', getRefreshToken_user);
router.get('/auth/access', getAccessToken_user);
router.get('/', authenticate, authorize(typePicker(['ADMIN'])), getAll_user);
router.post('/auth/register', register_user);
router.post('/auth/login', login_user);
router.put('/:userUid', authenticate, authorize(typePicker(['NORMAL', 'ADMIN'])), updateById_user);
router.delete('/:userUid', authenticate, authorize(typePicker(['ADMIN'])), deleteById_user);

module.exports = router;
