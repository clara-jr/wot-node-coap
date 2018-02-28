var coap = require('coap'),
    bl = require('bl');
var response;

exports.coapRequest = function (req, res) {
  var coaprequest = req.params.coaprequest.split("_");
  var method = coaprequest[0];
  var host = coaprequest[1];
  var path = "/" + coaprequest[2];
  var query = coaprequest[3];
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
        res.status(200).jsonp({error: "Error while contacting CoAP service: " + resCoap.code});
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
          res.status(200).jsonp({data: response});
        }));
      }
  })
  .end();
};