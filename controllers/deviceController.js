var coap = require('coap'),
    bl = require('bl');
var response;

exports.index = function(req, res) {
    res.render('index');
};

exports.coapRequest = function (req, res) {
  var method = req.body.method;
  var host = req.body.host;
  var path = "/" + req.body.path;
  var query = req.body.query;
  coap
    .request({
      host: host,
      port: 5683,
      pathname: path,
      method: method,
      query: query
    })
    .on('response', function (resCoap) {
      console.info('CoAP response code', resCoap.code);
      if (resCoap.code !== '2.05') {
        console.log("Error while contacting CoAP service: %s", resCoap.code);
        res.render('index', {error: "Error while contacting CoAP service: " + resCoap.code});
      } else {
        resCoap.pipe(bl(function (err, data) {
          if (method == 'GET') {
            try {
              var json = JSON.parse(data);
              response = json;
            } catch (e) {
              response = data;
            }
          } else {
            response = 'CoAP response code ' + resCoap.code;
          }
          console.log('Response: ', response);
          res.render('index', {data: response});
        }));
      }
    })
    .end();
};