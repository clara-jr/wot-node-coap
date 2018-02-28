var express = require('express');
var router = express.Router();

var deviceController = require('../controllers/deviceController');

router.route('/:coaprequest')
  .get(deviceController.coapRequest);

module.exports = router;