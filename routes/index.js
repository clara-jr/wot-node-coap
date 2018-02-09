var express = require('express');
var router = express.Router();

var deviceController = require('../controllers/deviceController');

router.route('/').get(deviceController.index); // renderizar formulario con ip del device, method y path

router.route('/coap').post(deviceController.coapRequest) // recibir method y path y si es GET hacer un get con coap y si es PUT un put y devolver respuesta

module.exports = router;