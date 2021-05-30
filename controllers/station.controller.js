const express = require('express');
const typePicker = require('../utils/typePicker.util');
const {
  getById_station,
  getAll_station,
  create_station,
  updateById_station,
  deleteById_station,
} = require('../services');
const {authenticate, authorize} = require('../middlewares/auth');
const router = express.Router();

router.get('/:stationId', getById_station);
router.get('/', getAll_station);
router.post('/', authenticate, authorize(typePicker(['ADMIN'])), create_station);
router.put('/:stationId', authenticate, authorize(typePicker(['ADMIN'])), updateById_station);
router.delete('/:stationId', authenticate, authorize(typePicker(['ADMIN'])), deleteById_station);

module.exports = router;
