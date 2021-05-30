const express = require('express');
const router = express.Router();
const stationController = require('./station.controller');
const userController = require('./user.controller');

router.use('/stations', stationController);
router.use('/users', userController);

module.exports = router;
