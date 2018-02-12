var express = require('express');
var router = express.Router();

var deviceController = require('../controllers/deviceController');

router.route('/')  
  .get(deviceController.index)
  .post(deviceController.coapRequest);

module.exports = router;